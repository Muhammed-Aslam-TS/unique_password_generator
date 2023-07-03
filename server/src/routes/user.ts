import express from "express";
import userController from "../controller/userController";

const router = express.Router();

router.route('/passwordGenerator').post(userController.PasswordGenerator);



export default router; 