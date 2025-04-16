import express from "express"
import { signup } from "../controller/userController/createUserController.js"
import { login } from "../controller/userController/getUserController.js"
import { deleteAllUser } from "../controller/userController/deleteAllUserController.js"
import { deleteUser } from "../controller/userController/deleteUserController.js"
import { getAllUser } from "../controller/userController/getAllUserController.js"

const router =  express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.get('/users',getAllUser)
router.delete('/deleteUser/:id',deleteUser)
router.delete('/deleteAllUsers',deleteAllUser)

export default router;