export default class ModelAnime {
    constructor() {
        // Ваше посилання на сервер Render
        this.apiUrl = "https://anime-server-i64s.onrender";
        this.data = null;
    }

    async getAnimeData() {
        // Кешування (якщо дані вже є, не вантажимо знову)
        if (this.data) return this.data;

        try {
            // Запит на сервер
            const response = await fetch(`${this.apiUrl}/api/data`);
            if (!response.ok) throw new Error('Network error');
            
            this.data = await response.json();
            return this.data;
        } catch (error) {
            console.error("Fetch error:", error);
            // Дані-заглушки на випадок помилки
            return {
                siteName: "Anime World (Offline)",
                author: "Unknown",
                genres: [],
                facts: [{title: "Помилка", text: "Не вдалося з'єднатися з сервером"}],
                gallery: []
            };
        }
    }
}