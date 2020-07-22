if (window.matchMedia("(max-width: 575px)").matches) {
	window.location.pathname = '/m' + window.location.pathname;
}

const button = document.querySelector('.navbar-toggler');
	
button.onclick = function () {
	button.classList.toggle('navbar-toggler-active');
};