"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vacancy_controller_1 = require("../core/repository/vacancy.controller");
const { authenticateToken } = require('../middleware/auth.middleware');
class VacancyRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.resume = new vacancy_controller_1.VacancyController();
        this.initRoutes();
    }
    initRoutes() {
        this.router.post('/vacancies', this.resume.getVacancies.bind(this.resume));
        this.router.put('/create-vacancy', this.resume.createVacancy.bind(this.resume));
        this.router.put('/create-company', this.resume.createCompany.bind(this.resume));
        this.router.put('/create-category', this.resume.createCategory.bind(this.resume));
        this.router.put('/create-reply', this.resume.createReply.bind(this.resume));
        this.router.post('/getreplies', this.resume.getReplies.bind(this.resume));
        this.router.post('/changestatus', this.resume.changeStatus.bind(this.resume));
        this.router.post('/company-feedback', this.resume.companyFeedback.bind(this.resume));
        this.router.post('/current-vacancies', this.resume.getCurrentVacancies.bind(this.resume));
        this.router.get('/vacancy/:id', this.resume.getOneVacancy.bind(this.resume));
        this.router.delete('/advert/:id', this.resume.deleteVacancy.bind(this.resume));
        this.router.put('/advert/:id', this.resume.updateVacancy.bind(this.resume));
    }
    getRouter() {
        return this.router;
    }
}
exports.default = VacancyRouter;
