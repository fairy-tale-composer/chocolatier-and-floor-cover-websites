let juiceGridItems = document.querySelectorAll('.juice-grid-item');

for (i = 0; i < juiceGridItems.length; i++) {
	juiceGridItems[i].onclick = function () {
		let currentProductId = this.id;
		window.location.href = window.location.href.replace('shop.php', 'product-info.php?id=' + currentProductId);
	}
	
	let viewJuiceA = juiceGridItems[i].querySelector('.view-juice-a');
	
	juiceGridItems[i].onmouseover = function () {
		viewJuiceA.style.visibility = 'visible';
		viewJuiceA.style.opacity = '1';
		viewJuiceA.style.height = '50px';
	}
	juiceGridItems[i].onmouseout = function () {
		viewJuiceA.style.visibility = 'hidden';
		viewJuiceA.style.opacity = '0';
		viewJuiceA.style.height = '15px';
	}
}