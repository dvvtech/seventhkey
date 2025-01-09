﻿<?php session_start();?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=windows-1251" />
<title>OOО "Центр Альтернативной Психологии "Седьмой ключ"</title>
<meta name="keywords" content="седьмой,ключ,альтернативная,психология,путь,счастью,счастье" />
<meta name="description" content="седьмой ключ" />
<meta property="og:title" content="Санкт-Петербургский Центр Альтернативной Психологии Седьмой ключ/>
<meta property="og:url" content="http://www.seventhkey.ru/"/>
<meta property="og:description" content="седьмой ключ"/>
<link href="default.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="snow.js" charset="windows-1251"></script>
<script type="text/javascript" src="JScript5.js"></script>
</head>
<body>
<!-- start header -->
<div id="header">
	<div id="menu">
		<ul>
			<li class="current_page_item" ><a href="index.html">Главная</a></li>
			<li><a href="news.html">Новости и события</a></li>
			<li><a href="about.html">О нашем центре</a></li>
			<li><a href="articles/main.html">Статьи</a></li>
      <li><a href="harmonizers.html">Гармонизаторы</a></li>
			<li><a href="poetry.html">Творчество</a></li>
		</ul>
	</div>
</div>
<div id="logo-wrap">
  <div id="logo">
  </div>
</div>
<!-- end header -->
<!-- start page -->
<div id="page">
  <canvas id="myCanvas" width="300" height="300" style="position:absolute; margin-left:-281px; margin-top:-250px"></canvas>
  <canvas id="myCanvas2" width="300" height="300" style="position:absolute; margin-left:827px; margin-top:-250px"></canvas>
	<!-- start content -->
	<div id="content">
		<div class="post">
      <br/>
   <h1 class="title"> </h1>
   <h1 class="title"></h1>
      <div class="entry">

                <?php

                  if (isset($_POST['name']))
                  {
                    $name = $_POST['name'];
                    if ($name == '') unset($name);
                  }

                  if (isset($_POST['email']))
                  {
                    $email = $_POST['email'];
                    if ($email == '') unset($email);
                  }

                  if  (isset($_POST['message']))
                  {
                    $message = $_POST['message'];
                    if ($message == '') unset($message);
                  }

                  /* Проверяем заполнены ли все поля */
                  if  (isset($name) && isset($email) && isset($message))
                  {
                       /* Убираем все лишние пробелы и переносы строк, а также преобразуем  все теги HTML в  символы*/

                       $name =  htmlspecialchars(trim($name));
                       $email =  htmlspecialchars(trim($email));
                       $message =  htmlspecialchars(trim($message));

                      /*  Проверяем правильность ввода email-адреса */

                      if(!preg_match("/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i",  $email))
                      {
                          die("Неправильный  формат e-mail адреса!");
                      }

                      if (isset($_POST['pr']) && $_POST['pr'] == $_SESSION['keystring'])
                      {

                      }
                      else
                      {
                        die("Неверно ввели цифровой код");
                      }

                      /* Формируем сообщение */
                      $address  = "dvv153m@gmail.com";//"mary@seventhkey.ru";
                      $sub  = "Сообщение с моего нового сайта!!!";
                      $mes  = "Автор назвался: $name  \nОставил такой E-mail: $email \nСодержание письма: \n$message";

                      /* Отправка  сообщения */
                      $verify =  mail ($address,$sub,$mes,"Content-type:text/plain; charset = windows-1251\r\nFrom:$email");
                      if($verify == 'true')
                      {
                          echo  "Сообщение отправлено";
                      }
                      else
                      {
                         echo  "Сообщение не отправлено!";
                      }

                  }
                  else
                  {
                     echo  "Вы заполнили не все поля!";
                  }
                ?>

      <div class="meta">  <!-- Не удалять иначе смещается меню-->
			</div>
      </div>
		</div>

    <!--<div class="post">
       <h2 class="title">Интервью </h2>
		</div>-->
	</div>

	<!-- end content -->
	<!-- start sidebar -->
	<div id="sidebar">
		<ul>
			<li>
        <h2>Ключ к счастью</h2>
        <h3></h3>
        <h2>Информация</h2>
				<ul>
          <li><a href="response/people1.html">Отзывы пациентов</a></li>
          <li><a href="response/scientific.html">Отзывы ученых</a></li>
          <li><a href="partners.html">Партнеры</a></li>
          <li><a href="contacts.php">Контакты</a></li>
				</ul>
			</li>
			<li>
				<h2>Факты</h2>
				<ul>
					<li><a href="lines.html">Завиткообразные отпечатки</a></li>
				</ul>
			</li>
		</ul>
	</div>
	<!-- end sidebar -->
	<div style="clear: both;">&nbsp;</div>
</div>
<!-- end page -->
<!-- start footer -->
<div id="footer">
	<div id="footer-wrap">
  <table><tr height="42"><td width="850">
	  <center><p id="legal">(c) 2011-2025 Design by DVV </p></center>
	</td></tr>
	</table>
	</div>
</div>
<!-- end footer -->
</body>
</html>
