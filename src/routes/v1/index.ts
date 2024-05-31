import express from 'express';
import {fetchAllTasks} from '../../controllers/fetchTask.controller';

const v1router = express.Router();

v1router.get('/fetchAllTasks', fetchAllTasks);

export default v1router;