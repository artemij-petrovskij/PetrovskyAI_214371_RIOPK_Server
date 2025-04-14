"use strict";
//import { initDatabase } from '../../db';
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
exports.ResumeController = void 0;
const User_1 = require("../../models/User");
const Resume_1 = require("../../models/Resume");
const models_1 = require("../../models");
class ResumeController {
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
    getResumes(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                models_1.sequelize.sync();
                const users = yield Resume_1.Resume.findAll();
                res.status(200).json(users);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    getCurrentResumes(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                const target = yield this.getIdByEmail(email);
                const users = yield Resume_1.Resume.findAll({
                    where: {
                        userId: target,
                    },
                });
                //console.log(target)
                res.status(200).json(users);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while loading the Items" });
            }
        });
    }
    getOneAdvert(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resume = yield Resume_1.Resume.findOne({ where: { id: req.params.id } });
                console.log(resume);
                res.json(resume);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while loading the Item" });
            }
        });
    }
    createResume(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            //await Resume.sync({ alter: true });
            try {
                const { title, skills, salary, description, contacts, email, categoryId } = req.body;
                const target = yield this.getIdByEmail(email);
                console.log(req.body);
                const newResume = yield Resume_1.Resume.create({
                    title: title,
                    skills: skills,
                    salary: salary,
                    description: description,
                    contacts: contacts,
                    categoryId: categoryId,
                    userId: target
                });
                Resume_1.Resume.sync({ alter: true });
                res.status(201).send({ "success": `Data object created successfully` });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    deleteAdvert(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params.id);
                yield Resume_1.Resume.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                res.status(200).json({ "OK": "Item deleted succefully" });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while deleting the Item" });
            }
        });
    }
    updateAdvert(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            //   const { id, type, file, date, creator, modifeir } = req.body;
            //   const Item = await TTN.findOneAndUpdate({
            //     _id: req.params.id,
            //   }, {
            //     id: id,
            //     type: type,
            //     file: file,
            //     date: date,
            //     creator: creator,
            //     modifeir: modifeir,
            //   });
            //   console.log({ "success": `Item updated successfully` });
            //   res.status(200).json({ "success": `Item updated successfully` });
            // } catch (error) {
            //   console.error(error);
            //   res.status(500).json({ "error": "An error occurred while updating the Item" });
            // }
        });
    }
}
exports.ResumeController = ResumeController;
