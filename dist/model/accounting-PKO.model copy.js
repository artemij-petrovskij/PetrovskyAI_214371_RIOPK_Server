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
            enterprises: { type: String, required: true },
            amount2: { type: String, required: true },
            accepted_from: { type: String, required: true },
            basis: { type: String, required: true },
            NDC: { type: String, required: true },
            DOP: { type: String, required: true },
        });
    }
    getModel() {
        return mongoose_1.default.model('Accounting-PKO', this.schema);
    }
}
exports.default = new Accounting().getModel();
