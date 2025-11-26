export default class ViewAnime {
    constructor() {
        this.app = document.getElementById('app');
    }

    render(page, data) {
        let html = this.getHeaderHtml(page);

        if (page === 'home') html += this.getHomeHtml(data);
        else if (page === 'genres') html += this.getGenresHtml(data);
        else if (page === 'facts') html += this.getFactsHtml(data);
        else if (page === 'gallery') html += this.getGalleryHtml(data);
        else if (page === 'contact') html += this.getContactHtml();

        html += this.getFooterHtml(data);
        this.app.innerHTML = html;
    }

    getHeaderHtml(activePage) {
        return `
        <header>
            <div class="header-container">
                <div class="logo">AnimeMVC</div>
                <nav>
                    <a href="#" data-page="home" class="${activePage === 'home' ? 'active' : ''}">Головна</a>
                    <a href="#" data-page="genres" class="${activePage === 'genres' ? 'active' : ''}">Жанри</a>
                    <a href="#" data-page="facts" class="${activePage === 'facts' ? 'active' : ''}">Факти</a>
                    <a href="#" data-page="gallery" class="${activePage === 'gallery' ? 'active' : ''}">Галерея</a>
                </nav>
            </div>
        </header>`;
    }

    getHomeHtml(data) {
        return `
        <main class="hero-section">
            <div class="hero-content">
                <h1>Ласкаво просимо в ${data.siteName}</h1>
                <p>Архітектура MVC на JavaScript</p>
            </div>
        </main>`;
    }

    getGenresHtml(data) {
        const cards = data.genres.map(g => `
            <div class="genre-card">
                <h3>${g.name}</h3>
                <p>${g.desc}</p>
            </div>`).join('');
        return `<main class="content-page"><div class="container"><h1 class="page-title">Жанри</h1><div class="genre-grid">${cards}</div></div></main>`;
    }

    getFactsHtml(data) {
        const list = data.facts.map(f => `
            <div class="fact-card">
                <h3>${f.title}</h3>
                <p>${f.text}</p>
            </div>`).join('');
        return `<main class="content-page"><div class="container"><h1 class="page-title">Факти</h1>${list}</div></main>`;
    }

    getGalleryHtml(data) {
        const images = data.gallery.map(img => `
            <div class="gallery-item">
                <img src="${img.src}" style="width:100%; height:250px; object-fit:cover;">
                <div style="padding:10px; text-align:center;">${img.title}</div>
            </div>`).join('');
        return `<main class="content-page"><div class="container"><h1 class="page-title">Галерея</h1><div class="gallery-grid">${images}</div></div></main>`;
    }

    getContactHtml() { return `<main class="content-page"><h1 class="page-title">Контакти</h1><p style="text-align:center">Тут форма...</p></main>`; }
    
    getFooterHtml(data) {
        return `<footer><p>${data.siteName} | Автор: ${data.author}</p></footer>`;
    }
}