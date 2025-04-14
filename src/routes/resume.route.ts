import express from "express";
import { ResumeController } from "../core/repository/resume.controller";
// import { AccountingControllerTN } from "../core/repository/accounting-TN.controller";
// import { AccountingControllerPKO } from "../core/repository/accounting-PKO.controller";
// import { AccountingControllerRKO } from "../core/repository/accounting-RKO.controller";
// import { AccountingControllerPSO } from "../core/repository/accounting-PSO.controller";
// import { AccountingControllerPNA } from "../core/repository/accounting-PNA.controller";

const { authenticateToken } = require('../middleware/auth.middleware')


interface Routes {
    initRoutes(): any
    getRouter(): any
}

class ResumeRouter implements Routes {
    router = express.Router();
    resume = new ResumeController();
    // accounting_TN  = new AccountingControllerTN();
    // accounting_PKO = new AccountingControllerPKO();
    // accounting_RKO = new AccountingControllerRKO();
    // accounting_PSO = new AccountingControllerPSO();
    // accounting_PNA = new AccountingControllerPNA();

    constructor() {
        this.initRoutes();
    }
 
    initRoutes() {
        this.router.post('/adverts', this.resume.getResumes.bind(this.resume));

        this.router.put('/advert-TTN', this.resume.createResume.bind(this.resume));

        this.router.post('/my-adverts', this.resume.getCurrentResumes.bind(this.resume));

        this.router.get('/advert/:id', this.resume.getOneAdvert.bind(this.resume));

        this.router.delete('/advert/:id', this.resume.deleteAdvert.bind(this.resume));

        this.router.put('/advert/:id', this.resume.updateAdvert.bind(this.resume));
    }

    getRouter() {
        return this.router;
    }
}

export default ResumeRouter; 