
import ModelAnime from './model_anime.js';
import ViewAnime from './view_anime.js';
import ControllerAnime from './controller_anime.js';

// Ініціалізація
const model = new ModelAnime();
const view = new ViewAnime();
const controller = new ControllerAnime(model, view);

// Запуск програми
controller.init();