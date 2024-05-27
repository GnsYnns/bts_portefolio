
// Ecoute l'événement DOMContentLoaded pour s'assurer que le document HTML est entièrement chargé avant d'exécuter le code JavaScript ci-dessous.
document.addEventListener('DOMContentLoaded', function() {

    // Sélectionne l'élément du formulaire par son ID "Formulaire". 
    const monFormulaire = document.getElementById('Formulaire');

    monFormulaire.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre automatiquement
        
        const nom = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!nom ||!email ||!message) {
            alert('Veuillez remplir tous les champs.');
            return; // Arrête l'exécution de la fonction
        }

        // URL du fichier PHP
        var url = 'message.php';

        // Données à envoyer au fichier PHP
        var data = {
            content: message,
            author: nom,
            email: email,
            redirectUrl: 'index.html'
        };

        // Envoyer une requête POST au fichier PHP
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Convertit la réponse en texte
        })
    .then(text => {
            // Si le serveur renvoie une redirection, suivi de l'URL de redirection
            if (text.startsWith('<meta http-equiv="refresh" content="0;url=')) {
                window.location.href = text.split(';')[1].split('"')[1]; // Récupère l'URL de redirection et redirige l'utilisateur
            } else {
                alert('Insertion réussie, mais il semble y avoir eu une erreur de redirection.');
            }
        })
    .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

        });

    // Si tout est OK, soumettez le formulaire manuellement
    this.submit();
});


