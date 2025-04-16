import express from 'express'
import { createPetition } from '../controller/createPetitionController.js';
import { getAllPetition } from '../controller/getAllPetition.js';

const router = express.Router();

router.post('/createPetition',createPetition)
router.get('/getAllPetitions',getAllPetition)

export default router;