const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-content');

function selectTab(e) {
	removeTabActive();
	removeTabContentActive();

	this.classList.add('tab-active');

	const tabContent = document.querySelector(`#${this.id}-content`);

	tabContent.classList.add('tab-content-active');
};

function removeTabActive() {
	tabs.forEach(tab => tab.classList.remove('tab-active'));
};

function removeTabContentActive() {
	tabContent.forEach(tab => tab.classList.remove('tab-content-active'));
};

tabs.forEach(tab => tab.addEventListener('click', selectTab));


//Dropdown
const dropdownSelect = document.querySelectorAll('.h3-and-arrow');

function iconClick() {
	const dropContent = document.querySelector(`#${this.id}-content`)
	const changeArrow = document.querySelector(`#${this.id}-arrow`)
	const a = document.querySelector(`#${this.id}-ikon-kebalik`)

	dropContent.classList.toggle('dropdown-content-active')

	changeArrow.classList.toggle('change-arrow')

	a.classList.toggle('icon-kebaik')
}

dropdownSelect.forEach(icon => icon.addEventListener('click', iconClick))

// Header Navigation
const hamburgerMenu = document.querySelector('.hamburger-menu');
const headerNavigation = document.querySelector('.header-navigation');
const logoText = document.getElementById('logo-text');
const circle = document.getElementById('circle');
const circleInner = document.getElementById('circle-inner');
const closeMenu = document.querySelector('.close-menu');

hamburgerMenu.addEventListener('click', () => {
	headerNavigation.classList.toggle('header-navigation-active');
	logoText.classList.toggle('logo-text');
	circle.classList.toggle('circle');
	circleInner.classList.toggle('circle-inner');
	hamburgerMenu.classList.toggle('close-menu-active')

	document.body.classList.toggle('disable-scroll');
});