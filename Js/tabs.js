class TabManager {
    constructor() {
        this.tabs = document.querySelectorAll('.policies_tab');
        this.activeClass = 'active';
        this.init();
    }

    init() {
        // Встановлюємо першу вкладку як активну за замовчуванням
        this.tabs[0].classList.add(this.activeClass);

        this.tabs.forEach(tab => {
            tab.addEventListener('click', (e) => this.switchTab(e));
        });
    }

    switchTab(event) {
        // Видаляємо активний клас з усіх вкладок
        this.tabs.forEach(tab => tab.classList.remove(this.activeClass));
        
        // Додаємо активний клас до натиснутої вкладки
        event.target.classList.add(this.activeClass);
    }
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    new TabManager();
});