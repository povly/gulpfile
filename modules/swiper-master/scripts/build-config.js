import { parseSwiperBuildModulesEnv } from './utils/helper.js';

const envBuildModules = parseSwiperBuildModulesEnv();

export const modules = envBuildModules || [
  'navigation',
  'pagination',
  'effect-fade',
  'scrollbar',
  'autoplay',
  'thumbs',
];

export default {
  modules,
};
