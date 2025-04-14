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
const { sequelize } = require('./models');
function initDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize.sync({ alter: true }); // Используйте { force: true } для сброса базы
            console.log('База данных успешно синхронизирована.');
        }
        catch (error) {
            console.error('Ошибка синхронизации базы данных:', error);
        }
    });
}
module.exports = initDatabase;
