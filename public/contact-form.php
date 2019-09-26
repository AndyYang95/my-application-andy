<?php

    $fname= $_POST['firstname'];
    $lname= $_POST['lastname'];
    $visitor_email=$_POST['email'];
    $sbj= $_POST['subject'];
    $message= $_POST['msg'];

    $send_to= "a60803ndy@gmail.com";
    $body= "User Name: $fname $lname \n".
            "User Email: $visitor_email \n".
            "Message: $message\n";

    $headers= "From: ### \r\n";
    $headers .="Reply-To: $visitor_email \r\n";
    
    mail($send_to , $sbj, $body, $headers);
    header("Location: MV_contact.html");

?>