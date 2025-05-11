import { ResumeController } from "../../src/core/repository/resume.controller";
import { Request, Response, NextFunction } from "express";
import { Resume } from "../../src/models/Resume";
import { User } from "../../src/models/User";
import { sequelize } from "../../src/models";

jest.mock("../../src/models/Resume");
jest.mock("../../src/models/User");
jest.mock("../../src/models/", () => ({
  sequelize: { sync: jest.fn() }
}));

describe("ResumeController", () => {
  let controller: ResumeController;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    controller = new ResumeController();

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
    it("should return user id", async () => {
      (User.findOne as jest.Mock).mockResolvedValue({ id: 123 });

      const id = await controller.getIdByEmail("test@example.com");

      expect(id).toBe(123);
    });

    it("should return undefined if user not found", async () => {
      (User.findOne as jest.Mock).mockResolvedValue(null);

      const id = await controller.getIdByEmail("nonexistent@example.com");

      expect(id).toBeUndefined();
    });
  });

  describe("getResumes", () => {
    it("should return all resumes", async () => {
      (Resume.findAll as jest.Mock).mockResolvedValue([{ id: 1 }, { id: 2 }]);

      await controller.getResumes(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([{ id: 1 }, { id: 2 }]);
    });

    it("should handle errors", async () => {
      (Resume.findAll as jest.Mock).mockRejectedValue(new Error("DB Error"));

      await controller.getResumes(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: expect.any(String) });
    });
  });

  describe("getCurrentResumes", () => {
    it("should return resumes for user", async () => {
      (User.findOne as jest.Mock).mockResolvedValue({ id: 123 });
      (Resume.findAll as jest.Mock).mockResolvedValue([{ id: 1 }]);

      await controller.getCurrentResumes(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([{ id: 1 }]);
    });
  });

  describe("getOneAdvert", () => {
    it("should return single resume", async () => {
      (Resume.findOne as jest.Mock).mockResolvedValue({ id: 1 });

      await controller.getOneAdvert(req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ id: 1 });
    });

    it("should handle error", async () => {
      (Resume.findOne as jest.Mock).mockRejectedValue(new Error("fail"));

      await controller.getOneAdvert(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: expect.any(String) });
    });
  });

  describe("createResume", () => {
    it("should create a new resume", async () => {
      req.body = {
        title: "title",
        skills: "skills",
        salary: 1000,
        description: "desc",
        contacts: "123",
        email: "test@example.com",
        categoryId: 1
      };

      (User.findOne as jest.Mock).mockResolvedValue({ id: 123 });
      (Resume.create as jest.Mock).mockResolvedValue({});
      (Resume.sync as jest.Mock) = jest.fn();

      await controller.createResume(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith({ success: expect.any(String) });
    });
  });

  describe("deleteAdvert", () => {
    it("should delete a resume", async () => {
      (Resume.destroy as jest.Mock).mockResolvedValue(1);

      await controller.deleteAdvert(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ OK: expect.any(String) });
    });
  });
});
