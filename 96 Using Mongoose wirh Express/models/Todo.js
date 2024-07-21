import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: String,
    dsc: String,
    isDone: Boolean,
    days : Number
});

export const Todo = mongoose.model('Todo', TodoSchema);

//This is the condition , beacause overall seacurity of your application gets enhanced becuse of mongoose 