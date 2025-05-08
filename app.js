function renderUniversityList(universitiesList, userLat = null, userLng = null) {
    const listElement = document.getElementById('universityList');
    listElement.innerHTML = '';
    
    universitiesList.forEach(univ => {
        const distance = userLat && userLng 
            ? getDistance(userLat, userLng, univ.lat, univ.lng)
            : null;
        
        const item = document.createElement('div');
        item.className = 'university-item';
        item.innerHTML = `
            <div class="university-title">${univ.name}</div>
            <div class="university-location">
                <span>${univ.location}</span>
                ${distance ? `<span class="university-distance">${distance.toFixed(1)} км</span>` : ''}
            </div>
            <div class="university-description">${univ.description}</div>
            <a href="${univ.website}" target="_blank" class="university-website">
                <i class="fas fa-external-link-alt"></i> Официальный сайт
            </a>
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