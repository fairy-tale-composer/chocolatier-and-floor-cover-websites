document.querySelector('.buy-btn').onclick = () => {
	window.location.href = 'shop.php';
};

const setActiveNavbarItem = () => {
	document.querySelector('#home-link').parentElement.classList.add('active-navbar-item');
};

setActiveNavbarItem();