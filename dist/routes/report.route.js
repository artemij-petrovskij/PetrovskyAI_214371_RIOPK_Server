"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const report_controller_1 = require("../core/repository/report.controller");
const { authenticateToken } = require('../middleware/auth.middleware');
class ReportRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.report = new report_controller_1.ReportController();
        this.initRoutes();
    }
    initRoutes() {
        this.router.post('/report', this.report.getReport.bind(this.report));
    }
    getRouter() {
        return this.router;
    }
}
exports.default = ReportRouter;
