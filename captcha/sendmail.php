<?php session_start();?>


 <form name="test" action="send.php" method="post" >
  <p><b>���� ���:</b><br>
   <input name="name" type="text"  size="40"> 
  </p>

  <p><b>���� �����:</b><br>
   <input name="email" type="text" size="40">
  </p>

  

  <p>�����������<Br>
   <textarea name="message" cols="40" rows="3"></textarea></p>
  
   

<p>������� ����� � ��������: <br>

 

 <?php require 'captcha.php';?>   

 

<input name="pr" style=" margin-bottom:11px" type="text" size="6" maxlength="5"></p>


<p><input type="submit" value="���������">


 </form>
