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
exports.AccountingController = void 0;
const accounting_TTN_model_1 = __importDefault(require("../../model/accounting-TTN.model"));
const accounting_TN_model_1 = __importDefault(require("../../model/accounting-TN.model"));
const accounting_PKO_model_1 = __importDefault(require("../../model/accounting-PKO.model"));
const accounting_RKO_model_1 = __importDefault(require("../../model/accounting-RKO.model"));
const accounting_PSO_model_1 = __importDefault(require("../../model/accounting-PSO.model"));
const accounting_PNA_model_1 = __importDefault(require("../../model/accounting-PNA.model"));
const date_1 = __importDefault(require("../../functions/date"));
class AccountingController {
    getAdverts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const advert = yield accounting_TTN_model_1.default.find();
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
                const advert = yield accounting_TTN_model_1.default.find({
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
    getMyAdvertsTN(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const myid = req.body.email;
                const advert = yield accounting_TN_model_1.default.find({
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
    getMyAdvertsPKO(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const myid = req.body.email;
                const advert = yield accounting_PKO_model_1.default.find({
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
    getMyAdvertsRKO(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const myid = req.body.email;
                const advert = yield accounting_RKO_model_1.default.find({
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
    getMyAdvertsPSO(req, res, next) {
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
    getMyAdvertsPNA(req, res, next) {
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
                const Item = yield accounting_TTN_model_1.default.find({
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
    createTTN(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type_of_document, creator, modifeir, unique_payer_number, car_trailer, waybill_number, driver, payer, shipper, consignee, basis_of_leave, loading_point, unloading_point, redirection, total_amount_of_VAT, total_cargo_weight, total_number_of_cargo_places, release_authorized, shipper_delivered, accepted_for_transportation, accepted_by_consignee } = req.body;
                yield accounting_TTN_model_1.default.create({
                    type_of_document: type_of_document,
                    creator: creator,
                    modifeir: modifeir,
                    date: (0, date_1.default)(),
                    //////////////////
                    unique_payer_number: unique_payer_number,
                    car_trailer: car_trailer,
                    waybill_number: waybill_number,
                    driver: driver,
                    payer: payer,
                    shipper: shipper,
                    consignee: consignee,
                    basis_of_leave: basis_of_leave,
                    loading_point: loading_point,
                    unloading_point: unloading_point,
                    redirection: redirection,
                    total_amount_of_VAT: total_amount_of_VAT,
                    total_cargo_weight: total_cargo_weight,
                    total_number_of_cargo_places: total_number_of_cargo_places,
                    release_authorized: release_authorized,
                    shipper_delivered: shipper_delivered,
                    accepted_for_transportation: accepted_for_transportation,
                    accepted_by_consignee: accepted_by_consignee,
                });
                res.status(201).send({ "success": `Data object created successfully` });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    createTN(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type_of_document, creator, modifeir, product_name, unit, quantity, unit_price, cost, rate, amount, cost_with_VAT, cargo, weight, note, } = req.body;
                yield accounting_TN_model_1.default.create({
                    type_of_document: type_of_document,
                    creator: creator,
                    modifeir: modifeir,
                    date: (0, date_1.default)(),
                    //////////////////
                    product_name: product_name,
                    unit: unit,
                    quantity: quantity,
                    unit_price: unit_price,
                    cost: cost,
                    rate: rate,
                    amount: amount,
                    cost_with_VAT: cost_with_VAT,
                    cargo: cargo,
                    weight: weight,
                    note: note,
                });
                res.status(201).send({ "success": `Advert created successfully` });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    createPKO(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type_of_document, creator, modifeir, enterprises, amount2, accepted_from, basis, NDC, DOP, } = req.body;
                yield accounting_PKO_model_1.default.create({
                    type_of_document: type_of_document,
                    creator: creator,
                    modifeir: modifeir,
                    date: (0, date_1.default)(),
                    //////////////////
                    enterprises: enterprises,
                    amount2: amount2,
                    basis: basis,
                    accepted_from: accepted_from,
                    NDC: NDC,
                    DOP: DOP,
                });
                res.status(201).send({ "success": `Advert created successfully` });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    createRKO(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type_of_document, creator, modifeir, organization, sub_account, person, foundation, amount_of_funds_RKO, appendix, document_data, initials, } = req.body;
                yield accounting_RKO_model_1.default.create({
                    type_of_document: type_of_document,
                    creator: creator,
                    modifeir: modifeir,
                    date: (0, date_1.default)(),
                    //////////////////
                    organization: organization,
                    sub_account: sub_account,
                    person: person,
                    foundation: foundation,
                    amount_of_funds_RKO: amount_of_funds_RKO,
                    appendix: appendix,
                    document_data: document_data,
                    initials: initials,
                });
                res.status(201).send({ "success": `Advert created successfully` });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ "error": "An error occurred while updating the Item" });
            }
        });
    }
    createPSO(req, res, next) {
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
    createPNA(req, res, next) {
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
                const Item = yield accounting_TTN_model_1.default.deleteOne({
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
                const Item = yield accounting_TTN_model_1.default.findOneAndUpdate({
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
exports.AccountingController = AccountingController;
