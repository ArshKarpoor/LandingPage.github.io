document.querySelector('header h2').addEventListener('click', function () {
  window.open("file:///C:/Users/DELL/Desktop/Arsh%20Folder/Website%20made%20by%20arsh/Website%20Using%20Html%20&%20Css/index.html", "_self");
});

// Menu

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
  header.classList.toggle('toggled');
  hamburger.classList.toggle('toggleIsOn');
});
