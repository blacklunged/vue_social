import { User } from "./models/models.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "./utils/config.js"

function genereateJwt(id, nickname){
    return jwt.sign(
        {id: id, nickname}, 
        SECRET_KEY,
        {expiresIn:'24h'}
    )
}

class authController {
    async registration(req, res){
        try{
            const {nickname, password, name, surname} = req.body
            const candidate = await User.findOne({where:{nickname}})
            if (candidate){
                return res.status(400).json({message:'Ошибка регистрации'})
            }
            const hashPassword = await bcrypt.hash(password, 7)
            const user = await User.create({nickname, name, surname, password:hashPassword})

            const token = genereateJwt(user.id, user.nickname)
            return res.json({token})

        }catch(e){
            console.log(e);
            res.status(400).json({message:'Ошибка регистрации'})
        }
    }
    async login(req, res){
        try{
            const {nickname, password} = req.body
            const user = await User.findOne({where:{nickname}})
            if (!user){
                return res.status(400).json({message:'Такой пользователь не найден'})
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword){
                return res.status(400).json({message:'Неверный пароль'})
            }
            const token = genereateJwt(user.id, user.nickname)
            return res.json({token})

        }catch(e){
            console.log(e);
            res.status(400).json({message:'Ошибка входа'})
        }
    }
    async check(req, res){
        const token = genereateJwt(req.user.id, req.user.nickname)
        const user = await User.findOne({where:req.user.nickname})
        return res.json({token, user})
    }
}
export const controller = new authController()