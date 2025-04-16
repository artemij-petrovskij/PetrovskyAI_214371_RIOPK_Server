"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resume_controller_1 = require("../core/repository/resume.controller");
const { authenticateToken } = require('../middleware/auth.middleware');
class ResumeRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.resume = new resume_controller_1.ResumeController();
        this.initRoutes();
    }
    initRoutes() {
        this.router.post('/adverts', this.resume.getResumes.bind(this.resume));
        this.router.put('/advert', this.resume.createResume.bind(this.resume));
        this.router.post('/my-adverts', this.resume.getCurrentResumes.bind(this.resume));
        this.router.get('/advert/:id', this.resume.getOneAdvert.bind(this.resume));
        this.router.delete('/advert/:id', this.resume.deleteAdvert.bind(this.resume));
        this.router.put('/advert/:id', this.resume.updateAdvert.bind(this.resume));
    }
    getRouter() {
        return this.router;
    }
}
exports.default = ResumeRouter;
