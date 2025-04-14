"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const accounting_controller_1 = require("../core/repository/accounting.controller");
const { authenticateToken } = require('../middleware/auth.middleware');
class AdvertRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.accounting = new accounting_controller_1.AccountingController();
        this.initRoutes();
    }
    initRoutes() {
        this.router.post('/adverts', this.accounting.getAdverts.bind(this.accounting));
        this.router.put('/advert-TTN', this.accounting.createTTN.bind(this.accounting));
        this.router.put('/advert-TN', this.accounting.createTN.bind(this.accounting));
        this.router.put('/advert-PKO', this.accounting.createPKO.bind(this.accounting));
        this.router.put('/advert-RKO', this.accounting.createRKO.bind(this.accounting));
        this.router.put('/advert-PSO', this.accounting.createPSO.bind(this.accounting));
        this.router.put('/advert-PNA', this.accounting.createPNA.bind(this.accounting));
        this.router.post('/my-adverts', this.accounting.getMyAdverts.bind(this.accounting));
        this.router.post('/my-adverts-TN', this.accounting.getMyAdvertsTN.bind(this.accounting));
        this.router.post('/my-adverts-PKO', this.accounting.getMyAdvertsPKO.bind(this.accounting));
        this.router.post('/my-adverts-RKO', this.accounting.getMyAdvertsRKO.bind(this.accounting));
        this.router.post('/my-adverts-PSO', this.accounting.getMyAdvertsPSO.bind(this.accounting));
        this.router.post('/my-adverts-PNA', this.accounting.getMyAdvertsPNA.bind(this.accounting));
        this.router.get('/advert/:id', this.accounting.getOneAdvert.bind(this.accounting));
        this.router.delete('/advert/:id', this.accounting.deleteAdvert.bind(this.accounting));
        this.router.put('/advert/:id', this.accounting.updateAdvert.bind(this.accounting));
    }
    getRouter() {
        return this.router;
    }
}
exports.default = AdvertRouter;
