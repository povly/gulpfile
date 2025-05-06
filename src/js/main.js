document.addEventListener("DOMContentLoaded", () => {


	function addModal(element) {
		element.classList.add("active");
		document.body.style.overflow = "hidden";
	}

	function removeModal(element) {
		element.classList.remove("active");
		document.body.style.overflow = "";
	} 

	function resetEvent(e) {
		e.preventDefault();
	}

	class PovlyModal {
		constructor() {
			this.allModals();
			this.allModalShows();
		}

		allModals() {
			const modals = document.querySelectorAll(".modal");
			modals.forEach((modal) => {
				function eventClose() {
					const event = new CustomEvent("pModalClose", {
						detail: {
							modal: modal,
						},
					});
					document.dispatchEvent(event);
				}

				function remove() {
					removeModal(modal);
					document.body.style.overflow = "";
					eventClose();
				}

				const closes = modal.querySelectorAll(".modal__close");
				if (closes[0]) {
					closes.forEach((close) => {
						close.addEventListener("click", () => {
							remove();
						});
					});
				}

				const back = modal.querySelector(".modal__back");
				if (back) {
					back.addEventListener("click", () => {
						remove();
					});
				}
				modal.addEventListener("click", (e) => {
					if (e.target == modal) {
						remove();
					}
				});
			});
		}

		allModalShows() {
			const modalShows = document.querySelectorAll(".modal__show");
			modalShows.forEach((modal) => {
				modal.addEventListener("click", (e) => {
					resetEvent(e);
					const dataModal = modal.getAttribute("data-modal");
					const _modal = document.querySelector(".modal_" + dataModal);
					addModal(_modal);
					// document.body.style.overflow = "hidden";

					const event = new CustomEvent("pModalOpen", {
						detail: {
							modal: _modal,
							element: modal,
						},
					});
					document.dispatchEvent(event);
				});
			});
		}
	}

	new PovlyModal();
});
