var toggler = document.querySelector('.nav-toggler'),
	navWrap = document.querySelector('.top-fixed-wrap');

toggler.onclick = function () {
	navWrap.classList.toggle('nav-wrap-mob');
	
	if (navWrap.classList.contains('nav-wrap-mob')) {
		toggler.style.backgroundImage = 'url("img/menu-icon2.jpg")';
	} else {
		toggler.style.backgroundImage = 'url("img/menu-icon1.jpg")';
	}
};