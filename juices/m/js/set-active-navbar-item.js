const setActiveNavbarItem = () => {
	let currentPageId = document.querySelector('head').id;
	
	if (currentPageId !== undefined) {
		let currentPageLink = currentPageId.replace('page', 'link');
			document.querySelector('#' + currentPageLink).parentElement.classList.add('active-navbar-item');
	}
};

setActiveNavbarItem(); 