import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table
export class Report extends Model {
    @Column({ type: DataType.STRING, allowNull: false })
    title!: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    description!: string;

    @Column({ type: DataType.DATE, allowNull: false })
    generatedAt!: Date;
}
