import { Request, Response } from "express";
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

// interface Auth {
//     loginUser(req: Request, res: Response): Promise<any>;
//     signupUser(req: Request, res: Response): Promise<any>;
// }

import { Vacancy } from '../../models/Vacancy';
import { Category } from '../../models/Category';
import { Company } from '../../models/Company';
import { Application } from '../../models/Application';
import { User } from '../../models/User';

import { Feedback } from '../../models/Feedback';

class ReportController {
    async getReport(req: Request, res: Response): Promise<any> {
        // async getIdByEmail(email: any): Promise<any> {
        //     const target = await User.findOne({ where: { firstName: email } });
        //     if (target === null) {
        //         console.log('Not found!');
        //     } else {
        //         const target_id = target.id
        //         return 1
        //     }
        // }


        // async getIdByCompany(company: any): Promise<any> {
        //     const target = await Company.findOne({ where: { id: company } });
        //     if (target === null) {
        //         console.log('Not found!');
        //     } else {
        //         const target_id = target.id
        //         return target_id
        //     }
        // }




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




        const applications = await Application.findAll({

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


        res.status(200).json({ vacancies, categories, companies, applications, feebacks });



    }


}

export { ReportController };