<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validation des données
    $nom = htmlspecialchars($_POST["nom"]); // Évite les attaques XSS
    $email = $_POST["email"];
    $message = htmlspecialchars($_POST["message"]); // Évite les attaques XSS
    
    // Vérification du nom
    if (empty($nom)) {
        echo "Veuillez entrer votre nom.";
        exit;
    }
    
    // Vérification de l'e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "L'adresse e-mail n'est pas valide.";
        exit;
    }
    
    // Autres validations ici...
    
    // Envoi de l'e-mail
    $to = "gonosyannis@gmail.com";
    $subject = "Message de $nom depuis le formulaire de contact";
    $headers = "From: $email";
    
    if (mail($to, $subject, $message, $headers)) {
        // Redirection vers index.html avec message de confirmation
        header("Location: index.html?success=true");
        exit;
    } else {
        echo "Une erreur s'est produite lors de l'envoi de l'e-mail.";
    }
} else {
    // Redirection en cas d'accès direct au script sans soumission de formulaire
    header("Location: index.html");
    exit;
}
?>
