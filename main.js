import ModelAnime from './model_anime.js';
import ViewAnime from './view_anime.js';
import ControllerAnime from './controller_anime.js';

const model = new ModelAnime();
const view = new ViewAnime();
const controller = new ControllerAnime(model, view);

controller.init();