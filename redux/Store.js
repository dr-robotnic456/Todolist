import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./Slice/Todo"

const store = configureStore({
    reducer:{
        todo: todoReducer
    }
})

export default store