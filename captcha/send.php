<?php  

 session_start();

 if  (isset($_POST['name'])) {  

     $name = $_POST['name'];   

     if ($name == '') unset($name);  

 }  

 if  (isset($_POST['email'])) {  

     $email = $_POST['email'];   

     if ($email == '') unset($email);  

 }  

 if  (isset($_POST['message'])) {  

     $message = $_POST['message'];   

     if ($message == '') unset($message);  

 }  

    

 /* ��������� ��������� �� ��� ���� */  

 if  (isset($name) && isset($email) && isset($message)) {  

    

    /* ������� ��� ������ ������� � �������� �����, � ����� �����������  ��� ���� HTML �  �������*/    

    $name =  htmlspecialchars(trim($name));   

    $email =  htmlspecialchars(trim($email));  

    $message =  htmlspecialchars(trim($message));  

    

   /*  ��������� ������������ ����� email-������ */  

   if(!preg_match("/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i",  $email)){   

      die("������������  ������ e-mail ������!");  

   }  




if (isset($_POST['pr']) && $_POST['pr'] == $_SESSION['keystring'])
{
	echo "��������������";
	
 
}
else
{	/*echo "�����������";
	echo $_SESSION['keystring'];
        echo "�����������"; 
        echo isset($_POST['pr']);
        echo "�����������";
	echo  $_POST['pr'];
        echo "�����������";*/
         die("������������ ����� �����"); 
        
}







    

  /* ��������� ��������� */ 

  $address  = "biker-moto@mail.ru";  

  $sub  = "��������� � ����� ������ �����!!!";  

  $mes  = "����� ��������: $name  \n������� ����� E-mail: $email \n���������� ������: \n$message";  

    

  /* ��������  ��������� */  

  $verify =  mail ($address,$sub,$mes,"Content-type:text/plain; charset = windows-1251\r\nFrom:$email");  

  if  ($verify == 'true'){  

       
    echo  "��������� ����������";
   

  }  

  else {  

   echo  "��������� �� ����������!";  

  }  

    

 }   

 else{  

   echo  "�� ��������� �� ��� ����!";   

 }   

 ?> 
