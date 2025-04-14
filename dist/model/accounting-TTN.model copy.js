"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
class Accounting {
    constructor() {
        this.schema = new mongoose_1.Schema({
            type_of_document: { type: String, required: true },
            creator: { type: String, required: true },
            modifeir: { type: String, required: true },
            date: { type: String, required: true },
            ////////////////////////////////////////////////////////
            unique_payer_number: { type: String, required: false },
            car_trailer: { type: String, required: false },
            waybill_number: { type: String, required: false },
            driver: { type: String, required: false },
            payer: { type: String, required: false },
            shipper: { type: String, required: false },
            consignee: { type: String, required: false },
            basis_of_leave: { type: String, required: false },
            loading_point: { type: String, required: false },
            unloading_point: { type: String, required: false },
            redirection: { type: String, required: false },
            total_amount_of_VAT: { type: String, required: false },
            total_cargo_weight: { type: String, required: false },
            total_number_of_cargo_places: { type: String, required: false },
            release_authorized: { type: String, required: false },
            shipper_delivered: { type: String, required: false },
            accepted_for_transportation: { type: String, required: false },
            accepted_by_consignee: { type: String, required: false },
        });
    }
    getModel() {
        return mongoose_1.default.model('Accounting', this.schema);
    }
}
exports.default = new Accounting().getModel();
