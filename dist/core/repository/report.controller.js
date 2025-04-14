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
exports.ReportController = void 0;
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// interface Auth {
//     loginUser(req: Request, res: Response): Promise<any>;
//     signupUser(req: Request, res: Response): Promise<any>;
// }
const Vacancy_1 = require("../../models/Vacancy");
const Category_1 = require("../../models/Category");
const Company_1 = require("../../models/Company");
const Application_1 = require("../../models/Application");
const User_1 = require("../../models/User");
const Feedback_1 = require("../../models/Feedback");
class ReportController {
    getReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // async getIdByEmail(email: any): Promise<any> {
            //     const target = await User.findOne({ where: { firstName: email } });
            //     if (target === null) {
            //         console.log('Not found!');
            //     } else {
            //         const target_id = target.id
            //         return 1
            //     }
            // }
            // async getIdByCompany(company: any): Promise<any> {
            //     const target = await Company.findOne({ where: { id: company } });
            //     if (target === null) {
            //         console.log('Not found!');
            //     } else {
            //         const target_id = target.id
            //         return target_id
            //     }
            // }
            const categories = yield Category_1.Category.findAll();
            const feebacks = yield Feedback_1.Feedback.findAll({
                include: [
                    {
                        model: User_1.User,
                        attributes: ['id', 'firstName', 'createdAt'], // Забираем только title из Category
                    },
                    {
                        model: Company_1.Company,
                        attributes: ['name'], // Забираем только title из Category
                    },
                ]
            });
            const companies = yield Company_1.Company.findAll({});
            const vacancies = yield Vacancy_1.Vacancy.findAll({
                include: [
                    {
                        model: Category_1.Category,
                        attributes: ['id', 'name'], // Забираем только title из Category
                    },
                    {
                        model: Company_1.Company,
                        attributes: ['id', 'name', 'description'], // Забираем только title из Category
                    },
                ],
                attributes: ['id', 'title', 'description', 'salary', 'requirements', 'location'], // Выбираем только нужные поля из Vacancy
            });
            const applications = yield Application_1.Application.findAll({
                include: [
                    {
                        model: Vacancy_1.Vacancy,
                        attributes: ['title'], // Забираем только title из Category
                    },
                    {
                        model: User_1.User,
                        attributes: ['firstName', 'lastName'], // Забираем только title из Category
                    },
                ],
                attributes: ['vacancyId', 'coverLetter', 'updatedAt'], // Выбираем только нужные поля из Vacancy
            });
            res.status(200).json({ vacancies, categories, companies, applications, feebacks });
        });
    }
}
exports.ReportController = ReportController;
