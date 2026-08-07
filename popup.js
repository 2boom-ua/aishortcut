// Copyright (c) 2boom 2023-2026

(async () => {
    try {
        let response = await fetch("settings.json");
        let data = await response.json();
        const fourData = data.data.four;
        
        const container = document.getElementById('menu-container');
        
        const apps = [];
        for (let i = 27; i < 38; i++) {
            const key = `4:${i}`;
            if (fourData[key]) {
                apps.push({ key, data: fourData[key] });
            }
        }
        
        let stats = JSON.parse(localStorage.getItem('menu_clicks') || '{}');
        
        for (let key in stats) {
            if (!fourData[key]) {
                delete stats[key];
            }
        }
        localStorage.setItem('menu_clicks', JSON.stringify(stats));
        
        apps.sort((a, b) => {
            const countA = stats[a.key] || 0;
            const countB = stats[b.key] || 0;
            return countB - countA;
        });
        
        let html = '';
        
        apps.forEach((app, index) => {
            let link = app.data.link;
            if (link.endsWith('/')) {
                link = link.slice(0, -1);
            }
            html += `<a href="${app.data.link}" target="_blank" class="menu-item" data-index="${index}" data-key="${app.key}">`;
            html += `<img src="${app.data.icon}" alt="${app.data.name}" loading="lazy">`;
            html += `<div class="info">`;
            html += `<span class="name">${app.data.name}</span>`;
            html += `<span class="url">${link}</span>`;
            html += `</div>`;
            html += `<img src="/icons/link.svg" class="link-icon" alt="link">`;
            html += `</a>`;
        });
        
        container.innerHTML = html;
        
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', function(e) {
                const key = this.dataset.key;
                let stats = JSON.parse(localStorage.getItem('menu_clicks') || '{}');
                stats[key] = (stats[key] || 0) + 1;
                localStorage.setItem('menu_clicks', JSON.stringify(stats));
            });
        });
        
        console.log(`✓ Loaded ${apps.length} menu items`);
        
    } catch (error) {
        console.error("✗ Error:", error);
        document.getElementById('menu-container').innerHTML = `
            <div style="padding: 30px 20px; text-align: center; color: var(--text-secondary); font-size: 13px;">
                <div style="font-size: 24px; margin-bottom: 8px;">⚠️</div>
                <p>Failed to load menu</p>
                <p style="font-size: 12px; margin-top: 4px; opacity: 0.7;">${error.message}</p>
            </div>
        `;
    }
})();