import { Sequelize } from "sequelize-typescript";
import { User } from "./User";
import { Vacancy } from "./Vacancy";
import { Resume } from "./Resume";
import { Application } from "./Application";
import { Feedback } from "./Feedback";
import { Report } from "./Report";
import { Role } from "./Role";
import { Category } from "./Category";
import { Company } from "./Company";


export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./test.sqlite",
  logging: false,
});

sequelize.addModels([User, Vacancy, Resume, Application, Feedback, Report, Role, Category,Company]);

export const connectDB = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synchronized!");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};