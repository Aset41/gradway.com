// Данные о вузах
const universities = [
    { 
        name: "Назарбаев Университет", 
        location: "Нур-Султан", 
        description: "Ведущий университет Казахстана с международными стандартами образования.", 
        website: "/универ,данные/nu/nu.html"
    },
    { 
        name: "КазНУ им. аль-Фараби", 
        location: "Алматы", 
        description: "Крупнейший университет Казахстана с богатой историей и традициями.", 
        website: "/универ,данные/Al-Faraby/nu1.html"
    },
    { 
        name: "Satbaev University", 
        location: "Алматы", 
        description: "Satbayev University — Қазақстандағы жетекші техникалық жоғары оқу орындарының бірі.", 
        website: "/универ,данные/kaznitu/nu3.html"
    },
    { 
        name: "Евразийский Национальный Университет", 
        location: "Нур-Султан", 
        description: "Крупный университет с акцентом на науку и инновации.", 
        website: "/универ,данные/enu/nu4.html"
    },
    {   
        name: "Казахский национальный медицинский университет им. Асфендиярова", 
        location: "Алматы", 
        description: "Один из ведущих медицинских вузов Казахстана.", 
        website: "/универ,данные/asfen/nu5.html"
    },
    { 
        name: "Казахский национальный педагогический университет им. Абая", 
        location: "Алматы", 
        description: "Ведущий педагогический университет страны.", 
        website: "/универ,данные/abay/nu6.html"
    },
    { 
        name: "Казахская национальная консерватория им. Курмангазы", 
        location: "Алматы", 
        description: "Главный музыкальный вуз Казахстана.", 
        website: "/универ,данные/kurmangazy/nu7.html"
    },
    { 
        name: "Казахский университет международных отношений и мировых языков им. Абылай хана", 
        location: "Алматы", 
        description: "Ведущий вуз в области международных отношений и лингвистики.", 
        website: "/универ,данные/abulay/nu8.html"
    },
    { 
        name: "Казахский национальный аграрный университет", 
        location: "Алматы", 
        description: "Крупнейший аграрный университет страны.", 
        website: "https://kaznau.kz"
    },
    { 
        name: "Университет Туран", 
        location: "Алматы", 
        description: "Известный частный университет с сильными программами по экономике и праву.", 
        website: "/универ,данные/turan/nu10.html"
    },
    { 
        name: "Алматинский технологический университет", 
        location: "Алматы", 
        description: "Ведущий технический вуз в сфере пищевой и легкой промышленности.", 
        website: "/универ,данные/ату/nu11.html"
    },
    { 
        name: "Алматинский университет энергетики и связи", 
        location: "Алматы", 
        description: "Специализируется на подготовке инженеров в области энергетики и телекоммуникаций.", 
        website: "/универ,данные/aues/nu12.html"
    },
    { 
        name: "Международный университет информационных технологий (МУИТ)", 
        location: "Алматы", 
        description: "Ведущий IT-вуз Казахстана.", 
        website: "/универ,данные/муит/nu13.html"
    },
    { 
        name: "Университет Нархоз", 
        location: "Алматы", 
        description: "Известен сильными программами в бизнесе и финансах.", 
        website: "/универ,данные/муит/nu13.html"
    },
    { 
        name: "Казахстанско-Британский технический университет", 
        location: "Алматы", 
        description: "Совместный проект с британскими вузами, сильные технические программы.", 
        website: "/универ,данные/муит/nu13.html"
    },
    { 
        name: "Университет Алматы", 
        location: "Алматы", 
        description: "Многопрофильный университет с акцентом на гуманитарные науки.", 
        website: "/универ,данные/муит/nu13.html"
    },
    { 
        name: "Казахская академия спорта и туризма", 
        location: "Алматы", 
        description: "Главный вуз страны в области спорта и туризма.", 
        website: "/универ,данные/муит/nu13.html"
    },
    { 
        name: "Алматинский университет менеджмента", 
        location: "Алматы", 
        description: "Частный университет с программами в менеджменте и маркетинге.", 
        website: "https://aum.edu.kz"
    },
    { 
        name: "Казахстанский университет экономики, финансов и международной торговли", 
        location: "Алматы", 
        description: "Специализируется на подготовке финансистов и экономистов.", 
        website: "https://kuef.kz"
    },
    { 
        name: "Алматинская академия МВД РК", 
        location: "Алматы", 
        description: "Главный вуз для подготовки сотрудников правоохранительных органов.", 
        website: "https://aacmvd.kz"
    },
    { 
        name: "Казахская головная архитектурно-строительная академия", 
        location: "Алматы", 
        description: "Ведущий вуз в области архитектуры и строительства.", 
        website: "https://kgsaca.kz"
    },
    { 
        name: "Казахская национальная академия искусств им. Т. Жургенова", 
        location: "Алматы", 
        description: "Главный вуз в области кино, театра и изобразительного искусства.", 
        website: "https://zhurgenov.edu.kz"
    },
    { 
        name: "Южно-Казахстанский государственный университет им. М. Ауэзова", 
        location: "Шымкент", 
        description: "Крупнейший вуз Южного Казахстана.", 
        website: "https://ukgu.kz"
    },
    { 
        name: "Карагандинский государственный университет им. Е. Букетова", 
        location: "Караганда", 
        description: "Один из ведущих вузов Центрального Казахстана.", 
        website: "https://ksu.kz"
    },
    { 
        name: "Западно-Казахстанский государственный университет им. М. Утемисова", 
        location: "Уральск", 
        description: "Крупный университет Западного Казахстана.", 
        website: "https://wksu.kz"
    },
    { 
        name: "Восточно-Казахстанский государственный университет им. С. Аманжолова", 
        location: "Усть-Каменогорск", 
        description: "Ведущий вуз Восточного Казахстана.", 
        website: "https://vku.edu.kz"
    },
    { 
        name: "Павлодарский государственный университет им. С. Торайгырова", 
        location: "Павлодар", 
        description: "Крупный университет в Павлодарской области.", 
        website: "https://psu.kz"
    },
    { 
        name: "Костанайский государственный университет им. А. Байтурсынова", 
        location: "Костанай", 
        description: "Главный вуз Костанайской области.", 
        website: "https://ksu.edu.kz"
    },
    { 
        name: "Актюбинский региональный государственный университет им. К. Жубанова", 
        location: "Актобе", 
        description: "Ведущий университет Актюбинской области.", 
        website: "https://argu.kz"
    },
    { 
        name: "Таразский государственный университет им. М. Дулати", 
        location: "Тараз", 
        description: "Крупный вуз Жамбылской области.", 
        website: "https://tarsu.kz"
    },
    { 
        name: "Северо-Казахстанский государственный университет им. М. Козыбаева", 
        location: "Петропавловск", 
        description: "Главный вуз Северо-Казахстанской области.", 
        website: "https://nksu.kz"
    },
    { 
        name: "Атырауский университет нефти и газа", 
        location: "Атырау", 
        description: "Специализируется на подготовке кадров для нефтегазовой отрасли.", 
        website: "https://aup.edu.kz"
    }
];



  
  // Настройки пагинации
  const itemsPerPage = 9;
  let currentPage = 1;
  const totalPages = Math.ceil(universities.length / itemsPerPage);
  
  // Отображение карточек
  function displayCards(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const cardsContainer = document.getElementById('vuz-cards');
    cardsContainer.innerHTML = '';
  
    universities.slice(startIndex, endIndex).forEach(vuz => {
      const card = document.createElement('div');
      card.className = 'vuz-card';
      card.innerHTML = `
        <a href="${vuz.website}" target="_blank" class="vuz-card-link">
          <div class="vuz-card-header">
            <div class="vuz-info">
              <h2>${vuz.name}</h2>
              <p><i class="fas fa-map-marker-alt"></i> ${vuz.location}</p>
            </div>
          </div>
          <div class="vuz-card-content">
            <p>${vuz.description}</p>
          </div>
        </a>
      `;
      cardsContainer.appendChild(card);
    });
  
    // Обновление информации о странице
    document.getElementById('page-info').textContent = `Страница ${page} из ${totalPages}`;
  
    // Обновление состояния кнопок
    document.getElementById('prev-page').disabled = page === 1;
    document.getElementById('next-page').disabled = page === totalPages;
  }
  
  // Инициализация
  document.addEventListener('DOMContentLoaded', () => {
    displayCards(currentPage);
  
    document.getElementById('next-page').addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        displayCards(currentPage);
      }
    });
  
    document.getElementById('prev-page').addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        displayCards(currentPage);
      }
    });
  });
  