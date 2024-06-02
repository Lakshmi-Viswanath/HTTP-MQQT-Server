import redisConnection from '../config/redisConfig';
import serverConfig from '../config/serverConfig';

export const addToList = async(topic: string, todo : string) =>{
    if (topic === '/add') {
        try {
            const task = todo.toString();
            const currentTasks = await redisConnection.get(serverConfig.REDIS_KEY) || '[]';
            const tasks = JSON.parse(currentTasks);
            tasks.push(task);
            await redisConnection.set(serverConfig.REDIS_KEY, JSON.stringify(tasks));
            if (tasks.length > 50) {
                
              }
            console.log('Task added:', task);
        } catch (error) {
            console.error('Failed to add task:', error);
        }
    }
};