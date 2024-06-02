import Todo, { ITodo as TodoType } from "../models/todo.model";

class TodoRepository{
    async getAllTodos(): Promise<TodoType[]> {
        try {
            const todos = await Todo.find({}).select('task');
            console.log(todos);
            return todos;
        } catch (error) {
            console.error(error);
            throw error; 
        }
    }
}

export default TodoRepository;