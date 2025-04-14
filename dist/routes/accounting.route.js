"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resume_controller_1 = require("../core/repository/resume.controller");
// import { AccountingControllerTN } from "../core/repository/accounting-TN.controller";
// import { AccountingControllerPKO } from "../core/repository/accounting-PKO.controller";
// import { AccountingControllerRKO } from "../core/repository/accounting-RKO.controller";
// import { AccountingControllerPSO } from "../core/repository/accounting-PSO.controller";
// import { AccountingControllerPNA } from "../core/repository/accounting-PNA.controller";
const { authenticateToken } = require('../middleware/auth.middleware');
class AdvertRouter {
    // accounting_TN  = new AccountingControllerTN();
    // accounting_PKO = new AccountingControllerPKO();
    // accounting_RKO = new AccountingControllerRKO();
    // accounting_PSO = new AccountingControllerPSO();
    // accounting_PNA = new AccountingControllerPNA();
    constructor() {
        this.router = express_1.default.Router();
        this.resume = new resume_controller_1.ResumeController();
        this.initRoutes();
    }
    initRoutes() {
        this.router.post('/adverts', this.resume.getResumes.bind(this.resume));
        // this.router.post('/adverts-TN', this.accounting_TN.getAdverts.bind(this.accounting_TN));
        // this.router.post('/adverts-PKO', this.accounting_PKO.getAdverts.bind(this.accounting_PKO));
        // this.router.post('/adverts-RKO', this.accounting_RKO.getAdverts.bind(this.accounting_RKO));
        // this.router.post('/adverts-PSO', this.accounting_PSO.getAdverts.bind(this.accounting_PSO));
        // this.router.post('/adverts-PNA', this.accounting_PNA.getAdverts.bind(this.accounting_PNA));
        this.router.put('/advert-TTN', this.resume.createResume.bind(this.resume));
        // this.router.put('/advert-TN', this.accounting_TN.create.bind(this.accounting_TN));
        // this.router.put('/advert-PKO', this.accounting_PKO.create.bind(this.accounting_PKO));
        // this.router.put('/advert-RKO', this.accounting_RKO.create.bind(this.accounting_RKO));
        // this.router.put('/advert-PSO', this.accounting_PSO.create.bind(this.accounting_PSO));
        // this.router.put('/advert-PNA', this.accounting_PNA.create.bind(this.accounting_PNA));
        this.router.post('/my-adverts', this.resume.getCurrentResumes.bind(this.resume));
        // this.router.post('/my-adverts-TN', this.accounting_TN.getMyAdverts.bind(this.accounting_TN));
        // this.router.post('/my-adverts-PKO', this.accounting_PKO.getMyAdverts.bind(this.accounting_PKO));
        // this.router.post('/my-adverts-RKO', this.accounting_RKO.getMyAdverts.bind(this.accounting_RKO));
        // this.router.post('/my-adverts-PSO', this.accounting_PSO.getMyAdverts.bind(this.accounting_PSO));
        // this.router.post('/my-adverts-PNA', this.accounting_PNA.getMyAdverts.bind(this.accounting_PNA));
        this.router.get('/advert/:id', this.resume.getOneAdvert.bind(this.resume));
        this.router.delete('/advert/:id', this.resume.deleteAdvert.bind(this.resume));
        this.router.put('/advert/:id', this.resume.updateAdvert.bind(this.resume));
    }
    getRouter() {
        return this.router;
    }
}
exports.default = AdvertRouter;
