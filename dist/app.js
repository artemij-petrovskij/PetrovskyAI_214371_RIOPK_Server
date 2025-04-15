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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors = require('cors');
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const resume_route_1 = __importDefault(require("./routes/resume.route"));
//const swaggerUi = require('swagger-ui-express');
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
//const swaggerDocument = require('./swagger.json');
const swagger_json_1 = __importDefault(require("./swagger.json"));
const vacancy_route_1 = __importDefault(require("./routes/vacancy.route"));
const report_route_1 = __importDefault(require("./routes/report.route"));
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
const authRouter = new auth_route_1.default();
const resumeRouter = new resume_route_1.default();
const vacancyRouter = new vacancy_route_1.default();
const reportRouter = new report_route_1.default();
app.use(cors());
app.use(body_parser_1.default.json());
app.use("/api/resume", resumeRouter.getRouter());
app.use("/api/vacancy", vacancyRouter.getRouter());
app.use("/auth", authRouter.getRouter());
app.use("/report", reportRouter.getRouter());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
const MONGODB_URI = process.env.MONGODB_URI2;
app.use(express_1.default.static('/public/'));
console.log(express_1.default.static('/public/'));
app.get(/.*/, (req, res) => res.sendFile('/public/index.html'));
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(MONGODB_URI);
            console.log('MongoDB connected');
            app.listen(PORT, function () {
                console.log(`App listening on port ${PORT}`, {
                    useCreateIndex: true,
                    useFindAndModify: false
                });
            });
        }
        catch (e) {
            console.log(e);
        }
    });
}
start().catch(err => console.log(err));
