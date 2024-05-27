<?php
// Paramètres de connexion à la base de données
$host = 'localhost'; // Hôte de la base de données
$dbName = 'Portfolio'; // Nom de la base de données
$user = 'root'; // Nom d'utilisateur pour la connexion à la base de données
$pass = ''; // Mot de passe pour la connexion à la base de données

try {
    // Création de la connexion PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbName", $user, $pass);
    // Activation de l'affichage des erreurs PDO
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupération des messages de la base de données
    $sql = "SELECT * FROM message";
    $stmt = $pdo->query($sql);
    $messageList = $stmt->fetchAll(PDO::FETCH_ASSOC);

} catch(PDOException $e) {
    // Gestion des erreurs de connexion
    die("Erreur de connexion : ". $e->getMessage());
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Tableau des Messages</title>
</head>
<body>

<h2>Messages</h2>

<!-- Tableau pour afficher les messages -->
<table>
    <tr>
        <th>ID</th>
        <th>Auteur</th>
        <th>Message</th>
        <th>Date</th>
    </tr>
    <!-- Boucle pour parcourir chaque message et afficher ses informations -->
    <?php foreach ($messageList as $row):?>
    <tr>
        <td><?php echo htmlspecialchars($row['nom']);?></td>
        <td><?php echo htmlspecialchars($row['email']);?></td>
        <td><?php echo htmlspecialchars($row['message']);?></td>
        <td><?php echo htmlspecialchars($row['date']);?></td>
    </tr>
    <?php endforeach;?>
</table>

</body>
</html>
