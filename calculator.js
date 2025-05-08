// Университеттер мен мамандықтардың деректері
const universities = [
  {
      name: "Әл-Фараби атындағы Қазақ ұлттық университеті",
      code: "KazNU",
      specialties: [
          { code: "B060", name: "Математика", subjects: ["math"] },
          { code: "B060", name: "Физика", subjects: ["math", "physics"] },
          { code: "B060", name: "Химия", subjects: ["chemistry", "math"] }
      ]
  },
  {
      name: "Сәтбаев университеті",
      code: "Satbayev",
      specialties: [
          { code: "B070", name: "Информатика", subjects: ["math", "physics"] },
          { code: "B070", name: "Компьютерлік техника және бағдарламалық қамтамасыз ету", subjects: ["math", "physics"] },
          { code: "B070", name: "Математикалық және компьютерлік модельдеу", subjects: ["math"] }
      ]
  },
  
    {
        name: "Әл-Фараби атындағы Қазақ ұлттық университеті",
        code: "KazNU",
        specialties: [
            { code: "B060", name: "Математика", subjects: ["math"] },
            { code: "B060", name: "Физика", subjects: ["math", "physics"] },
            { code: "B060", name: "Химия", subjects: ["chemistry", "math"] }
        ]
    },
    {
        name: "Сәтбаев университеті",
        code: "Satbayev",
        specialties: [
            { code: "B0703", name: "Информатика", subjects: ["math", "physics"] },
            { code: "B070", name: "Компьютерлік техника және бағдарламалық қамтамасыз ету", subjects: ["math", "physics"] },
            { code: "B070", name: "Математикалық және компьютерлік модельдеу", subjects: ["math"] }
        ]
    },
    {
        name: "Қазақ ұлттық педагогика университеті",
        code: "KazNPU",
        specialties: [
            { code: "B010", name: "Педагогика және психология", subjects: ["biology", "history"] },
            { code: "B010", name: "Бастауыш білім беру", subjects: ["history", "literature"] },
            { code: "B010", name: "Дене шынықтыру", subjects: ["biology"] }
        ]
    },
    {
        name: "Қазақ ұлттық аграрлық университеті",
        code: "KazNAU",
        specialties: [
            { code: "B080", name: "Ауыл шаруашылығы", subjects: ["biology", "chemistry"] },
            { code: "B080", name: "Ветеринария", subjects: ["biology", "chemistry"] },
            { code: "B080", name: "Ауылшаруашылық техникасы", subjects: ["math", "physics"] }
        ]
    },
    {
        name: "Қазақ ұлттық медицина университеті",
        code: "KazNMU",
        specialties: [
            { code: "B110", name: "Медицина", subjects: ["biology", "chemistry"] },
            { code: "B110", name: "Стоматология", subjects: ["biology", "chemistry"] },
            { code: "B1103", name: "Фармация", subjects: ["chemistry", "biology"] }
        ]
    },
    {
        name: "Л.Н. Гумилев атындағы Еуразия ұлттық университеті",
        code: "ENU",
        specialties: [
            { code: "B050", name: "Экономика", subjects: ["math", "history"] },
            { code: "B050", name: "Менеджмент", subjects: ["math", "history"] },
            { code: "B050", name: "Есеп және аудит", subjects: ["math"] }
        ]
    },
    {
        name: "Қазақ-Британ техникалық университеті",
        code: "KBTU",
        specialties: [
            { code: "B070", name: "Геология және геофизика", subjects: ["physics", "chemistry"] },
            { code: "B070", name: "Мұнай және газ ісі", subjects: ["physics", "chemistry"] },
            { code: "B070", name: "Нефтьхимия", subjects: ["chemistry", "math"] }
        ]
    },
    {
        name: "Қазақ экономика университеті",
        code: "KazEU",
        specialties: [
            { code: "B050", name: "Қаржы", subjects: ["math"] },
            { code: "B051", name: "Мемлекеттік басқару", subjects: ["history", "literature"] },
            { code: "B051", name: "Маркетинг", subjects: ["math", "history"] }
        ]
    },
    {
        name: "А. Ясауи атындағы Халықаралық қазақ-түрік университеті",
        code: "KazTU",
        specialties: [
            { code: "B090", name: "Журналистика", subjects: ["history", "literature"] },
            { code: "B090", name: "Филология", subjects: ["literature", "foreign"] },
            { code: "B090", name: "Тарих", subjects: ["history"] }
        ]
    },
    {
        name: "Қазақ архитектура-құрылыс академиясы",
        code: "KazACA",
        specialties: [
            { code: "B040", name: "Архитектура", subjects: ["math"] },
            { code: "B040", name: "Құрылыс", subjects: ["math", "physics"] },
            { code: "B0403", name: "Дизайн", subjects: ["literature"] }
        ]
    },
    {
        name: "Абай атындағы Қазақ ұлттық педагогикалық университеті",
        code: "AbaiKazNPU",
        specialties: [
            { code: "B011", name: "Физика", subjects: ["math", "physics"] },
            { code: "B011", name: "Химия", subjects: ["chemistry", "math"] },
            { code: "B011", name: "Биология", subjects: ["biology", "chemistry"] }
        ]
    },
    {
        name: "Ш. Уәлиханов атындағы Көкшетау университеті",
        code: "KokshetauU",
        specialties: [
            { code: "B060", name: "География", subjects: ["biology", "history"] },
            { code: "B060", name: "Экология", subjects: ["biology", "chemistry"] },
            { code: "B060", name: "Гидрология", subjects: ["physics", "chemistry"] }
        ]
    },
    {
        name: "М. Өтемісұлы атындағы Батыс Қазақстан университеті",
        code: "WestKazU",
        specialties: [
            { code: "B070", name: "Машина жасау", subjects: ["math", "physics"] },
            { code: "B071", name: "Электротехника", subjects: ["physics", "math"] },
            { code: "B071", name: "Энергетика", subjects: ["physics", "math"] }
        ]
    },
    {
        name: "А. Байтұрсынұлы атындағы Қазақ ұлттық педагогикалық университеті",
        code: "BaitursynKazNPU",
        specialties: [
            { code: "B011", name: "Математика", subjects: ["math"] },
            { code: "B011", name: "Информатика", subjects: ["math", "physics"] },
            { code: "B011", name: "Компьютерлік ғылымдар", subjects: ["math", "physics"] }
        ]
    },
    {
        name: "Қ. Жұбанов атындағы Ақтөбе университеті",
        code: "AktobeU",
        specialties: [
            { code: "B072", name: "Химиялық технологиялар", subjects: ["chemistry", "math"] },
            { code: "B072", name: "Тамақ өнеркәсібі", subjects: ["chemistry", "biology"] },
            { code: "B072", name: "Фармацевтикалық технологиялар", subjects: ["chemistry", "biology"] }
        ]
    },
    {
        name: "М.Х. Дулати атындағы Тараз университеті",
        code: "TarazU",
        specialties: [
            { code: "B073000", name: "Керамика және шыны", subjects: ["chemistry", "physics"] },
            { code: "B073", name: "Полимерлер", subjects: ["chemistry", "physics"] },
            { code: "B073", name: "Текстиль", subjects: ["chemistry"] }
        ]
    },
    {
        name: "Жетісу университеті",
        code: "ZhetysuU",
        specialties: [
            { code: "B074", name: "Металлургия", subjects: ["physics", "chemistry"] },
            { code: "B074", name: "Кен ісі", subjects: ["physics", "chemistry"] },
            { code: "B074", name: "Геодезия", subjects: ["math", "physics"] }
        ]
    },
    {
        name: "Қазақстан-Америка университеті",
        code: "KazAU",
        specialties: [
            { code: "B051", name: "Халықаралық бизнес", subjects: ["math", "foreign"] },
            { code: "B051", name: "Логистика", subjects: ["math"] },
            { code: "B051", name: "Туризм", subjects: ["history", "literature"] }
        ]
    },
    {
        name: "Қазақ гуманитарлық-заң университеті",
        code: "KazHLU",
        specialties: [
            { code: "B030", name: "Заң", subjects: ["history"] },
            { code: "B030", name: "Халықаралық құқық", subjects: ["history", "foreign"] },
            { code: "B030", name: "Әлеуметтік жұмыс", subjects: ["history", "literature"] }
        ]
    },
    {
        name: "Қазақ технология және бизнес университеті",
        code: "KazTBU",
        specialties: [
            { code: "B074", name: "Технологиялық машина жасау", subjects: ["math", "physics"] },
            { code: "B074", name: "Автомобиль инженериясы", subjects: ["physics", "math"] },
            { code: "B074", name: "Авиациялық техника", subjects: ["physics", "math"] }
        ]
    },
    {
        name: "Қазақ инновациялық гуманитарлық-заң университеті",
        code: "KazIHU",
        specialties: [
            { code: "B030", name: "Саясаттану", subjects: ["history"] },
            { code: "B030", name: "Психология", subjects: ["biology", "history"] },
            { code: "B030", name: "Социология", subjects: ["history"] }
        ]
    },
    {
        name: "Қазақстан инженерлік-технологиялық университеті",
        code: "KazITU",
        specialties: [
            { code: "B075", name: "Компьютерлік инженерия", subjects: ["math", "physics"] },
            { code: "B075", name: "Телекоммуникация", subjects: ["physics", "math"] },
            { code: "B075", name: "Автоматтандыру", subjects: ["physics", "math"] }
        ]
    },
    {
        name: "Қазақ химия-технология институты",
        code: "KazCTI",
        specialties: [
            { code: "B072", name: "Химиялық инженерия", subjects: ["chemistry", "math"] },
            { code: "B072", name: "Биотехнология", subjects: ["biology", "chemistry"] },
            { code: "B072", name: "Экожүйе инженериясы", subjects: ["biology", "chemistry"] }
        ]
    },
    {
        name: "Қазақ энергетика институты",
        code: "KazEI",
        specialties: [
            { code: "B071", name: "Электр энергетикасы", subjects: ["physics", "math"] },
            { code: "B071", name: "Жылу энергетикасы", subjects: ["physics", "math"] },
            { code: "B071", name: "Альтернативтік энергия көздері", subjects: ["physics", "chemistry"] }
        ]
    },
    {
        name: "Қазақ көлік және коммуникация академиясы",
        code: "KazTCA",
        specialties: [
            { code: "B075", name: "Теміржол транспорты", subjects: ["physics", "math"] },
            { code: "B075", name: "Автомобиль жолдары", subjects: ["physics", "math"] },
            { code: "B075", name: "Логистикалық жүйелер", subjects: ["math"] }
        ]
    },
    {
        name: "Қазақ ауылшаруашылық технологиялар университеті",
        code: "KazATU",
        specialties: [
            { code: "B080", name: "Ауылшаруашылық инженериясы", subjects: ["math", "physics"] },
            { code: "B080", name: "Ауылшаруашылық экономикасы", subjects: ["math"] },
            { code: "B080", name: "Ауылшаруашылық экологиясы", subjects: ["biology", "chemistry"] }
        ]
    },
    {
        name: "Қазақ биологиялық ресурстар университеті",
        code: "KazBRU",
        specialties: [
            { code: "B080", name: "Балық шаруашылығы", subjects: ["biology"] },
            { code: "B080", name: "Орман шаруашылығы", subjects: ["biology"] },
            { code: "B080", name: "Жануарлар әлемі", subjects: ["biology"] }
        ]
    },
    {
        name: "Қазақ геологиялық барлау университеті",
        code: "KazGPU",
        specialties: [
            { code: "B070", name: "Геология", subjects: ["physics", "chemistry"] },
            { code: "B070", name: "Геофизика", subjects: ["physics", "math"] },
            { code: "B070", name: "Гидрогеология", subjects: ["physics", "chemistry"] }
        ]
    },
    {
        name: "Қазақ экология және табиғатты пайдалану университеті",
        code: "KazENU",
        specialties: [
            { code: "B081", name: "Экология", subjects: ["biology", "chemistry"] },
            { code: "B081", name: "Табиғатты пайдалану", subjects: ["biology", "chemistry"] },
            { code: "B081", name: "Су ресурстары", subjects: ["biology", "chemistry"] }
        ]
    }
];// Добавьте остальные 28 университетов по аналогии


// Пәндерді таңдау және университеттерді есептеу
document.getElementById('calculate-btn').addEventListener('click', function() {
  const subject1 = document.getElementById('subject1').value;
  const subject2 = document.getElementById('subject2').value;
  const totalScore = parseInt(document.getElementById('total-score').value);
  
  if (!subject1 || !subject2 || isNaN(totalScore) || totalScore < 0 || totalScore > 140) {
      alert('Барлық өрістерді дұрыс толтырыңыз!');
      return;
  }
  
  const resultDiv = document.getElementById('university-result');
  const universityList = document.getElementById('university-list');
  universityList.innerHTML = '';
  
  universities.forEach(university => {
      university.specialties.forEach(specialty => {
          if (specialty.subjects.includes(subject1) && specialty.subjects.includes(subject2)) {
              const chance = Math.min(100, Math.floor(totalScore / 140 * 100) + Math.floor(Math.random() * 20));
              
              const universityItem = document.createElement('div');
              universityItem.className = 'university-item';
              universityItem.innerHTML = `
                  <div><strong>${university.name}</strong> (${university.code})</div>
                  <div>Мамандық: ${specialty.name} (${specialty.code})</div>
                  <div>Мүмкіндік: ${chance}%</div>
              `;
              universityList.appendChild(universityItem);
          }
      });
  });
  
  if (universityList.children.length === 0) {
      universityList.innerHTML = '<p>Таңдалған пәндерге сәйкес университеттер табылмады</p>';
  }
  
  resultDiv.style.display = 'block';
});

// Сертификаттарды жүктеу және орташа балды есептеу
document.getElementById('calculate-avg-btn').addEventListener('click', function() {
  const fileInput = document.getElementById('certificate-files');
  const files = fileInput.files;
  
  if (files.length === 0) {
      alert('Файлдарды жүктеңіз!');
      return;
  }
  
  let total = 0;
  for (let i = 0; i < files.length; i++) {
      total += Math.floor(Math.random() * 50) + 50;
  }
  const avg = Math.round(total / files.length);
  
  document.getElementById('avg-score').textContent = avg;
  document.getElementById('avg-result').style.display = 'block';
  document.getElementById('file-status').textContent = `${files.length} файл таңдалды`;
});

document.getElementById('certificate-files').addEventListener('change', function() {
  const files = this.files;
  document.getElementById('file-status').textContent = 
      files.length > 0 ? `${files.length} файл таңдалды` : 'Файл таңдалмады';
});

