<?php

// Votre script PHP de connexion ici
// Exemple de vérification des identifiants
$staffname = $_POST['id']; // Nom d'utilisateur
$password = $_POST['password']; // Mot de passe
$error = ""; // Message d'erreur potentiel

if (isset($_POST['submit'])) {
    if ($staffname == "YnnsGnsAdminLog" && $password == "mMDrfg12#!/p6541") {
        $error = ""; // Aucun message d'erreur si les identifiants sont valides
        // Redirection vers une autre page après succès
        header("Location: dashboard.php");
    } else {
        $error = "* Identifiants incorrects."; // Message d'erreur si les identifiants sont incorrects
    }
}

echo $error; // Affiche le message d'erreur si nécessaire

?>