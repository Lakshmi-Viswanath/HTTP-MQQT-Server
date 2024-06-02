import redisConnection from '../config/redisConfig';
import serverConfig from '../config/serverConfig';
import Todo from "../models/todo.model";

export const addToList = async(topic: string, todo : string) =>{
    if (topic === '/add') {
        try {
            const task = todo.toString();
            const currentTasks = await redisConnection.get(serverConfig.REDIS_KEY) || '[]';
            const tasks = JSON.parse(currentTasks);
            tasks.push(task);
            await redisConnection.set(serverConfig.REDIS_KEY, JSON.stringify(tasks));
            if (tasks.length > 50) {
                const tasksToInsert = tasks.map((task: string) => ({ task }));
                await Todo.insertMany(tasksToInsert);
                await redisConnection.del(serverConfig.REDIS_KEY);
              }
            console.log('Task added:', task);
        } catch (error) {
            console.error('Failed to add task:', error);
        }
    }
};