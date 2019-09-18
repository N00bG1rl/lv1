<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$error = "";
$errorMessage = 'Sorry, your message can not be sent.';

// Validate first
if (empty($name)||empty($email)||empty($message)) {
  echo "Name, email and message are required!";
  header('Location: contact.html');
}
// Validate against any email injection attempts
if (IsInjected($email)) {
  echo "Bad email value!";
  header('Location: contact.html');
}

$msg =  " Name : $name \r\n";
$msg .= " Email: $email \r\n";
$msg .= " Message : ".stripslashes($_POST['message'])."\r\n\n";
$msg .= "User information \r\n";
$msg .= "User IP : ".$_SERVER["REMOTE_ADDR"]."\r\n";
$msg .= "Browser info : ".$_SERVER["HTTP_USER_AGENT"]."\r\n";
$msg .= "User come from : ".$_SERVER["SERVER_NAME"];

$recipient = "marttila.helen@gmail.com";
$subject =  "Sender information";
$mailheaders = "From: $email\r\nReply-To: $email\r\nReturn-Path: $email\r\n";

if (!$error) {
	$sending = mail($recipient, $subject, $msg, $mailheaders);
	
	if ($sending) {
			// If the message is sent we output a string to use it
			echo "SENDING";
		} else {
			// Display Error Message
			echo $errorMessage;
		}
} else {
  // Display Error Message
	echo $error;
}

// Function to validate against any email injection attempts
function IsInjected($str) {
  $injections = array('(\n+)',
                      '(\r+)',
                      '(\t+)',
                      '(%0A+)',
                      '(%0D+)',
                      '(%08+)',
                      '(%09+)'
                      );
  $inject = join('|', $injections);
  $inject = "/$inject/i";

  if (preg_match($inject,$str)) {
    return true;
  } else {
    return false;
  }
}

?>