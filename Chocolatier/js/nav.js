var toggler = document.querySelector('.nav-toggler');
toggler.onclick = function () {
	var navList = document.querySelector('.nav-list');
	navList.classList.toggle('nav-list-dropped');
	
	if (navList.classList.contains('nav-list-dropped')) {
		toggler.style.backgroundImage = 'url("img/menu-icon2.jpg")';
	} else {
		toggler.style.backgroundImage = "url('img/menu-icon1.jpg')";
	}
};