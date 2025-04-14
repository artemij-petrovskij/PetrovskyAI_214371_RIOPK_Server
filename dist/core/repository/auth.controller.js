"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuth = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User_1 = require("../../models/User");
class UserAuth {
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const candidate = yield user_model_1.default.findOne({ email: req.body.email });
            if (candidate) {
                const isPasswordCorrect = bcrypt.compareSync(req.body.password, candidate.password);
                if (isPasswordCorrect) {
                    let token = jwt.sign({ email: candidate.email }, process.env.ACCESS_TOKEN_SECRET);
                    res.status(200).send({ token: token, user: candidate.email });
                }
                else {
                    res.status(404).json({ err: ' Пользователь не найден (Неправильный пароль)' });
                }
            }
            else {
                res.status(404).json({ err: 'Пользователь не найден (не зарегистрирован)' });
            }
        });
    }
    signupUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const candidate = yield user_model_1.default.findOne({ email: req.body.email });
            if (candidate) {
                res.status(409).json({ message: 'Пользователь c таким логином уже существует' });
            }
            else {
                const salt = bcrypt.genSaltSync(10);
                const user = new user_model_1.default({
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, salt)
                });
                yield user.save();
                jwt.sign({
                    email: req.body.email
                }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
                    res.json({ token });
                });
                ////
                //  await sequelize.sync({ alter: true });
                //const adminRole1 = await Role.create({ roleName: "Recruiter" });
                // const adminRole = await Role.create({ roleName: "HR" }); 
                // const adminRole = await Role.create({ roleName: "ADMIN" });
                //console.log(adminRole1)
                const jane = yield User_1.User.create({
                    //   email: req.body.email,
                    firstName: req.body.email,
                    lastName: req.body.email,
                    roleId: req.body.roleId,
                });
                console.log("User created:", jane);
            }
        });
    }
}
exports.UserAuth = UserAuth;
