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

    

 /* Проверяем заполнены ли все поля */  

 if  (isset($name) && isset($email) && isset($message)) {  

    

    /* Убираем все лишние пробелы и переносы строк, а также преобразуем  все теги HTML в  символы*/    

    $name =  htmlspecialchars(trim($name));   

    $email =  htmlspecialchars(trim($email));  

    $message =  htmlspecialchars(trim($message));  

    

   /*  Проверяем правильность ввода email-адреса */  

   if(!preg_match("/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i",  $email)){   

      die("Неправильный  формат e-mail адреса!");  

   }  




if (isset($_POST['pr']) && $_POST['pr'] == $_SESSION['keystring'])
{
	echo "апапапапаапапж";
	
 
}
else
{	/*echo "Разделитель";
	echo $_SESSION['keystring'];
        echo "Разделитель"; 
        echo isset($_POST['pr']);
        echo "Разделитель";
	echo  $_POST['pr'];
        echo "Разделитель";*/
         die("Неправильный ввели капчу"); 
        
}







    

  /* Формируем сообщение */ 

  $address  = "biker-moto@mail.ru";  

  $sub  = "Сообщение с моего нового сайта!!!";  

  $mes  = "Автор назвался: $name  \nОставил такой E-mail: $email \nСодержание письма: \n$message";  

    

  /* Отправка  сообщения */  

  $verify =  mail ($address,$sub,$mes,"Content-type:text/plain; charset = windows-1251\r\nFrom:$email");  

  if  ($verify == 'true'){  

       
    echo  "Сообщение отправлено";
   

  }  

  else {  

   echo  "Сообщение не отправлено!";  

  }  

    

 }   

 else{  

   echo  "Вы заполнили не все поля!";   

 }   

 ?> 
