import express from "express";
import { ResumeController } from "../core/repository/resume.controller";

const { authenticateToken } = require('../middleware/auth.middleware')


interface Routes {
    initRoutes(): any
    getRouter(): any
}

class ResumeRouter implements Routes {
    router = express.Router();
    resume = new ResumeController();


    constructor() {
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

export default ResumeRouter; 