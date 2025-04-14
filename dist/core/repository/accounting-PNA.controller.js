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
exports.AccountingControllerPNA = void 0;
const accounting_PNA_model_1 = __importDefault(require("../../model/accounting-PNA.model"));
const date_1 = __importDefault(require("../../functions/date"));
class AccountingControllerPNA {
    getAdverts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const advert = yield accounting_PNA_model_1.default.find();
                res.status(200).json(advert);
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
                const myid = req.body.email;
                const advert = yield accounting_PNA_model_1.default.find({
                    creator: myid,
                });
                res.status(200).json(advert);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    getOneAdvert(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Item = yield accounting_PNA_model_1.default.find({
                    _id: req.params.id,
                });
                res.json(Item);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type_of_document, creator, modifeir, date_of_creation, beginning_of_use, number_of_years, creation_or_acquisition, accumulated_amortization, without_tax, tax_rate, tax_amount, with_tax, original_cost, useful_life_of_the_object, depreciation_method, rate_in_years, other_characteristics, } = req.body;
                yield accounting_PNA_model_1.default.create({
                    type_of_document: type_of_document,
                    creator: creator,
                    modifeir: modifeir,
                    date: (0, date_1.default)(),
                    //////////////////
                    date_of_creation: date_of_creation,
                    beginning_of_use: beginning_of_use,
                    number_of_years: number_of_years,
                    creation_or_acquisition: creation_or_acquisition,
                    accumulated_amortization: accumulated_amortization,
                    without_tax: without_tax,
                    tax_rate: tax_rate,
                    tax_amount: tax_amount,
                    with_tax: with_tax,
                    original_cost: original_cost,
                    useful_life_of_the_object: useful_life_of_the_object,
                    depreciation_method: depreciation_method,
                    rate_in_years: rate_in_years,
                    other_characteristics: other_characteristics,
                });
                res.status(201).send({ "success": `Advert created successfully` });
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
                const Item = yield accounting_PNA_model_1.default.deleteOne({
                    _id: req.params.id,
                });
                res.json({ "success": `item deleted successfully` });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    updateAdvert(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, type, file, date, creator, modifeir } = req.body;
                const Item = yield accounting_PNA_model_1.default.findOneAndUpdate({
                    _id: req.params.id,
                }, {
                    id: id,
                    type: type,
                    file: file,
                    date: date,
                    creator: creator,
                    modifeir: modifeir,
                });
                console.log({ "success": `Item updated successfully` });
                res.status(200).json({ "success": `Item updated successfully` });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
}
exports.AccountingControllerPNA = AccountingControllerPNA;
