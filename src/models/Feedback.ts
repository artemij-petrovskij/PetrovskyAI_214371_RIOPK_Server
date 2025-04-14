import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./User";
import { Company } from "./Company";

@Table
export class Feedback extends Model {
    @Column({ type: DataType.TEXT, allowNull: false })
    comment!: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    rating!: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: true })
    userId?: number;

    @ForeignKey(() => Company)
    @Column({ type: DataType.INTEGER, allowNull: true })
    companyId?: number;

    @BelongsTo(() => User)
    user?: User;

    @BelongsTo(() => Company)
    company?: Company;
}


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
