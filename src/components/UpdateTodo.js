import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../../redux/Slice/Todo';

const UpdateTodo = ({ handleShowUpdateTodo, selectedTodoId }) => {
    const [error, setError] = useState("");
    const [todoData, setTodoData] = useState({
        todoTitle: "",
        todoDate: "",
        todoTime: ""
    });

    const todoList = useSelector((state) => state.todo.todos);

    useEffect(() => {
        if (selectedTodoId) {
            const existingTodo = todoList.find((todo) => todo.todoId === selectedTodoId);
            if (existingTodo) {
                setTodoData(existingTodo);
            } else {
                setError("No data found!");
            }
        }
    }, [selectedTodoId, todoList]);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTodoData({
            ...todoData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateTodo({ todoId: selectedTodoId, todoData }));

        handleShowUpdateTodo()
    };

    return (
        <div className=' bg-black bg-opacity-75 fixed inset-0 flex items-center z-0'>
            <div className='flex items-center justify-center w-full'>
                <div className='w-[500px] bg-[#f1f1f1] text-slate-500 rounded-lg z-10 relative'>
                    <div className='absolute right-5 font-bold text-2xl cursor-pointer' onClick={handleShowUpdateTodo}>
                        x
                    </div>
                    <div className='flex flex-col w-full py-5 px-10'>
                        <h2 className='text-center font-semibold text-lg uppercase py-5'>Update ToDo</h2>
                        {error && <p>{error}</p>}
                        <form className='space-y-5' onSubmit={handleSubmit}>
                            <div>
                                <input type="text" name="todoTitle" id="todoTitle" placeholder='Todo Title' value={todoData.todoTitle} className='w-full px-3 py-2' onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="date" name="todoDate" id="todoDate" placeholder='Todo Date' value={todoData.todoDate} className='w-full px-3 py-2' onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="time" name="todoTime" id="todoTime" placeholder='Todo Time' value={todoData.todoTime} className='w-full px-3 py-2' onChange={handleInputChange} />
                            </div>
                            <div className='w-full flex justify-center'>
                                <button className='bg-blue-500 py-2 px-3 text-white rounded-lg' type='submit'>Update Todo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateTodo;
