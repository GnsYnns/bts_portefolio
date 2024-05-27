<?php
// Définissez vos variables de configuration
$host = 'localhost'; // Hôte de votre base de données
$dbName = 'portfolio'; // Nom de votre base de données
$user = 'root'; // Utilisateur de la base de données
$password = ''; // Mot de passe de la base de données

// Établir la connexion
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbName", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Préparer et exécuter la requête d'insertion
    $stmt = $conn->prepare("INSERT INTO message (content, author,email, date) VALUES (?,?,?,?)");
    $stmt->execute(['Votre message ici', 'Auteur du message', date('Y-m-d H:i:s')]);

    echo "Ligne insérée avec succès.";

    // Redirection vers le site souhaité
    header('Location: index.html');
    exit;
} catch(PDOException $error) {
    echo "Erreur : ". $sql. "<br>". $error->getMessage();
}
?>
