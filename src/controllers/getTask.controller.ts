import TodoService from '../services/todo.service';
import TodoRepository from '../repositories/todo.repository';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const todoservice = new TodoService(new TodoRepository);

export const getAllTasks = async (req: Request, res: Response) =>{
    try {
        const response = await todoservice.getAllTodo();
        console.log(req.url);
        return res.status(StatusCodes.OK).json({msg: response, success:'ok'});
    }
    catch(error){
         console.log(error);
         throw error;
    }
};

