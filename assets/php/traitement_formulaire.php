<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Adresse e-mail de destination
    $destinataire = "gonosyannis@gmail.com";

    // Sujet de l'e-mail
    $sujet = "Nouveau message depuis le formulaire de contact";

    // Contenu de l'e-mail
    $contenu = "Nom: $nom\n";
    $contenu .= "Email: $email\n";
    $contenu .= "Message:\n$message";

    // Entêtes de l'e-mail
    $entetes = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Configuration SMTP pour Gmail
    ini_set("SMTP", "smtp.gmail.com");
    ini_set("smtp_port", "587");
    ini_set("sendmail_from", "votre_adresse_email@gmail.com");

    // Envoi de l'e-mail
    if (mail($destinataire, $sujet, $contenu, $entetes)) {
        // Redirection vers une page de confirmation
        header("Location: ../../confirmation.html");
    } else {
        // Gestion de l'erreur d'envoi
        echo "Erreur lors de l'envoi de l'e-mail. Veuillez réessayer.";
    }
} else {
    // Le formulaire n'a pas été soumis, vous pouvez gérer cela ici
    echo "Le formulaire n'a pas été soumis.";
}
?>
