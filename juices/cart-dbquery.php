<?php

$connection = mysqli_connect('127.0.0.1', 'root', 'Cla99Rin_14elLo', 'juice');

if ($connection == false) {
	echo 'Произошла ошибка, попробуйте обновить страницу.';
	exit();
}

$current_product_id = $_GET['id'];
$product_quantity = $_GET['quantity'];
$result_info = array();

$product_query = mysqli_query($connection, "SELECT * FROM `products` WHERE id = $current_product_id");

while( ($product_info = mysqli_fetch_assoc($product_query)) ) {
	$product_id = $product_info['id'];
	$product_title = $product_info['name'];
	$product_price  = $product_info['price'];
	$product_img = $product_info['img'];
	
	$result_info[0] = $product_id;
	$result_info[1] = $product_title;
	$result_info[2] = $product_price;
	$result_info[3] = $product_img;
	$result_info[4] = $product_quantity;
}

$result_info = json_encode($result_info);
echo $result_info;

mysqli_free_result($product_query);
mysqli_close($connection);
?>