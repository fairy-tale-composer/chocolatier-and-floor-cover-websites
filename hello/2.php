<?php
if (!empty($_POST['login']) AND !empty($_POST['email']) ) {
	
	$headers = 'От: Валентина Чернова\r\n';
	$theme = 'Новое сообщение';
	
	$letter = 'Данные сообщения:\r\n';
	$letter .='Имя: '.$_POST['login'].'\r\n';
	$letter .='Email: '.$_POST['email'].'\r\n';
	$letter .='Сообщение: '.$_POST['message'].'\r\n';
	
	if (mail('diana3akakeniya@mail.ru', $theme, $letter, $headers)) {
		header('Location:/thankyou.php');
	} else {
		header('Location:/fail.php');
	}
} else {
	header('Location:/fail.php');
}
?>