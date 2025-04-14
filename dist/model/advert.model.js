"use strict";
// const { Schema, model } = require('mongoose')
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
// const Advert = new Schema({
//     id: {
//         type: String,
//         unique: false,
//         required: true
//     },
//     brand: {
//         type: String,
//         required: true,
//     },
//     model: {
//         type: String,
//         required: true,
//     },
//     body_type: {
//         type: String,
//         required: true,
//     },
//     color: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     date: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: Number,
//         required: true
//     },
//     mile_age: {
//         type: Number,
//         required: true
//     }
//     ,
//     image: {
//         type: String,
//         required: true
//     }
// })
// export default model('adverts', Advert);
const mongoose_1 = __importStar(require("mongoose"));
class Accounting {
    constructor() {
        this.schema = new mongoose_1.Schema({
            id: { type: String, unique: false, required: true },
            type: { type: String, required: true },
            file: { type: String, required: true },
            date: { type: String, required: true },
            creator: { type: String, required: true },
            modifeir: { type: String, required: true },
        });
    }
    getModel() {
        return mongoose_1.default.model('Accounting', this.schema);
    }
}
exports.default = new Accounting().getModel();
