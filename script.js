const toggleButton = document.getElementById('toggleButton');
const weatherAside = document.getElementById('weatherAside');

toggleButton.addEventListener('click', () => {
   weatherAside.classList.toggle('visible');
   if (weatherAside.classList.contains('visible')) {
       toggleButton.textContent = '\u25B2'; // Seta para cima quando aparece
   } else {
       toggleButton.textContent = '\u25BC'; // Seta para baixo quando some
   }
});