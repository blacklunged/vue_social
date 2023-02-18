
import express from "express";
import {sequelize} from './db.js'
import {router as authRouter} from './authRoutes.js'

const PORT = 5000

const app = express()
app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log('server starded on port '+ PORT);
        })
    } catch(e){
        console.log(e);
    }
}
start()
