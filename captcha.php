<?php 
         
	session_start();

	require "captcha.class.php";
	
	$captcha = new Captcha();

	$_SESSION['keystring'] = $captcha->getKeyString();
    		
	echo iconv('cp866', 'utf-8', $captcha->draw());
?>