import express from 'express'
import { createPetition } from '../controller/petitiionController/createPetitionController.js';
import { getAllPetition } from '../controller/petitiionController/getAllPetition.js';
import { deleteAllPetition } from '../controller/petitiionController/deleteAllPetition.js';

const router = express.Router();

router.post('/createPetition',createPetition)
router.get('/getAllPetitions',getAllPetition)
router.delete('/deleteAllPetition',deleteAllPetition)

export default router;