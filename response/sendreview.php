<?php session_start();?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=windows-1251" />
<title>OO� "����� �������������� ���������� "������� ����"</title>
<meta name="keywords" content="�������,����,��������������,����������,����,�������,�������" />
<meta name="description" content="������� ����" />
<meta property="og:title" content="�����-������������� ����� �������������� ���������� ������� ����/>
<meta property="og:url" content="http://www.seventhkey.ru/"/>
<meta property="og:description" content="������� ����"/>
<link href="../default.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="snow.js" charset="windows-1251"></script>
<script type="text/javascript" src="JScript5.js"></script>
</head>
<body>
<!-- start header -->
<div id="header">
	<div id="menu">
		<ul>
			<li class="current_page_item" ><a href="../index.html">�������</a></li>
			<li><a href="../news.html">������� � �������</a></li>
			<li><a href="../about.html">� ����� ������</a></li>
			<li><a href="../articles/main.html">������</a></li>
      <li><a href="../harmonizers.html">�������������</a></li>
			<li><a href="../poetry.html">����������</a></li>
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
				  
				  if (isset($_POST['city']))
                  {
                    $city = $_POST['city'];
                    if ($city == '') unset($city);
                  }
				  
				  if (isset($_POST['age']))
                  {
                    $age = $_POST['age'];
                    if ($age == '') unset($age);
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

                  /* ��������� ��������� �� ��� ���� */
                  if  (isset($name) && isset($city) && isset($age) && isset($email) && isset($message))
                  {
                       /* ������� ��� ������ ������� � �������� �����, � ����� �����������  ��� ���� HTML �  �������*/

                       /*$name =  htmlspecialchars(trim($name));
					   $city =  htmlspecialchars(trim($city));
					   $age =  htmlspecialchars(trim($age));
                       $email =  htmlspecialchars(trim($email));
                       $message =  htmlspecialchars(trim($message));*/

                      /*  ��������� ������������ ����� email-������ */

                      if(!preg_match("/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i",  $email))
                      {
                          die("������������  ������ e-mail ������!");
                      }

                      if (isset($_POST['pr']) && $_POST['pr'] == $_SESSION['keystring'])
                      {

                      }
                      else
                      {
                        die("<p>������� ����� �������� ���</p>");
                      }

                      /* ��������� ��������� */
                      $address  = "dvv153m@gmail.com";//"mary@seventhkey.ru";
                      $sub  = "��������� � ����� ������ �����!!!";
                      $mes  = "����� ��������: $name  \n�����: $city  \n�������: $age  \n������� ����� E-mail: $email \n���������� ������: \n$message";

                      /* ��������  ��������� */
                      $verify =  mail ($address,$sub,$mes,"Content-type:text/plain; charset = windows-1251\r\nFrom:$email");
                      if($verify == 'true')
                      {
                          echo  "<p>��� ����� ����� ����������� �� ����� � ������� 48 �����.</br>���������� ��� �� �������� �����, ��� ����� ��� �������� �����.</p>";
                      }
                      else
                      {
                         echo  "<p>��������� ������ ��� ������� ������</p>";
                      }

                  }
                  else
                  {
                     echo  "<p>�� ��������� �� ��� ����!</p>";
                  }
                ?>

      <div class="meta">  <!-- �� ������� ����� ��������� ����-->
			</div>
      </div>
		</div>

	</div>

	<!-- end content -->
	<!-- start sidebar -->
	<div id="sidebar">
		<ul>
			<li>
        <h2>���� � �������</h2>
        <h3></h3>
        <h2>����������</h2>
				<ul>
          <li><a href="people1.html">������ ���������</a></li>
          <li><a href="scientific.html">������ ������</a></li>
          <li><a href="../partners.html">��������</a></li>
          <li><a href="../contacts.php">��������</a></li>
				</ul>
			</li>
			<li>
				<h2>�����</h2>
				<ul>
					<li><a href="../lines.html">��������������� ���������</a></li>
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
	  <center><p id="legal">(c) 2011-2022 Design by DVV </p></center>
	</td></tr>
	</table>
	</div>
</div>
<!-- end footer -->
</body>
</html>
