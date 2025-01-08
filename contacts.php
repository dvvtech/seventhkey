<?php session_start();?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=windows-1251" />
<title>OOО "Центр Альтернативной Психологии "Седьмой ключ"</title>
<meta name="keywords" content="" />
<meta name="description" content="седьмой ключ, контакты" />
<meta property="og:title" content="Санкт-Петербургский Центр Альтернативной Психологии Седьмой ключ/>
<meta property="og:url" content="http://www.seventhkey.ru/"/>
<meta property="og:description" content="седьмой ключ"/>
<link href="default.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="snow.js" charset="windows-1251"></script>
<script type="text/javascript" src="JScript5.js"></script>
<script src="http://maps.google.com/maps?file=api&v=2.x&key=ABQIAAAAVHQ2elrT0cPBKax13yppPRT0np7WxnSXNl4QFXed2YLICSmkyRSuAfdxeqp8Pkn_l-x-Lbr2xR41Xg" type="text/javascript"></script>
  <script type="text/javascript">

       var map;

       function initialize()
       {
           map = new GMap2(document.getElementById("map"));
           map.setCenter(new GLatLng(59.834565, 30.251364), 13);
           <!--map.addControl(new GLargeMapControl());-->
           <!--map.addControl(new GMapTypeControl());-->

           var bounds = map.getBounds();
           var southWest = bounds.getSouthWest();
           var northEast = bounds.getNorthEast();
           var lngSpan = northEast.lng() - southWest.lng();
           var latSpan = northEast.lat() - southWest.lat();

           var latlng = new GLatLng(59.834565, 30.251364);
           var marker = new GMarker(latlng);

           map.addOverlay(marker);
       }

  </script>

</head>
<body onload="initialize()" onunload="GUnload()">
<!-- start header -->
<div id="header">
	<div id="menu">
		<ul>
			<li><a href="index.html">Главная</a></li>
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
			<h1 class="title">Контакты </h1>
			<div class="entry">
				<p>
           <!-- <br/>
           Адрес: г. Санкт-Петербург, ул. Лёни Голикова, д.104 кв.12
           <br/> -->
           e-mail: msdezhurnyuk@gmail.com
           <br/>
           Дежурнюк Мария Сергеевна (директор)
           <br/>
           тел. : +79215978459
           <br/>
           <!-- <br/>
           <div id="map" style="width: 500px; height: 312px"> </div>
           <br/> -->
           <br/>
           
           <h1 class="title">Обратная связь</h1>
           <h3>Для быстрой связи с нами заполните форму ниже</h3>
           <br/><br/>

           <form name="test" action="send.php" method="post" >

           <p><b>Ваше имя:</b><br/>
             <input name="name" type="text" size="40">
           </p><br/>

           <p><b>Ваша почта:</b><br/>
             <input name="email" type="text" size="40">
           </p><br/>

          <p><b>Сообщение:</b><br/>
            <textarea name="message" cols="40" rows="3"></textarea>
          </p><br/>

          <p>Введите числа с картинки: <br/>

          <table>
            <tr>
              <td>
                <?php require 'captcha.php';?>
              </td>

              <td>
                <input name="pr" style=" margin-bottom:11px" type="text" size="6" maxlength="5"></p>
              </td> 
            </tr>
          </table>
          <button type="submit" class="button green rounded">Отправить</br></button>
          </form>
           
           
        </p>
      </div>
    </div>
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
					<li><a href="photons.html">Движение фотонов</a></li>
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
	  <center><p id="legal">(c) 2011-2024 Design by DVV </p></center>
	</td></tr>
	</table>
	</div>
</div>
<!-- end footer -->
</body>
</html>
</div>
