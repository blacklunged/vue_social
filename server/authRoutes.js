import { Router } from "express";
export const router = new Router()
import {controller} from "./authController.js";
import authMiddleware from "./middlewares/authMiddleware.js";


router.post('/registration', controller.registration)
router.post('/login', controller.login )
router.get('/check', authMiddleware, controller.check)

