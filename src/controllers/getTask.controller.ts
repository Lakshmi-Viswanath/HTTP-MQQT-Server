import TodoService from '../services/todo.service';
import TodoRepository from '../repositories/todo.repository';
import { Request, Response } from 'express';

const todoservice = new TodoService(new TodoRepository);

export const getAllTasks = (req: Request, res: Response) =>{
    const response = todoservice.getAllTodo();
    console.log(req.url);
    return res.json({msg: response, success:'ok'});
};

