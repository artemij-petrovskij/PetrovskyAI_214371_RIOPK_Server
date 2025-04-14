"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { authenticateToken } = require('../middleware/auth.middleware');
const user_controller_1 = require("../core/repository/user.controller");
class UserRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.user = new user_controller_1.UserController();
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/user', this.user.getUsers.bind(this.user));
        this.router.get('/user/:id', authenticateToken, this.user.getOneUser.bind(this.user));
        this.router.post('/user', this.user.createUser.bind(this.user));
        this.router.delete('/user/:id', this.user.deleteUser.bind(this.user));
        this.router.put('/user/:id', this.user.updateUser.bind(this.user));
    }
    getRouter() {
        return this.router;
    }
}
exports.default = UserRouter;
