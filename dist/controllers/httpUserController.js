"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const controller_decorator_1 = __importDefault(require("../utils/decorators/controller.decorator"));
const handlers_decorator_1 = require("../utils/decorators/handlers.decorator");
const UserService_1 = require("../core/services/UserService/UserService");
const addUserDto_1 = require("../core/repositories/UserRepository/dto/addUserDto");
let httpUserController = class httpUserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { email, password } = req.body;
            // await this.userService.createNewUser(new addUserDto(email, password))
            return res.send('get all users');
        });
    }
    createNewUser(req, res) {
        const { email, password } = req.body;
        console.log(req.body);
        const us = new addUserDto_1.addUserDto(email, password);
        console.log(us);
        this.userService.createNewUser(us);
        return res.send('create new user');
    }
};
__decorate([
    (0, handlers_decorator_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], httpUserController.prototype, "getAllUsers", null);
__decorate([
    (0, handlers_decorator_1.Post)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], httpUserController.prototype, "createNewUser", null);
httpUserController = __decorate([
    (0, controller_decorator_1.default)('/'),
    __metadata("design:paramtypes", [UserService_1.UserService])
], httpUserController);
exports.default = httpUserController;
