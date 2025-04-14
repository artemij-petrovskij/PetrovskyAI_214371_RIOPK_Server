"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const user_model_1 = require("./user.model");
//import { CandidateFactory } from './candidate';
const sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: './database777.sqlite',
    logging: false, // Отключение логов запросов
});
exports.sequelize = sequelize;
// Инициализация моделей
const User = (0, user_model_1.UserFactory)(sequelize);
exports.User = User;
