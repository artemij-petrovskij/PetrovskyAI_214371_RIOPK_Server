// src/core/repository/resume.controller.test.ts
import { Request, Response } from 'express';
import { ResumeController } from '../core/repository/resume.controller';
import { ResumeRepository } from './resume.repository';

describe('ResumeController', () => {
  let controller: ResumeController;
  let mockRepo: jest.Mocked<ResumeRepository>;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseJson: jest.Mock;
  let responseStatus: jest.Mock;

  beforeEach(() => {
    // Мокируем репозиторий
    mockRepo = {
      getAll: jest.fn(),
      getById: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
      update: jest.fn(),
      getByUserId: jest.fn(),
    } as unknown as jest.Mocked<ResumeRepository>;

    // Инициализируем контроллер
    controller = new ResumeController(mockRepo);

    // Мокируем Express Request и Response
    mockRequest = {};
    responseJson = jest.fn();
    responseStatus = jest.fn(() => ({ json: responseJson }));
    mockResponse = {
      status: responseStatus,
      json: responseJson,
    };
  });

  describe('getResumes', () => {
    it('should return 200 and resumes list', async () => {
      const mockResumes = [
        { id: 1, title: 'Resume 1' },
        { id: 2, title: 'Resume 2' },
      ];

      mockRepo.getAll.mockResolvedValue(mockResumes);

      await controller.getResumes(
        mockRequest as Request,
        mockResponse as Response,
      );

      expect(mockRepo.getAll).toHaveBeenCalled();

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockResumes);
    });

    it('should return 500 if repository throws an error', async () => {
      mockRepo.getAll.mockRejectedValue(new Error('Database error'));

      await controller.getResumes(
        mockRequest as Request,
        mockResponse as Response,
      );

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Database error' });
    });
  });

  // Аналогичные тесты для других методов:
  // createResume, getCurrentResumes, getOneAdvert, deleteAdvert, updateAdvert
});