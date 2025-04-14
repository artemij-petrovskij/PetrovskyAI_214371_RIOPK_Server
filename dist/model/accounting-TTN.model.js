"use strict";
// import mongoose, { Document, Schema } from 'mongoose';
// interface IAccounting extends Document {
//     type_of_document: string,
//     creator: string;
//     modifeir: string;
//     date: string;
//     unique_payer_number: string;
//     car_trailer: string;
//     waybill_number: string;
//     driver: string;
//     payer: string;
//     shipper: string;
//     consignee: string;
//     basis_of_leave: string;
//     loading_point: string;
//     unloading_point: string;
//     redirection: string;
//     total_amount_of_VAT: string;
//     total_cargo_weight: string;
//     total_number_of_cargo_places: string;
//     release_authorized: string;
//     shipper_delivered: string;
//     accepted_for_transportation: string;
//     accepted_by_consignee: string;
// }
// class Accounting {
//     private schema: Schema;
//     constructor() {
//         this.schema = new Schema({
//             type_of_document: { type: String, required: true },
//             creator: { type: String, required: true },
//             modifeir: { type: String, required: true },
//             date: { type: String, required: true },
//             ////////////////////////////////////////////////////////
//             unique_payer_number: { type: String, required: false },
//             car_trailer: { type: String, required: false },
//             waybill_number: { type: String, required: false },
//             driver: { type: String, required: false },
//             payer: { type: String, required: false },
//             shipper: { type: String, required: false },
//             consignee: { type: String, required: false },
//             basis_of_leave: { type: String, required: false },
//             loading_point: { type: String, required: false },
//             unloading_point: { type: String, required: false },
//             redirection: { type: String, required: false },
//             total_amount_of_VAT: { type: String, required: false },
//             total_cargo_weight: { type: String, required: false },
//             total_number_of_cargo_places: { type: String, required: false },
//             release_authorized: { type: String, required: false },
//             shipper_delivered: { type: String, required: false },
//             accepted_for_transportation: { type: String, required: false },
//             accepted_by_consignee: { type: String, required: false },
//         });
//     }
//     getModel() {
//         return mongoose.model<IAccounting>('Accounting', this.schema);
//     }
// }
// export default new Accounting().getModel();
const { Sequelize } = require('sequelize');
// Подключение к файлу базы данных
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite' // Замените на путь к вашему файлу базы данных
});
module.exports = sequelize;
