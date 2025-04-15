import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';

const cors = require('cors')

import AuthRouter from "./routes/auth.route";

import ResumeRouter from "./routes/resume.route";

//const swaggerUi = require('swagger-ui-express');
import swaggerUi from 'swagger-ui-express';
//const swaggerDocument = require('./swagger.json');
import swaggerDocument from './swagger.json'




import VacancyRouter from "./routes/vacancy.route";

import ReportRouter from "./routes/report.route";
import { connectDB } from "./models";

require('dotenv').config()

const PORT = process.env.PORT || 8080;
const app = express();


const authRouter = new AuthRouter()

const resumeRouter = new ResumeRouter()

const vacancyRouter = new VacancyRouter()

const reportRouter = new ReportRouter()

app.use(cors())

app.use(bodyParser.json())

app.use("/api/resume", resumeRouter.getRouter());
app.use("/api/vacancy", vacancyRouter.getRouter());
app.use("/auth", authRouter.getRouter());
app.use("/report", reportRouter.getRouter());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const MONGODB_URI = process.env.MONGODB_URI2 as string

app.use(express.static('/public/'))
console.log(express.static('/public/'))
app.get(/.*/, (req, res) => res.sendFile('/public/index.html'))

async function start() {
  try {

    await mongoose.connect(MONGODB_URI)
    console.log('MongoDB connected')
    app.listen(PORT, function () {
      console.log(`App listening on port ${PORT}`, {
        useCreateIndex: true,
        useFindAndModify: false
      });
    });
  }
  catch (e) {
    console.log(e)
  }
}

start().catch(err => console.log(err));
