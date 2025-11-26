export default class ModelAnime {
    constructor() {
        // Посилання на наш хмарний сервер
        this.apiUrl = "https://anime-server-i64s.onrender.com";
        this.data = null;
    }

    async getAnimeData() {
        // Перевірка кешу, щоб не навантажувати мережу зайвими запитами
        if (this.data) return this.data;

        try {
            // Формування запиту до конкретного ресурсу API
            const response = await fetch(`${this.apiUrl}/api/data`);
            
            if (!response.ok) throw new Error('Помилка мережі або сервера');
            
            this.data = await response.json();
            return this.data;
        } catch (error) {
            console.error("Не вдалося отримати дані:", error);
            return null;
        }
    }
}