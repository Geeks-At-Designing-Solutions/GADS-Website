<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$name_post = $_POST['name'];
$email_post = $_POST['email'];
$subject_post = $_POST['subject'];
$message_post = $_POST['message'];

$mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true; 
    $mail->Username   = 'enquiry@gadssolutions.in';
    $mail->Password   = 'Enquiry@123';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;                                    

    $mail->setFrom('enquiry@gadssolutions.in');           
    $mail->addAddress('enquiry@gadssolutions.in');
    $mail->addAddress('gads@gadssolutions.in');
    $mail->isHTML(true);                                  
    $mail->Subject = 'A New message from Website Contact Form';
    $mail->Body    = 'Subject - '.$subject_post.'<br>Message - '.$message_post.'<br>Name - '.$name_post.'<br>Email - '.$email_post;
    echo $mail->send();
// echo "Thank You";

?>
