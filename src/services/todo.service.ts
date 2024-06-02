import TodoRepository from '../repositories/todo.repository';
import { ITodo as TodoType } from "../models/todo.model";


class TodoService {
    private todoRepository: TodoRepository;

    constructor(todoRepository: TodoRepository) {
        this.todoRepository = todoRepository;
    }

    async getAllTodo(): Promise<TodoType[]> {
        const todos = await this.todoRepository.getAllTodos();
        return todos;
    }
}

export default TodoService;
