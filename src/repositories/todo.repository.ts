import Todo, { ITodo as TodoType } from "../models/todo.model";

class TodoRepository{
    async getAllTodos(): Promise<TodoType[]> {
        try {
            const todos = await Todo.find({});
            return todos;
        } catch (error) {
            console.error(error);
            throw error; // it's better to throw an error to handle it on a higher level
        }
    }
}

export default TodoRepository;