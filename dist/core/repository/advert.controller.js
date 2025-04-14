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
exports.AdvertController = void 0;
const accounting_model_1 = __importDefault(require("../../model/accounting.model"));
const date_1 = __importDefault(require("../../functions/date"));
class AdvertController {
    getAdverts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const advert = yield accounting_model_1.default.find();
                res.status(200).json(advert);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the advert" });
            }
        });
    }
    getMyAdverts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const myid = req.body.email;
                const advert = yield accounting_model_1.default.find({
                    id: myid,
                });
                res.status(200).json(advert);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the advert" });
            }
        });
    }
    getOneAdvert(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const advert = yield accounting_model_1.default.find({
                    _id: req.params.id,
                });
                res.json(advert);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the advert" });
            }
        });
    }
    createAdvert(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, jwt, brand, model, body_type, color, price, age, mile_age, image } = req.body;
                yield accounting_model_1.default.create({
                    id: id,
                    jwt: jwt,
                    brand: brand,
                    model: model,
                    body_type: body_type,
                    color: color,
                    price: price,
                    date: (0, date_1.default)(),
                    age: age,
                    mile_age: mile_age,
                    image: image
                });
                res.status(201).send({ "success": `Advert created successfully` });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the advert" });
            }
        });
    }
    deleteAdvert(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const advert = yield accounting_model_1.default.deleteOne({
                    _id: req.params.id,
                });
                res.json({ "success": `Advert deleted successfully` });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the advert" });
            }
        });
    }
    updateAdvert(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, jwt, brand, model, body_type, color, price, age, mile_age, image } = req.body;
                const advert = yield accounting_model_1.default.findOneAndUpdate({
                    _id: req.params.id,
                }, {
                    id: id,
                    jwt: jwt,
                    brand: brand,
                    model: model,
                    body_type: body_type,
                    color: color,
                    price: price,
                    date: (0, date_1.default)(),
                    age: age,
                    mile_age: mile_age,
                    image: image
                });
                console.log({ "success": `Advert updated successfully` });
                res.status(200).json({ "success": `Advert updated successfully` });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the advert" });
            }
        });
    }
}
exports.AdvertController = AdvertController;
