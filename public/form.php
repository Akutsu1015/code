<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $destinataire = "bastienakkimitch@outlook.com";  

    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $sujet = "Nouveau message de $nom";

    $entete = "De: $email";

    mail($destinataire, $sujet, $message, $entete);
    echo "Votre message a été envoyé avec succès. Merci de nous avoir contacté.";
} else {

}
