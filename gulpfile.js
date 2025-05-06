let preprocessor = "sass";
const { src, dest, parallel, series, watch } = require("gulp"),
	browserSync = require("browser-sync").create(),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify"),
	sass = require("gulp-sass")(require("sass")),
	autoprefixer = require("gulp-autoprefixer"),
	cleancss = require("gulp-clean-css"),
	pug = require("gulp-pug"),
	babel = require("gulp-babel"),
	ttf2woff = require("gulp-ttf2woff"),
	ttf2woff2 = require("gulp-ttftowoff2"),
	newer = require("gulp-newer"),
	imagemin = require("gulp-imagemin"),
	webp = require("gulp-webp"),
	avif = require("gulp-avif"),
	cached = require('gulp-cached'),
	dependents = require('gulp-dependents');

const fs = require('fs');
function loadScriptsConfig() {
	try {
		scriptsConfig = JSON.parse(fs.readFileSync('./scripts.config.json'));
	} catch (err) {
		console.error('Error loading scripts config:', err);
	}
}

loadScriptsConfig();

const arraySrc = {
	img: {
		src: ["src/images/**/*.*"],
		dest: "app/img",
	},
	fonts: {
		src: "src/fonts/**/*.ttf",
		dest: "app/fonts/",
	},
	app: {
		url: "app/",
	},
};

function optimizeImage() {
	return src(arraySrc.img.src)
		.pipe(newer(arraySrc.img.dest))
		// .pipe(
		// 	image({
		// 		progressive: true,
		// 	})
		// )
		.pipe(imagemin([
			imagemin.mozjpeg({ quality: 75, progressive: true }),
			imagemin.optipng({ optimizationLevel: 5 }),
			imagemin.svgo({
				plugins: [{ removeViewBox: false }, { cleanupIDs: false }]
			})
		]))
		.pipe(dest(arraySrc.img.dest))
		.pipe(browserSync.stream());
}

function webpImage() {
	return src(arraySrc.img.src)
		.pipe(newer("app/img"))
		.pipe(webp())
		.pipe(dest(arraySrc.img.dest))
		.pipe(browserSync.stream());
}

function avifImage() {
	return src(arraySrc.img.src)
		.pipe(newer("app/img"))
		.pipe(avif())
		.pipe(dest(arraySrc.img.dest))
		.pipe(browserSync.stream());
}

function processFonts() {
	return src(arraySrc.fonts.src)
		.pipe(newer(arraySrc.fonts.dest + '*.woff'))
		.pipe(ttf2woff())
		.pipe(dest(arraySrc.fonts.dest))
		.pipe(src(arraySrc.fonts.src))
		.pipe(newer(arraySrc.fonts.dest + '*.woff2'))
		.pipe(ttf2woff2())
		.pipe(dest(arraySrc.fonts.dest))
		.pipe(browserSync.stream());
}

function pugg() {
	return src(["src/pug/pages/**/*.pug"])
		// .pipe(cached('pug'))
		.pipe(pug({ pretty: true }))
		.pipe(dest(arraySrc.app.url))
		.pipe(browserSync.stream());
}

function browsersync() {
	browserSync.init({
		server: { baseDir: arraySrc.app.url },
		notify: false,
		online: true,
	});
}

function scriptsLibraries() {
	return src(scriptsConfig.libraries.src)
		.pipe(newer(scriptsConfig.libraries.dest))
		.pipe(dest(scriptsConfig.libraries.dest))
		.pipe(browserSync.stream());
}

function scriptsMain() {
	return src(scriptsConfig.main.src)
		.pipe(cached('main_script'))
		.pipe(
			babel({
				presets: [
					[
						"@babel/preset-env",
						{
							useBuiltIns: "entry",
							corejs: "3.22",
						},
					],
				],
			})
		)
		.pipe(
			uglify({
				toplevel: true,
				mangle: {
					reserved: ["Swiper"],
				},
			})
		)
		.pipe(concat(scriptsConfig.main.output))
		.pipe(dest(scriptsConfig.main.dest))
		.pipe(browserSync.stream());
}

function scriptsPages() {
	return src(scriptsConfig.pages.src)
		.pipe(cached('pages_scripts'))
		.pipe(
			babel({
				presets: [
					[
						"@babel/preset-env",
						{
							useBuiltIns: "entry",
							corejs: "3.22",
						},
					],
				],
			})
		)
		.pipe(newer(scriptsConfig.pages.dest))
		.pipe(dest(scriptsConfig.pages.dest))
		.pipe(browserSync.stream());
}

function startwatch() {
	let scriptsWatcher;

	function restartScriptsWatchers() {
		if (scriptsWatcher) scriptsWatcher.close();

		scriptsWatcher = watch([
			...scriptsConfig.main.watch,
			...scriptsConfig.pages.watch,
			...scriptsConfig.libraries.watch,
			'scripts.config.json'
		], series(scriptsLibraries, scriptsMain, scriptsPages));
	}

	// Первоначальная настройка
	restartScriptsWatchers();

	watch('scripts.config.json', (done) => {
		loadScriptsConfig();
		restartScriptsWatchers();
		done();
	});
	watch(["src/images/**/*"], series(optimizeImage, webpImage, avifImage));
	watch(["src/fonts/**/*.ttf"], processFonts);
	watch(scriptsConfig.main.watch, scriptsMain);
	watch(scriptsConfig.pages.watch, scriptsPages);
	watch(scriptsConfig.libraries.watch, scriptsLibraries);
	watch(["src/pug/**/*.pug"], pugg);
	watch("src/" + preprocessor + "/**/*", styles_part);
	watch("src/" + preprocessor + "/**/*", styles);
	watch("src/**/*.html").on("change", browserSync.reload);
}

function styles_part() {
	return src(["src/" + preprocessor + "/**/*." + preprocessor], {
		ignore: [
			"src/" + preprocessor + "/common/**/*." + preprocessor,
			// "src/" + preprocessor + "/components/**/*." + preprocessor,
			"src/" + preprocessor + "/functions/**/*." + preprocessor,
			"src/" + preprocessor + "/includes/**/*." + preprocessor,
			"src/" + preprocessor + "/modal/**/*." + preprocessor,
			// "src/" + preprocessor + "/pages/**/*." + preprocessor,
		],
	})
		.pipe(cached('styles_part'))
		.pipe(dependents())
		.pipe(eval(preprocessor)().on('error', sass.logError))
		.pipe(autoprefixer({ grid: true }))
		.pipe(
			cleancss({
				level: { 1: { specialComments: 0 } } /* , format: 'beautify' */,
			})
		)
		.pipe(dest("app/css/parts"))
		.pipe(browserSync.stream());
}

function styles() {
	return src("src/" + preprocessor + "/main." + preprocessor)
		.pipe(cached('main_style'))
		.pipe(dependents())
		.pipe(eval(preprocessor)().on('error', sass.logError))
		.pipe(eval(preprocessor)())
		.pipe(concat("style.min.css"))
		.pipe(autoprefixer({ grid: true }))
		.pipe(
			cleancss({
				level: { 1: { specialComments: 0 } } /* , format: 'beautify' */,
			})
		)
		.pipe(dest("app/css/"))
		.pipe(browserSync.stream());
}

exports.browsersync = browsersync;
exports.scriptsLibraries = scriptsLibraries;
exports.scriptsMain = scriptsMain;
exports.scriptsPages = scriptsPages;
exports.styles = styles;
exports.styles_part = styles_part;
exports.pugg = pugg;
exports.processFonts = processFonts;
exports.optimizeImage = optimizeImage;
exports.webpImage = webpImage;
exports.avifImage = avifImage;

exports.default = parallel(
	pugg,
	optimizeImage,
	webpImage,
	avifImage,
	processFonts,
	styles,
	styles_part,
	scriptsLibraries,
	scriptsMain,
	scriptsPages,
	browsersync,
	startwatch
);
