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
exports.AccountingControllerPSO = void 0;
const accounting_PSO_model_1 = __importDefault(require("../../model/accounting-PSO.model"));
const date_1 = __importDefault(require("../../functions/date"));
class AccountingControllerPSO {
    getAdverts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const advert = yield accounting_PSO_model_1.default.find();
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
                const advert = yield accounting_PSO_model_1.default.find({
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
                const Item = yield accounting_PSO_model_1.default.find({
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
                const { type_of_document, creator, modifeir, code, contracting_organization, recipient_organization, act_grounds, number_date, date_of_acceptance, accounting_code, inventory_number, property_object, location, manufacturer, original_cost, useful_life, amortization_method, norm, prod_title, number_of, number_of_2, unit_of_mes, number_of_3, bulk, feature, appendix2, official_accepted, } = req.body;
                yield accounting_PSO_model_1.default.create({
                    type_of_document: type_of_document,
                    creator: creator,
                    modifeir: modifeir,
                    date: (0, date_1.default)(),
                    //////////////////
                    code: code,
                    contracting_organization: contracting_organization,
                    recipient_organization: recipient_organization,
                    act_grounds: act_grounds,
                    number_date: number_date,
                    date_of_acceptance: date_of_acceptance,
                    accounting_code: accounting_code,
                    inventory_number: inventory_number,
                    property_object: property_object,
                    location: location,
                    manufacturer: manufacturer,
                    original_cost: original_cost,
                    useful_life: useful_life,
                    amortization_method: amortization_method,
                    norm: norm,
                    prod_title: prod_title,
                    number_of: number_of,
                    number_of_2: number_of_2,
                    unit_of_mes: unit_of_mes,
                    number_of_3: number_of_3,
                    bulk: bulk,
                    feature: feature,
                    appendix2: appendix2,
                    official_accepted: official_accepted,
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
                const Item = yield accounting_PSO_model_1.default.deleteOne({
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
                const Item = yield accounting_PSO_model_1.default.findOneAndUpdate({
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
exports.AccountingControllerPSO = AccountingControllerPSO;
