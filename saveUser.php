<?php
	header('Content-type: text/html; charset=utf-8');
	if (isset($_POST)) {
		$namee = $_POST["name"];
		$email = $_POST["email"];
	}
	$name = iconv("UTF-8", "windows-1251", $namee);
	$file = file("email/users.csv"); // Считываем весь файл в массив 
	$fp = fopen("email/users.csv", "w");
	fputs($fp, implode("", $file));
	$obj = "\"$name\";\"$email\";\r\n";
	$test = fwrite($fp, $obj); // Запись в файл
	if ($test) echo 'Вы зарегались!';
	else echo 'Ошибка регистрации!';
	fclose($fp);
?>