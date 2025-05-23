"use strict";
// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./dist/database/db.sqlite",
// });
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
// const User = sequelize.define(
//   "User",
//   {
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     timestamps: false,
//   }
// );
// User.sync();
// const { Schema, model } = require('mongoose')
// const User = new Schema({
//     email: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true,
//         minLength: 4
//     },
//     advert:
//         []
// })
// //module.exports = model('users', users)
// export default model('users', User);
const mongoose_1 = __importStar(require("mongoose"));
class User {
    constructor() {
        this.schema = new mongoose_1.Schema({
            email: {
                type: String,
                unique: true,
                required: true
            },
            password: {
                type: String,
                required: true,
                minLength: 4
            },
            advert: []
        });
    }
    getModel() {
        return mongoose_1.default.model('HR', this.schema);
    }
}
exports.default = new User().getModel();
