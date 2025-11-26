export default class ModelAnime {
    constructor() {
        this.apiUrl = "https://anime-server-i64s.onrender.com";
        this.cachedData = null; 
    }

    // Метод тепеp async
    async getAnimeData() {
   
        if (this.cachedData) {
            return this.cachedData;
        }

        try {
            const response = await fetch(`${this.apiUrl}/api/data`);
            if (!response.ok) throw new Error('Network response was not ok');
            
            const data = await response.json();
            this.cachedData = data; 
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            
            return {
                siteName: "Ошибка",
                author: "Неизвестно",
                genres: [],
                facts: [],
                gallery: []
            };
        }
    }
}