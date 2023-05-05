<?php

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Generate the confirmation message
$confirmationMessage = "Thank you, your message has been submitted!<br><br>";
$confirmationMessage .= "Name: " . $name . "<br>";
$confirmationMessage .= "Email: " . $email . "<br>";
$confirmationMessage .= "Message: " . $message;

// Display the confirmation page
echo "<html><head><title>Contact Us Form Submission</title></head><body>";
echo $confirmationMessage;
echo "</body></html>";

?>
