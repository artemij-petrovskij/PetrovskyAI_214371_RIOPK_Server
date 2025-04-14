// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./dist/database/db.sqlite",
// });

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

import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    email: string;
    password: string;
    advert: any[];
}

class User {
    private schema: Schema;

    constructor() {
        this.schema = new Schema({
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
        return mongoose.model<IUser>('HR', this.schema);
    }
}

export default new User().getModel();