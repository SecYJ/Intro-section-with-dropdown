const btnMenu = document.querySelector("[data-menu-btn]");
const btnClose = document.querySelector("[data-btn-close]");
const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector("[data-sidebar]");
const dropdownButtons = document.querySelectorAll("[data-dropdown-button");
const dropdownMobileButtons = document.querySelectorAll(
	"[data-mobile-dropdown-btn]"
);

btnMenu.addEventListener("click", () => {
	overlay.classList.add("active");
	sidebar.classList.add("show");
});

btnClose.addEventListener("click", () => {
	overlay.classList.remove("active");
	sidebar.classList.remove("show");
});

dropdownButtons.forEach((dropdown) => {
	dropdown.addEventListener("click", () => {
		const parentEl = dropdown.closest(".nav-item");
		parentEl.classList.toggle("open");
	});
});

dropdownMobileButtons.forEach((dropdown) => {
	dropdown.addEventListener("click", () => {
		const parentEl = dropdown.closest(".nav-list");
		parentEl.classList.toggle("open");
	});
});
