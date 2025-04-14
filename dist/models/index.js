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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./User");
const Vacancy_1 = require("./Vacancy");
const Resume_1 = require("./Resume");
const Application_1 = require("./Application");
const Feedback_1 = require("./Feedback");
const Report_1 = require("./Report");
const Role_1 = require("./Role");
const Category_1 = require("./Category");
const Company_1 = require("./Company");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "sqlite",
    storage: "./test.sqlite",
    logging: false,
});
exports.sequelize.addModels([User_1.User, Vacancy_1.Vacancy, Resume_1.Resume, Application_1.Application, Feedback_1.Feedback, Report_1.Report, Role_1.Role, Category_1.Category, Company_1.Company]);
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.sequelize.sync({ alter: true });
        console.log("Database synchronized!");
    }
    catch (error) {
        console.error("Database connection error:", error);
    }
});
exports.connectDB = connectDB;
