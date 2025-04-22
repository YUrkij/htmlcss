class Catalog {
    constructor() {
        this.products = [];
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.productContainer = document.querySelector('.product-container');
        this.categoryButtons = document.querySelectorAll('.category-btn');
        this.searchInput = document.querySelector('.search-input');
        
        this.init();
    }

    async init() {
        await this.loadProducts();
        this.initEvents();
        this.render();
    }

    async loadProducts() {
        try {
            const response = await fetch('products.json');
            const data = await response.json();
            this.products = data.products;
        } catch (error) {
            console.error('Ошибка загрузки товаров:', error);
        }
    }

    initEvents() {
        // Обработчики категорий
        this.categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                this.currentCategory = button.dataset.category;
                this.render();
            });
        });

        // Обработчик поиска
        this.searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.render();
        });
    }

    filterProducts() {
        return this.products.filter(product => {
            const matchesCategory = this.currentCategory === 'all' || 
                                   product.category === this.currentCategory;
            const matchesSearch = product.name.toLowerCase().includes(this.searchTerm);
            return matchesCategory && matchesSearch;
        });
    }

    render() {
        const filteredProducts = this.filterProducts();
        
        const productsHTML = filteredProducts.map(product => `
            <div class="product-card">
                <img src="${product.preview}" class="product-image" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="product-price">${product.price.toLocaleString()} ₽</div>
                <div class="product-category">${product.category}</div>
            </div>
        `).join('');

        this.productContainer.innerHTML = productsHTML || '<p>Товары не найдены</p>';
    }
}

// Инициализация каталога при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new Catalog();
});