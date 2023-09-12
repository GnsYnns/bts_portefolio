import requests
from bs4 import BeautifulSoup
import csv
from flask import Flask, request


def search_subject(url, subject, keywords):
    # Faire une demande HTTP pour obtenir le contenu HTML de la page
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    # Trouver tous les éléments de contenu de la page
    content_elements = soup.find_all('p')
    # Initialiser une liste pour stocker les résultats
    results = []
    # Parcourir chaque élément de contenu
    for element in content_elements:
        # Rechercher l'occurrence du sujet
        if subject in element.text.split():
            # Initialiser un dictionnaire pour stocker les informations
            result = {'site': url, 'mots-clefs': keywords, 'url': url}
            # Rechercher les occurrences des mots-clés
            for keyword in keywords:
                if keyword in element.text:
                    result['mots-clefs_trouves'] = keyword
            # Ajouter les résultats à la liste
            results.append(result)
    # Écrire les résultats dans un fichier CSV
    with open('resultat veille.csv', mode='w') as csv_file:
        fieldnames = ['site', 'mots-clefs', 'mots-clefs_trouves', 'url']
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
        writer.writeheader()
        for result in results:
            writer.writerow(result)


app = Flask(__name__)

@app.route('/create_csv', methods=['POST'])
def create_csv():
    data = request.form['data']
    search_subject(data.split(','))
    return "CSV created!"
