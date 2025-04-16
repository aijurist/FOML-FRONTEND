import express from 'express'
import { createPetition } from '../controller/createPetitionController.js';

const router = express.Router();

router.post('/createPetition',createPetition)

export default router;