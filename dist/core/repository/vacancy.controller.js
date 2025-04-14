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
exports.VacancyController = void 0;
const User_1 = require("../../models/User");
const Vacancy_1 = require("../../models/Vacancy");
const Category_1 = require("../../models/Category");
const Company_1 = require("../../models/Company");
const Application_1 = require("../../models/Application");
const Feedback_1 = require("../../models/Feedback");
const { Op } = require('sequelize');
// import { sequelize } from '../../models';
const date_1 = __importDefault(require("../../functions/date"));
class VacancyController {
    getIdByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const target = yield User_1.User.findOne({ where: { firstName: email } });
            if (target === null) {
                console.log('Not found!');
            }
            else {
                const target_id = target.id;
                return target_id;
            }
        });
    }
    getIdByCompany(company) {
        return __awaiter(this, void 0, void 0, function* () {
            const target = yield Company_1.Company.findOne({ where: { id: company } });
            if (target === null) {
                console.log('Not found!');
            }
            else {
                const target_id = target.id;
                return target_id;
            }
        });
    }
    getVacancies(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const role = yield User_1.User.findOne({ where: { firstName: req.body.email } });
                const roleId = yield role.roleId;
                console.log(req.body.email);
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
                const replies = yield this.getIdByEmail(req.body.email);
                console.log(replies);
                const applications = yield Application_1.Application.findAll({
                    where: { userId: replies },
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
                res.status(200).json({ vacancies, categories, companies, roleId, applications, feebacks });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    getCurrentVacancies(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getOneVacancy(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resume = yield Vacancy_1.Vacancy.findOne({ where: { id: req.params.id } });
                console.log(resume);
                res.json(resume);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while loading the Item" });
            }
        });
    }
    createVacancy(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description, salary, requirements, location, categoryId, companyId, email, } = req.body;
                console.log(req.body);
                const target = yield this.getIdByEmail(email);
                const newVacancy = yield Vacancy_1.Vacancy.create({
                    title: title,
                    description: description,
                    salary: salary,
                    requirements: requirements,
                    location: location,
                    date: (0, date_1.default)(),
                    categoryId: categoryId,
                    companyId: companyId,
                });
                res.status(201).send({ "success": `Data object created successfully` });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    createCompany(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, description, } = req.body;
                const newVacancy = yield Company_1.Company.create({
                    name: name,
                    description: description,
                });
                res.status(201).send({ "success": `Data object created successfully` });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    createCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, description, } = req.body;
                const newVacancy = yield Category_1.Category.create({
                    name: name,
                    description: description,
                });
                res.status(201).send({ "success": `Data object created successfully` });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    createReply(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, vacancyId, } = req.body;
                const target = yield this.getIdByEmail(email);
                console.log(req.body);
                const exOrNot = yield Application_1.Application.findOne({ where: { userId: target, vacancyId: vacancyId } });
                console.log(exOrNot);
                if (exOrNot === null) {
                    const newApplication = yield Application_1.Application.create({
                        coverLetter: "На рассмотрении",
                        vacancyId: vacancyId,
                        userId: target
                    });
                    res.status(201).send({ "success": `Вы откликнулись на вакансию` });
                }
                else {
                    res.status(201).send({ "warning": `Вы уже откликались на эту вакансию` });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    getReplies(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const applications = yield Application_1.Application.findAll({
                //where: { userId: 1 },
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
                attributes: ['vacancyId', 'coverLetter', 'updatedAt', 'userId'], // Выбираем только нужные поля из Vacancy
            });
            res.json(applications);
        });
    }
    changeStatus(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const decisions = yield Application_1.Application.findOne({
                where: { userId: req.body.userId, vacancyId: req.body.vacancyId },
            });
            if (decisions) {
                // Обновляем значение
                decisions.coverLetter = req.body.decision;
                // Сохраняем изменения
                yield decisions.save();
                console.log('Статус успешно обновлен');
            }
            else {
                console.log('Запись с указанным userId не найдена.');
            }
            console.log(req.body);
            res.json(req.body);
        });
    }
    // async getReplies(req: Request, res: Response, next: NextFunction): Promise<any> {
    //   const resume = await Application.findAll();
    //   console.log(resume)
    //   res.json(resume)
    // }
    companyFeedback(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { companyFeebackComment, raiting, email, feedBackCompanyId } = req.body;
            const target = yield this.getIdByEmail(email);
            console.log(target);
            const addFeedback = yield Feedback_1.Feedback.create({
                comment: companyFeebackComment,
                rating: raiting,
                userId: target,
                companyId: feedBackCompanyId,
            });
            console.log(req.body);
            res.json(req.body);
        });
    }
    deleteVacancy(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    updateVacancy(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.VacancyController = VacancyController;
