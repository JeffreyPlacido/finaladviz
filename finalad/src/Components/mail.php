<?php

if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $email=$_POST['email'];

    $to='jeffreyplacido@hotmail.com';
    $subject='Form Submission';
    $message="Name: ".$name;
    $headers="From: ".$email;

    mail($to,$subject,$message)
}
?>