<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];



if (isset($_POST['newsletter'])) {
    $title = "Новая заявка на рассылку Best Tour Plan";
    $body = "
    <h2>Заявка на получение рассылки</h2>
    <b>email:</b><br>$email
    ";
} else if (isset($_POST['footermail'])) {
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
} else if (isset($_POST['modalmail'])) {
    $title = "Бронирование Grand Hilton Hotel";
    $body = "
    <h2>Заявка на бронирование отеля</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br>
    <b>Почта:</b> $email<br><br>
    <b>Сообщение:</b><br>$message
    ";
}
// Формирование самого письма

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'besttourplan.glo@gmail.com'; // Логин на почте
    
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('besttourplan.glo@gmail.com', 'maria kop'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('riyaromanova@gmail.com');
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }

    // Отображение результата
    if (isset($_POST['newsletter'])) {
        header('Location: thanknewsletter.html');
    } else if (isset($_POST['footermail'])) {
        header('Location: thankyou.html');
    } else if (isset($_POST['modalmail'])) {
        header('Location: thankyou.html');
    }

