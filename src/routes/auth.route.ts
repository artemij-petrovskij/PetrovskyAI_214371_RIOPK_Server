import express from "express";
import { UserAuth } from "../core/repository/auth.controller";


class AuthRouter {
    router = express.Router();
    auth = new UserAuth();

    constructor() {
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

export default AuthRouter;