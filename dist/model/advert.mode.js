"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Schema, model } = require('mongoose');
const Advert = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    brand: {
        type: String,
        required: true,
    },
    body_type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
});
//module.exports = model('users', users)
exports.default = model('adverts', Advert);
