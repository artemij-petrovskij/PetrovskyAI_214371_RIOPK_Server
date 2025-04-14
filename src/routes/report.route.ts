import express from "express";
import { ReportController } from "../core/repository/report.controller";
const { authenticateToken } = require('../middleware/auth.middleware')

class ReportRouter {
    router = express.Router();
    report = new ReportController();

    constructor() {
        this.initRoutes();
    }

    initRoutes() {
        this.router.post('/report', this.report.getReport.bind(this.report));
    }

    getRouter() {
        return this.router;
    }
}

export default ReportRouter;