/* jshint
devel: true,
browser: true,
globals: true
*/
let basketNumber = document.querySelector('#basket-number'),
	juices = 0,
	basketIcon = document.querySelector('.header-basket-icon'),
	greyBackground = document.querySelector('.grey-background');

const countJuicesInLS = () => {
	if (localStorage.length !== 0) {
		for (let i = 0; i < localStorage.length; i += 1) {
			if (localStorage.key(i).match(/^juice[0-9]{1,2}$/)) {
				juices += 1;		
			}
		}
	}
};

const setBasketNumber = () => {
	if (juices >= 1) {
		basketNumber.textContent = juices;
	}
};

countJuicesInLS();
setBasketNumber();

basketIcon.onclick = () => {
	window.location.href = 'full-cart.php';
};