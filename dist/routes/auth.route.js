"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../core/repository/auth.controller");
class AuthRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.auth = new auth_controller_1.UserAuth();
        this.initRoutes();
    }
    initRoutes() {
        this.router.post('/login', this.auth.loginUser.bind(this.auth));
        this.router.post('/signup', this.auth.signupUser.bind(this.auth));
    }
    getRouter() {
        return this.router;
    }
}
exports.default = AuthRouter;
