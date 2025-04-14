import express from "express";
import { VacancyController } from "../core/repository/vacancy.controller";

const { authenticateToken } = require('../middleware/auth.middleware')


interface Routes {
    initRoutes(): any
    getRouter(): any
}

class VacancyRouter implements Routes {
    router = express.Router();
    resume = new VacancyController();

    constructor() {
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

export default VacancyRouter; 