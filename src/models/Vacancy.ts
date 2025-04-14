import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Category } from "./Category";
import { Company } from "./Company";
@Table
export class Vacancy extends Model {
    @Column({ type: DataType.STRING, allowNull: false })
    title!: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    description!: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    salary!: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    requirements!: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    location!: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    date!: string;

    @ForeignKey(() => Category)
    @Column({ type: DataType.INTEGER, allowNull: false })
    categoryId!: number;

    @BelongsTo(() => Category)
    category!: Category;


    @ForeignKey(() => Company)
    @Column({ type: DataType.INTEGER, allowNull: false })
    companyId!: number;

    @BelongsTo(() => Company)
    company!: Company;
}
