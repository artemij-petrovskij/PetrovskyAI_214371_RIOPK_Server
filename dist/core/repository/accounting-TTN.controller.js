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
exports.Resume = void 0;
const User_1 = require("../../models/User");
const models_1 = require("../../models/");
class Resume {
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
    getAdverts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                models_1.sequelize.sync();
                const users = yield Resume.findAll();
                res.status(200).json(users);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    getMyAdverts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                const target = yield this.getIdByEmail(email);
                const users = yield Resume.findAll({
                    where: {
                        userId: target,
                    },
                });
                res.status(200).json(users);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    getOneAdvert(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            //   const Item = await User.find({
            //     _id: req.params.id,
            //   });
            //   res.json(Item)
            // } catch (error) {
            //   console.error(error);
            //   res.status(500).json({ "error": "An error occurred while updating the Item" });
            // }
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // await sequelize.sync({ alter: true });
            try {
                const { title, skills, salary, description, email, } = req.body;
                console.log(req.body);
                const target = yield this.getIdByEmail(email);
                console.log(target);
                const newResume = yield Resume.create({
                    title: title,
                    skills: skills,
                    salary: salary,
                    description: description,
                    userId: target
                    // roleId: 1,
                });
                Resume.sync();
                //console.log(req.body)
                // await TTN.create({
                //   type_of_document: type_of_document,
                //   creator: creator,
                //   modifeir: modifeir,
                //   date: formattedDate(),
                //   //////////////////
                //   unique_payer_number: unique_payer_number,
                //   car_trailer: car_trailer,
                //   waybill_number: waybill_number,
                //   driver: driver,
                //   payer: payer,
                //   shipper: shipper,
                //   consignee: consignee,
                //   basis_of_leave: basis_of_leave,
                //   loading_point: loading_point,
                //   unloading_point: unloading_point,
                //   redirection: redirection,
                //   total_amount_of_VAT: total_amount_of_VAT,
                //   total_cargo_weight: total_cargo_weight,
                //   total_number_of_cargo_places: total_number_of_cargo_places,
                //   release_authorized: release_authorized,
                //   shipper_delivered: shipper_delivered,
                //   accepted_for_transportation: accepted_for_transportation,
                //   accepted_by_consignee: accepted_by_consignee,
                // });
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
                // const delete_TTN = await TTN.deleteOne({
                //   _id: req.params.id,
                // });
                // const delete_TN = await TN.deleteOne({
                //   _id: req.params.id,
                // });
                // const delete_PKO = await PKO.deleteOne({
                //   _id: req.params.id,
                // });
                // const delete_RKO = await RKO.deleteOne({
                //   _id: req.params.id,
                // });
                // const delete_PSO = await PSO.deleteOne({
                //   _id: req.params.id,
                // });
                // const delete_PNA = await PNA.deleteOne({
                //   _id: req.params.id,
                // });
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
exports.Resume = Resume;
