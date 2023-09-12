//Fonction pour récupérer les articles depuis un flux RSS
function getRSSFeed() {
    const url = "https://news.google.com/rss/search?q=neuromorphic+computing";
    fetch(url)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        const items = data.querySelectorAll("item");
        const list = document.getElementById("rss-feed");
        list.innerHTML = ""; // vider la liste avant d'ajouter les nouveaux articles
        items.forEach(item => {
          const title = item.querySelector("title").textContent;
          const link = item.querySelector("link").textContent;
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = link;
          a.textContent = title;
          li.appendChild(a);
          list.appendChild(li);
        });
      });
  }

// Appel de la fonction à l'ouverture de la page
getRSSFeed();