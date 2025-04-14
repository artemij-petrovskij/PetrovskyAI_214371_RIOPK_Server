"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const advert_controller_1 = require("../core/repository/advert.controller");
const { authenticateToken } = require('../middleware/auth.middleware');
class AdvertRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.advert = new advert_controller_1.AdvertController();
        this.initRoutes();
    }
    initRoutes() {
        this.router.post('/adverts', this.advert.getAdverts.bind(this.advert));
        this.router.put('/advert', this.advert.createAdvert.bind(this.advert));
        this.router.post('/my-adverts', this.advert.getMyAdverts.bind(this.advert));
        this.router.get('/advert/:id', this.advert.getOneAdvert.bind(this.advert));
        this.router.delete('/advert/:id', this.advert.deleteAdvert.bind(this.advert));
        this.router.put('/advert/:id', this.advert.updateAdvert.bind(this.advert));
    }
    getRouter() {
        return this.router;
    }
}
exports.default = AdvertRouter;
