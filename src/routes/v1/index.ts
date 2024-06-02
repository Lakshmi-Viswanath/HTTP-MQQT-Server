import express from 'express';
import { getAllTasks } from '../../controllers/getTask.controller';

const v1router = express.Router();

v1router.get('/fetchAllTasks', getAllTasks);

export default v1router;