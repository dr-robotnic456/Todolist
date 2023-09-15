import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos:[
    ]
}
const TodoSlice = createSlice({
    name:"todoList",
    initialState,
    reducers:{
        addTodo:(state, action) => {
            state.todos.push(action.payload)
        },

        updateTodo:(state, action) => {
            const {todoId, todoData} = action.payload;

            const todoToUpdate = state.todos.find((todo) => todo.todoId === todoId)
            if(todoToUpdate){
                todoToUpdate.todoTitle = todoData.todoTitle;
                todoToUpdate.todoDate = todoData.todoDate;
                todoToUpdate.todoTime = todoData.todoTime;
            }
        },

        removeTodo:(state, action) => {
            const todoId = action.payload
            state.todos = state.todos.filter((todo) => todo.todoId !== todoId)
        }
    }
})

export const {addTodo, updateTodo, removeTodo} = TodoSlice.actions;
export default TodoSlice.reducer;