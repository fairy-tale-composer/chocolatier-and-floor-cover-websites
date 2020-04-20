var toggler = document.querySelector('.nav-toggler'),
	navWrap = document.querySelector('.top-fixed-wrap'),
	navList = document.querySelector('.nav-list'),
	navIcons = document.querySelector('.icons');

toggler.onclick = function () {
	navList.classList.toggle('nav-list-dropped');
	navWrap.classList.toggle('nav-wrap-mob');
	
	if (navList.classList.contains('nav-list-dropped')) {
		toggler.style.backgroundImage = 'url("img/menu-icon2.jpg")';
		navIcons.style.visibility = 'visible';
	} else {
		toggler.style.backgroundImage = 'url("img/menu-icon1.jpg")';
		navIcons.style.visibility = 'hidden';
	}
};