// Данные университетов
const universities = [
    { 
        name: "Назарбаев Университет", 
        location: "Нур-Султан", 
        lat: 51.0904, 
        lng: 71.4182,
        description: "Ведущий университет Казахстана с международными стандартами образования.", 
        website: "https://nu.edu.kz"
    },
    { 
        name: "SATBAEV UNIVERSITY", 
        location: "Алматы", 
        lat: 43.2370, 
        lng: 76.9309,
        description: "Ведущий университет Казахстана с международными стандартами образования.", 
        website: "https://nu.edu.kz"
    },
    { 
        name: "КазНУ им. аль-Фараби", 
        location: "Алматы", 
        lat: 43.2250, 
        lng: 76.9255,
        description: "Крупнейший университет Казахстана с богатой историей и традициями.", 
        website: "https://kaznu.kz"
    },
    { 
        name: "Университет КИМЭП", 
        location: "Алматы", 
        lat: 43.2419, 
        lng: 76.9568,
        description: "Ведущий университет в области бизнеса и экономики.", 
        website: "https://kimep.kz"
    },
    { 
        name: "Евразийский Национальный Университет", 
        location: "Нур-Султан", 
        lat: 51.1801, 
        lng: 71.4460,
        description: "Крупный университет с акцентом на науку и инновации.", 
        website: "https://enu.kz"
    },
    { 
        name: "Казахский национальный медицинский университет им. Асфендиярова", 
        location: "Алматы", 
        lat: 43.2535, 
        lng: 76.9313,
        description: "Один из ведущих медицинских вузов Казахстана.", 
        website: "https://kaznmu.kz"
    },
    { 
        name: "Казахский национальный педагогический университет им. Абая", 
        location: "Алматы", 
        lat: 43.2439, 
        lng: 76.9478,
        description: "Ведущий педагогический университет страны.", 
        website: "https://abai.edu.kz"
    },
    { 
        name: "Казахская национальная консерватория им. Курмангазы", 
        location: "Алматы", 
        lat: 43.2514, 
        lng: 76.9453,
        description: "Главный музыкальный вуз Казахстана.", 
        website: "https://conservatoire.edu.kz"
    },
    { 
        name: "Казахский университет международных отношений и мировых языков им. Абылай хана", 
        location: "Алматы", 
        lat: 43.2565, 
        lng: 76.9286,
        description: "Ведущий вуз в области международных отношений и лингвистики.", 
        website: "https://ablaikhan.kz"
    },
    { 
        name: "Казахский национальный аграрный университет", 
        location: "Алматы", 
        lat: 43.2415, 
        lng: 76.9396,
        description: "Крупнейший аграрный университет страны.", 
        website: "https://kaznau.kz"
    },
    { 
        name: "Университет Туран", 
        location: "Алматы", 
        lat: 43.2383, 
        lng: 76.9455,
        description: "Известный частный университет с сильными программами по экономике и праву.", 
        website: "https://turan.edu.kz"
    },
    { 
        name: "Алматинский технологический университет", 
        location: "Алматы", 
        lat: 43.2533, 
        lng: 76.9276,
        description: "Ведущий технический вуз в сфере пищевой и легкой промышленности.", 
        website: "https://atu.edu.kz"
    },
    { 
        name: "Алматинский университет энергетики и связи", 
        location: "Алматы", 
        lat: 43.2344, 
        lng: 76.9309,
        description: "Специализируется на подготовке инженеров в области энергетики и телекоммуникаций.", 
        website: "https://aues.edu.kz"
    },
    { 
        name: "Международный университет информационных технологий (МУИТ)", 
        location: "Алматы", 
        lat: 43.2351, 
        lng: 76.9094,
        description: "Ведущий IT-вуз Казахстана.", 
        website: "https://iitu.edu.kz"
    },
    { 
        name: "Университет Нархоз", 
        location: "Алматы", 
        lat: 43.2142, 
        lng: 76.8715,
        description: "Известен сильными программами в бизнесе и финансах.", 
        website: "https://narxoz.kz"
    },
    { 
        name: "Казахстанско-Британский технический университет", 
        location: "Алматы", 
        lat: 43.2550, 
        lng: 76.9431,
        description: "Совместный проект с британскими вузами, сильные технические программы.", 
        website: "https://kbtu.edu.kz"
    },
    { 
        name: "Университет Алматы", 
        location: "Алматы", 
        lat: 43.2132, 
        lng: 76.8693,
        description: "Многопрофильный университет с акцентом на гуманитарные науки.", 
        website: "https://almau.edu.kz"
    },
    { 
        name: "Казахская академия спорта и туризма", 
        location: "Алматы", 
        lat: 43.2413, 
        lng: 76.9267,
        description: "Главный вуз страны в области спорта и туризма.", 
        website: "https://kazast.kz"
    },
    { 
        name: "Алматинский университет менеджмента", 
        location: "Алматы", 
        lat: 43.2381, 
        lng: 76.9421,
        description: "Частный университет с программами в менеджменте и маркетинге.", 
        website: "https://aum.edu.kz"
    },
    { 
        name: "Казахстанский университет экономики, финансов и международной торговли", 
        location: "Алматы", 
        lat: 43.2392, 
        lng: 76.9443,
        description: "Специализируется на подготовке финансистов и экономистов.", 
        website: "https://kuef.kz"
    },
    { 
        name: "Алматинская академия МВД РК", 
        location: "Алматы", 
        lat: 43.2215, 
        lng: 76.8924,
        description: "Главный вуз для подготовки сотрудников правоохранительных органов.", 
        website: "https://aacmvd.kz"
    },
    { 
        name: "Казахская головная архитектурно-строительная академия", 
        location: "Алматы", 
        lat: 43.2052, 
        lng: 76.8751,
        description: "Ведущий вуз в области архитектуры и строительства.", 
        website: "https://kgsaca.kz"
    },
    { 
        name: "Казахская национальная академия искусств им. Т. Жургенова", 
        location: "Алматы", 
        lat: 43.2518, 
        lng: 76.9462,
        description: "Главный вуз в области кино, театра и изобразительного искусства.", 
        website: "https://zhurgenov.edu.kz"
    },
    { 
        name: "Южно-Казахстанский государственный университет им. М. Ауэзова", 
        location: "Шымкент", 
        lat: 42.3150, 
        lng: 69.5939,
        description: "Крупнейший вуз Южного Казахстана.", 
        website: "https://ukgu.kz"
    },
    { 
        name: "Карагандинский государственный университет им. Е. Букетова", 
        location: "Караганда", 
        lat: 49.8076, 
        lng: 73.0888,
        description: "Один из ведущих вузов Центрального Казахстана.", 
        website: "https://ksu.kz"
    },
    { 
        name: "Западно-Казахстанский государственный университет им. М. Утемисова", 
        location: "Уральск", 
        lat: 51.2049, 
        lng: 51.3704,
        description: "Крупный университет Западного Казахстана.", 
        website: "https://wksu.kz"
    },
    { 
        name: "Восточно-Казахстанский государственный университет им. С. Аманжолова", 
        location: "Усть-Каменогорск", 
        lat: 49.9575, 
        lng: 82.6189,
        description: "Ведущий вуз Восточного Казахстана.", 
        website: "https://vku.edu.kz"
    },
    { 
        name: "Павлодарский государственный университет им. С. Торайгырова", 
        location: "Павлодар", 
        lat: 52.2870, 
        lng: 76.9405,
        description: "Крупный университет в Павлодарской области.", 
        website: "https://psu.kz"
    },
    { 
        name: "Костанайский государственный университет им. А. Байтурсынова", 
        location: "Костанай", 
        lat: 53.2148, 
        lng: 63.6246,
        description: "Главный вуз Костанайской области.", 
        website: "https://ksu.edu.kz"
    },
    { 
        name: "Актюбинский региональный государственный университет им. К. Жубанова", 
        location: "Актобе", 
        lat: 50.2836, 
        lng: 57.1665,
        description: "Ведущий университет Актюбинской области.", 
        website: "https://argu.kz"
    },
    { 
        name: "Таразский государственный университет им. М. Дулати", 
        location: "Тараз", 
        lat: 42.8913, 
        lng: 71.3656,
        description: "Крупный вуз Жамбылской области.", 
        website: "https://tarsu.kz"
    },
    { 
        name: "Северо-Казахстанский государственный университет им. М. Козыбаева", 
        location: "Петропавловск", 
        lat: 54.8814, 
        lng: 69.1628,
        description: "Главный вуз Северо-Казахстанской области.", 
        website: "https://nksu.kz"
    },
    { 
        name: "Атырауский университет нефти и газа", 
        location: "Атырау", 
        lat: 47.1164, 
        lng: 51.8826,
        description: "Специализируется на подготовке кадров для нефтегазовой отрасли.", 
        website: "https://aup.edu.kz"
    }
];

let map;
let userMarker;
let universityMarkers = [];

// Инициализация карты
function initMap(lat = 51.1694, lng = 71.4491) {
    map = L.map('map').setView([lat, lng], 12);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Добавление маркеров университетов
    universities.forEach(univ => {
        const marker = L.marker([univ.lat, univ.lng], {
            icon: L.divIcon({
                className: 'university-marker',
                html: '<i class="fas fa-university" style="color: #2575fc; font-size: 24px;"></i>',
                iconSize: [24, 24]
            })
        })
        .addTo(map)
        .bindPopup(`<b>${univ.name}</b><br>${univ.location}`); // Исправлено с city на location
        universityMarkers.push(marker);
    });
}

// Показать местоположение пользователя
document.getElementById('locationBtn').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const { latitude, longitude } = position.coords;
                
                // Удаляем старый маркер, если есть
                if (userMarker) {
                    map.removeLayer(userMarker);
                }
                
                // Добавляем новый маркер
                userMarker = L.marker([latitude, longitude], {
                    icon: L.divIcon({
                        className: 'user-location-icon',
                        html: '<i class="fas fa-user" style="color: #ff4757; font-size: 24px;"></i>',
                        iconSize: [24, 24]
                    })
                }).addTo(map)
                .bindPopup('Сіздің тұрған жеріңіз')
                .openPopup();
                
                // Центрируем карту на пользователе
                map.setView([latitude, longitude], 13);
                
                // Показываем ближайшие университеты
                showNearestUniversities(latitude, longitude);
            },
            function(error) {
                alert('Не удалось определить ваше местоположение: ' + error.message);
            }
        );
    } else {
        alert('Геолокация не поддерживается вашим браузером');
    }
});

// Показать ближайшие университеты
function showNearestUniversities(userLat, userLng) {
    // Сортируем университеты по расстоянию
    const sortedUnivs = [...universities].sort((a, b) => {
        const distA = getDistance(userLat, userLng, a.lat, a.lng);
        const distB = getDistance(userLat, userLng, b.lat, b.lng);
        return distA - distB;
    });
    
    // Отображаем в списке
    const listElement = document.getElementById('universityList');
    listElement.innerHTML = '';
    
    sortedUnivs.forEach(univ => {
        const distance = getDistance(userLat, userLng, univ.lat, univ.lng);
        const item = document.createElement('div');
        item.className = 'university-item';
        item.innerHTML = `
            <div class="university-title">${univ.name}</div>
            <div class="university-location">
                <span>${univ.location}</span>
                <span class="university-distance">${distance.toFixed(1)} км</span>
            </div>
        `;
        
        item.addEventListener('click', () => {
            map.setView([univ.lat, univ.lng], 15);
            universityMarkers.forEach(m => {
                if (m.getLatLng().lat === univ.lat && m.getLatLng().lng === univ.lng) {
                    m.openPopup();
                }
            });
        });
        
        listElement.appendChild(item);
    });
}

// Вычисление расстояния между двумя точками (в км)
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Инициализируем при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    
    // Заполняем список университетов
    const listElement = document.getElementById('universityList');
    universities.forEach(univ => {
        const item = document.createElement('div');
        item.className = 'university-item';
        item.innerHTML = `
            <div class="university-title">${univ.name}</div>
            <div class="university-location">${univ.location}</div>
        `;
        
        item.addEventListener('click', () => {
            map.setView([univ.lat, univ.lng], 15);
            universityMarkers.forEach(m => {
                if (m.getLatLng().lat === univ.lat && m.getLatLng().lng === univ.lng) {
                    m.openPopup();
                }
            });
        });
        
        listElement.appendChild(item);
    });
});