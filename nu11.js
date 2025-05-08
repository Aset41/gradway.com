const tabs = document.querySelectorAll('.tab');
const descriptionTab = document.getElementById('description-tab');
const specialtiesTab = document.getElementById('specialties-tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Табы түстермен ауыстыру
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Контентті көрсету
    if (tab.textContent === "Описание") {
      descriptionTab.style.display = "block";
      specialtiesTab.style.display = "none";
    } else {
      descriptionTab.style.display = "none";
      specialtiesTab.style.display = "block";
    }
  });
});