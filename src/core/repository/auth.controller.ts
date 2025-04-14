import UserMongo from "../../models/user.model";
import { Request, Response } from "express";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
///
import { Role } from "../../models/Role";
import { User } from "../../models/User";
import { sequelize } from "../../models/";
/// 
interface Auth {
    loginUser(req: Request, res: Response): Promise<any>;
    signupUser(req: Request, res: Response): Promise<any>;
}


class UserAuth implements Auth {

    async loginUser(req: Request, res: Response): Promise<any> {
        const candidate = await UserMongo.findOne({ email: req.body.email })

        if (candidate) {
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, candidate.password)

            if (isPasswordCorrect) {
                let token = jwt.sign({ email: candidate.email }, process.env.ACCESS_TOKEN_SECRET);
                res.status(200).send({ token: token, user: candidate.email });
            } else {
                res.status(404).json({ err: ' Пользователь не найден (Неправильный пароль)' })
            }

        } else {
            res.status(404).json({ err: 'Пользователь не найден (не зарегистрирован)' })
        }
    }

    async signupUser(req: Request, res: Response): Promise<any> {
        const candidate = await UserMongo.findOne({ email: req.body.email })
        if (candidate) {
            res.status(409).json({ message: 'Пользователь c таким логином уже существует' })
        } else {
            const salt = bcrypt.genSaltSync(10)

            const user = new UserMongo({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, salt)
            })

            await user.save()

            jwt.sign({
                email: req.body.email
            }, process.env.ACCESS_TOKEN_SECRET, (err: any, token: any) => {
                res.json({ token })

            })

            ////

            //  await sequelize.sync({ alter: true });

            //const adminRole1 = await Role.create({ roleName: "Recruiter" });
            // const adminRole = await Role.create({ roleName: "HR" }); 
            // const adminRole = await Role.create({ roleName: "ADMIN" });
            //console.log(adminRole1)


            const jane = await User.create({
                //   email: req.body.email,
                firstName: req.body.email,
                lastName: req.body.email,

                roleId: req.body.roleId,
            });

            console.log("User created:", jane);


        }
    }



}

export { UserAuth };