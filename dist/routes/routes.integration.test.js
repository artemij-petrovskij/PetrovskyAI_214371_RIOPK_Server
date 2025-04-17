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
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const resumeRouter_1 = __importDefault(require("./resumeRouter"));
const resume_controller_1 = require("../core/repository/resume.controller");
// Мокаем ResumeController
jest.mock('../core/repository/resume.controller');
describe('ResumeRouter Integration Tests', () => {
    let app;
    let resumeController;
    beforeAll(() => {
        app = (0, express_1.default)();
        app.use(express_1.default.json()); // Для обработки JSON-тела запросов
        // Создаем инстанс ResumeRouter и добавляем его в Express
        const resumeRouter = new resumeRouter_1.default();
        app.use('/api', resumeRouter.getRouter());
        // Получаем мок ResumeController
        resumeController = resume_controller_1.ResumeController;
    });
    afterEach(() => {
        jest.clearAllMocks(); // Очищаем моки после каждого теста
    });
    // Тест для POST /api/adverts
    describe('POST /api/adverts', () => {
        it('should return 200 and call getResumes', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockResponse = [{ id: 1, title: 'Resume 1' }];
            resumeController.getResumes.mockResolvedValue(mockResponse);
            const response = yield (0, supertest_1.default)(app)
                .post('/api/adverts')
                .send({ filters: {} });
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockResponse);
            expect(resumeController.getResumes).toHaveBeenCalled();
        }));
    });
    // Тест для PUT /api/advert (создание резюме)
    describe('PUT /api/advert', () => {
        it('should return 200 and call createResume', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockResponse = { id: 1, title: 'New Resume' };
            resumeController.createResume.mockResolvedValue(mockResponse);
            const response = yield (0, supertest_1.default)(app)
                .put('/api/advert')
                .send({ title: 'New Resume' });
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockResponse);
            expect(resumeController.createResume).toHaveBeenCalledWith({ title: 'New Resume' });
        }));
    });
    // Тест для GET /api/advert/:id (получение одного резюме)
    describe('GET /api/advert/:id', () => {
        it('should return 200 and call getOneAdvert', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockResponse = { id: 1, title: 'Resume 1' };
            resumeController.getOneAdvert.mockResolvedValue(mockResponse);
            const response = yield (0, supertest_1.default)(app)
                .get('/api/advert/1');
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockResponse);
            expect(resumeController.getOneAdvert).toHaveBeenCalledWith('1');
        }));
    });
    // Аналогично можно добавить тесты для остальных роутов:
    // POST /api/my-adverts, DELETE /api/advert/:id, PUT /api/advert/:id
});
