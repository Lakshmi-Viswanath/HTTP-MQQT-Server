import mongoose, {Schema, Document} from "mongoose";

export interface ITodo extends Document{
    task : string;
}

const todoSchema: Schema = new Schema({
    task:{
        type: String
    }
});


const Todo = mongoose.model<ITodo>('Todo', todoSchema);

export default Todo;
