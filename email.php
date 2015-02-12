<?
if(isset($_POST)){
	$name = $_POST["name"];
	$email = $_POST["email"];
	$file_path = "/home/u969077683/public_html/easycycle/email/email.html";
	if(file_exists($file_path)){
		$file_content = file_get_contents($file_path);
	}
	else{
		die('Файл с выпуском рассылки не найден!');
	}
	$addresses = $email;
	$to = "";
	$q = $addresses;
	$to = $addresses;	
	$subject = "Easycycle";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	if(mail($to, $subject, $file_content, $headers)){
		echo "Ваше сообщение принято для отправки ---- ".$email;
	} 
	else{
		echo "Ваше сообщение НЕ принято для отправки";
	}
}
?>