
import { Request, Response } from 'express';

export const fetchAllTasks = (req: Request, res: Response) =>{
    console.log(req.url);
    res.json({msg: 'ok'});
};

