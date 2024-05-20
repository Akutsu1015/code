<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $recipient = "bastienakkimitch@outlook.com"; // Remplacez par votre adresse e-mail
    $subject = "Nouveau message de $name";
    $headers = "From: $email";

    $fullMessage = "Vous avez reçu un nouveau message de $name ($email) :\n\n$message";

    mail($recipient, $subject, $fullMessage, $headers);

    header("Location: index.html"); // Rediriger vers une page de confirmation après l'envoi
    exit;
}
?>
