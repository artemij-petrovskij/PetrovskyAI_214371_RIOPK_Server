"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./User");
const Company_1 = require("./Company");
let Feedback = class Feedback extends sequelize_typescript_1.Model {
};
exports.Feedback = Feedback;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Feedback.prototype, "comment", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Feedback.prototype, "rating", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Feedback.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Company_1.Company),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Feedback.prototype, "companyId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User),
    __metadata("design:type", User_1.User)
], Feedback.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Company_1.Company),
    __metadata("design:type", Company_1.Company)
], Feedback.prototype, "company", void 0);
exports.Feedback = Feedback = __decorate([
    sequelize_typescript_1.Table
], Feedback);
// @Table
// export class Feedback extends Model {
//     @Column({ type: DataType.TEXT, allowNull: false })
//     comment!: string;
//     @Column({ type: DataType.INTEGER, allowNull: false })
//     rating!: number;
//     @ForeignKey(() => User)
//     @Column({ type: DataType.INTEGER, allowNull: true })
//     userId?: number; // Отзыв может быть связан с пользователем
//     @ForeignKey(() => Vacancy)
//     @Column({ type: DataType.INTEGER, allowNull: true })
//     vacancyId?: number; // Или с вакансией
//     @BelongsTo(() => User)
//     user?: User;
//     @BelongsTo(() => Vacancy)
//     vacancy?: Vacancy;
// }
