import { User } from '../../models/User';
import { Vacancy } from '../../models/Vacancy';
import { Category } from '../../models/Category';
import { Company } from '../../models/Company';
import { Application } from '../../models/Application';

import { Feedback } from '../../models/Feedback';
import { sequelize } from '../../models';
const { Op } = require('sequelize');
// import { sequelize } from '../../models';
import formattedDate from '../../functions/date';
import { Request, Response, NextFunction } from "express";

interface IVacancy {
  getVacancies(req: Request, res: Response, next: NextFunction): Promise<any>;
  getCurrentVacancies(req: Request, res: Response, next: NextFunction): Promise<any>;
  getOneVacancy(req: Request, res: Response, next: NextFunction): Promise<any>;
  createVacancy(req: Request, res: Response, next: NextFunction): Promise<any>;
  createCompany(req: Request, res: Response, next: NextFunction): Promise<any>;
  createCategory(req: Request, res: Response, next: NextFunction): Promise<any>;

  createReply(req: Request, res: Response, next: NextFunction): Promise<any>;
  getReplies(req: Request, res: Response, next: NextFunction): Promise<any>;

  deleteVacancy(req: Request, res: Response, next: NextFunction): Promise<any>;
  updateVacancy(req: Request, res: Response, next: NextFunction): Promise<any>;
  changeStatus(req: Request, res: Response, next: NextFunction): Promise<any>;

  companyFeedback(req: Request, res: Response, next: NextFunction): Promise<any>;



}

class VacancyController implements IVacancy {
  async getIdByEmail(email: any): Promise<any> {
    const target = await User.findOne({ where: { firstName: email } });
    if (target === null) {
      console.log('Not found!');
    } else {
      const target_id = target.id
      return target_id
    }
  }




  async getIdByCompany(company: any): Promise<any> {
    const target = await Company.findOne({ where: { id: company } });
    if (target === null) {
      console.log('Not found!');
    } else {
      const target_id = target.id
      return target_id
    }
  }

  async getVacancies(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {



      const role = await User.findOne({ where: { firstName: req.body.email } });

      const roleId = await role.roleId
      console.log(req.body.email)
      const categories = await Category.findAll()
      const feebacks = await Feedback.findAll({
        include: [
          {
            model: User,
            attributes: ['id', 'firstName', 'createdAt'], // Забираем только title из Category
          },
          {
            model: Company,
            attributes: ['name'], // Забираем только title из Category
          },
        ]
      })
      const companies = await Company.findAll({})

      const vacancies = await Vacancy.findAll({
        include: [
          {
            model: Category,
            attributes: ['id', 'name'], // Забираем только title из Category
          },
          {
            model: Company,
            attributes: ['id', 'name', 'description'], // Забираем только title из Category
          },

        ],
        attributes: ['id', 'title', 'description', 'salary', 'requirements', 'location'], // Выбираем только нужные поля из Vacancy
      });



      const replies = await this.getIdByEmail(req.body.email)
      console.log(replies)

      const applications = await Application.findAll({
        where: { userId: replies },
        include: [
          {
            model: Vacancy,
            attributes: ['title'], // Забираем только title из Category
          },

          {
            model: User,
            attributes: ['firstName', 'lastName'], // Забираем только title из Category
          },
        ],
        attributes: ['vacancyId', 'coverLetter', 'updatedAt'], // Выбираем только нужные поля из Vacancy
      });


      res.status(200).json({ vacancies, categories, companies, roleId, applications, feebacks });

    } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "An error occurred while updating the Item" });
    }
  }
  async getCurrentVacancies(req: Request, res: Response, next: NextFunction): Promise<any> { }
  async getOneVacancy(req: Request, res: Response, next: NextFunction): Promise<any> {

    try {
      const resume = await Vacancy.findOne({ where: { id: req.params.id } });
      console.log(resume)
      res.json(resume)
    } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "An error occurred while loading the Item" });
    }
  }
  async createVacancy(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const {
        title,
        description,

        salary,
        requirements,
        location,


        categoryId,
        companyId,
        email,

      } = req.body;
      console.log(req.body)
      const target = await this.getIdByEmail(email)
      const newVacancy = await Vacancy.create({
        title: title,
        description: description,

        salary: salary,
        requirements: requirements,
        location: location,
        date: formattedDate(),

        categoryId: categoryId,
        companyId: companyId,

      });

      res.status(201).send({ "success": `Data object created successfully` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "An error occurred while updating the Item" });
    }
  }

  async createCompany(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const {
        name,
        description,
      } = req.body;

      const newVacancy = await Company.create({
        name: name,
        description: description,
      });

      res.status(201).send({ "success": `Data object created successfully` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "An error occurred while updating the Item" });
    }
  }

  async createCategory(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const {
        name,
        description,
      } = req.body;

      const newVacancy = await Category.create({
        name: name,
        description: description,
      });

      res.status(201).send({ "success": `Data object created successfully` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "An error occurred while updating the Item" });
    }
  }

  async createReply(req: Request, res: Response, next: NextFunction): Promise<any> {

    try {
      const {
        email,
        vacancyId,

      } = req.body;
      const target = await this.getIdByEmail(email)

      console.log(req.body)


      const exOrNot = await Application.findOne({ where: { userId: target, vacancyId: vacancyId } })

      console.log(exOrNot)
      if (exOrNot === null) {
        const newApplication = await Application.create({
          coverLetter: "На рассмотрении",
          vacancyId: vacancyId,
          userId: target

        });
        res.status(201).send({ "success": `Вы откликнулись на вакансию` });
      } else {
        res.status(201).send({ "warning": `Вы уже откликались на эту вакансию` });
      }



    } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "An error occurred while updating the Item" });
    }
  }

  async getReplies(req: Request, res: Response, next: NextFunction): Promise<any> {
    console.log(req.body)
    const applications = await Application.findAll({
      //where: { userId: 1 },
      include: [
        {
          model: Vacancy,
          attributes: ['title'], // Забираем только title из Category
        },

        {
          model: User,
          attributes: ['firstName', 'lastName'], // Забираем только title из Category
        },
      ],
      attributes: ['vacancyId', 'coverLetter', 'updatedAt', 'userId'], // Выбираем только нужные поля из Vacancy
    });

    res.json(applications)
  }

  async changeStatus(req: Request, res: Response, next: NextFunction): Promise<any> {



    const decisions = await Application.findOne({
      where: { userId: req.body.userId, vacancyId: req.body.vacancyId },

    });
    if (decisions) {
      // Обновляем значение
      decisions.coverLetter = req.body.decision;

      // Сохраняем изменения
      await decisions.save();

      console.log('Статус успешно обновлен');
    } else {
      console.log('Запись с указанным userId не найдена.');
    }
    console.log(req.body)
    res.json(req.body)
  }


  // async getReplies(req: Request, res: Response, next: NextFunction): Promise<any> {
  //   const resume = await Application.findAll();
  //   console.log(resume)
  //   res.json(resume)

  // }

  async companyFeedback(req: Request, res: Response, next: NextFunction): Promise<any> {
    const {
      companyFeebackComment,
      raiting,
      email,
      feedBackCompanyId
    } = req.body
    const target = await this.getIdByEmail(email)
    console.log(target)
    const addFeedback = await Feedback.create({
      comment: companyFeebackComment,
      rating: raiting,
      userId: target,
      companyId: feedBackCompanyId,

    })
    console.log(req.body)
    res.json(req.body)

  }
  async deleteVacancy(req: Request, res: Response, next: NextFunction): Promise<any> { }
  async updateVacancy(req: Request, res: Response, next: NextFunction): Promise<any> { }

}

export { VacancyController }; 