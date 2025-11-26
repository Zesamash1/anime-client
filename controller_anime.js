export default class ControllerAnime {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.renderPage('home');

        document.getElementById('app').addEventListener('click', (event) => {
            const link = event.target.closest('a');
            
            if (link && link.dataset.page) {
                event.preventDefault();
                const pageName = link.dataset.page;
                this.renderPage(pageName);
            }
        });
    }

    // Додаємо async
    async renderPage(pageName) {
        this.view.app.innerHTML = '<div>Завантаження...</div>'; 
        //  await
        const data = await this.model.getAnimeData();
        this.view.render(pageName, data);
    }
}