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
Object.defineProperty(exports, "__esModule", { value: true });
const resume_controller_1 = require("../../src/core/repository/resume.controller");
const Resume_1 = require("../../src/models/Resume");
const User_1 = require("../../src/models/User");
jest.mock("../../models/Resume");
jest.mock("../../models/User");
jest.mock("../../models/", () => ({
    sequelize: { sync: jest.fn() }
}));
describe("ResumeController", () => {
    let controller;
    let req;
    let res;
    let next;
    beforeEach(() => {
        controller = new resume_controller_1.ResumeController();
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            send: jest.fn()
        };
        req = {
            body: {
                email: "test@example.com"
            },
            params: {
                id: "1"
            }
        };
        next = jest.fn();
        jest.clearAllMocks();
    });
    describe("getIdByEmail", () => {
        it("should return user id", () => __awaiter(void 0, void 0, void 0, function* () {
            User_1.User.findOne.mockResolvedValue({ id: 123 });
            const id = yield controller.getIdByEmail("test@example.com");
            expect(id).toBe(123);
        }));
        it("should return undefined if user not found", () => __awaiter(void 0, void 0, void 0, function* () {
            User_1.User.findOne.mockResolvedValue(null);
            const id = yield controller.getIdByEmail("nonexistent@example.com");
            expect(id).toBeUndefined();
        }));
    });
    describe("getResumes", () => {
        it("should return all resumes", () => __awaiter(void 0, void 0, void 0, function* () {
            Resume_1.Resume.findAll.mockResolvedValue([{ id: 1 }, { id: 2 }]);
            yield controller.getResumes(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith([{ id: 1 }, { id: 2 }]);
        }));
        it("should handle errors", () => __awaiter(void 0, void 0, void 0, function* () {
            Resume_1.Resume.findAll.mockRejectedValue(new Error("DB Error"));
            yield controller.getResumes(req, res, next);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: expect.any(String) });
        }));
    });
    describe("getCurrentResumes", () => {
        it("should return resumes for user", () => __awaiter(void 0, void 0, void 0, function* () {
            User_1.User.findOne.mockResolvedValue({ id: 123 });
            Resume_1.Resume.findAll.mockResolvedValue([{ id: 1 }]);
            yield controller.getCurrentResumes(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith([{ id: 1 }]);
        }));
    });
    describe("getOneAdvert", () => {
        it("should return single resume", () => __awaiter(void 0, void 0, void 0, function* () {
            Resume_1.Resume.findOne.mockResolvedValue({ id: 1 });
            yield controller.getOneAdvert(req, res, next);
            expect(res.json).toHaveBeenCalledWith({ id: 1 });
        }));
        it("should handle error", () => __awaiter(void 0, void 0, void 0, function* () {
            Resume_1.Resume.findOne.mockRejectedValue(new Error("fail"));
            yield controller.getOneAdvert(req, res, next);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: expect.any(String) });
        }));
    });
    describe("createResume", () => {
        it("should create a new resume", () => __awaiter(void 0, void 0, void 0, function* () {
            req.body = {
                title: "title",
                skills: "skills",
                salary: 1000,
                description: "desc",
                contacts: "123",
                email: "test@example.com",
                categoryId: 1
            };
            User_1.User.findOne.mockResolvedValue({ id: 123 });
            Resume_1.Resume.create.mockResolvedValue({});
            Resume_1.Resume.sync = jest.fn();
            yield controller.createResume(req, res, next);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.send).toHaveBeenCalledWith({ success: expect.any(String) });
        }));
    });
    describe("deleteAdvert", () => {
        it("should delete a resume", () => __awaiter(void 0, void 0, void 0, function* () {
            Resume_1.Resume.destroy.mockResolvedValue(1);
            yield controller.deleteAdvert(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ OK: expect.any(String) });
        }));
    });
});
