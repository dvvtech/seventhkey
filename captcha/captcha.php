﻿<?php 

session_start();

	require "captcha.class.php";

	$captcha = new Captcha();

	$_SESSION['keystring'] = $captcha->getKeyString();

	echo $captcha->draw();
?>