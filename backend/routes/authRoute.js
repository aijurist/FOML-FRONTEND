import express from "express"
import { signup } from "../controller/createUserController.js"
import { login } from "../controller/getUserController.js"
import { deleteAllUser } from "../controller/deleteAllUserController.js"
import { deleteUser } from "../controller/deleteUserController.js"
import { getAllUser } from "../controller/getAllUserController.js"

const router =  express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.get('/users',getAllUser)
router.delete('/deleteUser/:id',deleteUser)
router.delete('/deleteAllUsers',deleteAllUser)

export default router;