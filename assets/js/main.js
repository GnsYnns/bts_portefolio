/*==================== AFFICHER/MASQUER LE MENU ====================*/

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== AFFICHER LE MENU =====*/
/* Valider si la constante existe */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MASQUER LE MENU =====*/
/* Valider si la constante existe */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*==================== RETIRER LE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // Lorsque nous cliquons sur chaque nav__link, nous retirons la classe show-menu
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDEON COMPÉTENCES ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
  skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  if (itemClass === 'skills__content skills__open') {
    this.parentNode.className = 'skills__content skills__close';
  } else if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}

skillsHeader.forEach(el => {
  el.addEventListener('click', toggleSkills);
});

/*==================== ONGLETS D'ÉTUDES ====================*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('etude__active');
    });
    target.classList.add('etude__active');

    tabs.forEach(tab => {
      tab.classList.remove('etude__active');
    });
    tab.classList.add('etude__active');
  });
});

/*==================== LIENS ACTIFS DES SECTIONS AU DÉFILEMENT ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGEMENT DE FOND DE L'EN-TÊTE ====================*/
function scrollHeader() {
  const nav = document.getElementById('header');
  // Lorsque le défilement est supérieur à 200 unités de la hauteur de la vue, ajouter la classe scroll-header à la balise d'en-tête
  if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== AFFICHER LE BOUTON DE DÉFILEMENT VERS LE HAUT ====================*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // Lorsque le défilement est supérieur à 560 unités de hauteur de vue, ajouter la classe show-scroll à la balise "a" avec la classe scroll-top
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== THÈME CLAIR/NOIR ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Thème précédemment sélectionné (si l'utilisateur a choisi)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtention du thème actuel de l'interface en vérifiant la classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Vérification si l'utilisateur a déjà choisi un thème
if (selectedTheme) {
  // Si la validation est remplie, on vérifie quelle option a été activée ou désactivée (thème sombre)
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activer / désactiver le thème manuellement avec le bouton
themeButton.addEventListener('click', () => {
  // Ajouter ou supprimer le thème sombre / icône
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Sauvegarde du thème et de l'icône actuels choisis par l'utilisateur
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
