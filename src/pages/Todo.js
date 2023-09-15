import AddToList from '@/components/AddToList'
import React, { useState } from 'react'
import { BsTrashFill } from "react-icons/bs"
import { BiEdit } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../../redux/Slice/Todo'

const Todo = () => {
    const [showModal, setShowModal] = useState(false)
    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    const todoList = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()

    const deleteTodo = () => {
        dispatch(removeTodo())
    }
    
    return (
        <div className='flex items-center justify-center h-screen'>
            {showModal && (<AddToList handleShowModal={handleShowModal} />)}
            <div className='w-[400px] bg-[#f1f1f1] rounded-lg px-10 py-5 max-h-[600px] overflow-y-auto'>
                <div className='flex items-center text-slate-500 justify-between w-full border-b-2 border-slate-500'>
                    <h2>My Todo List</h2>
                    <div className='py-5'>
                        <button className='bg-blue-500 py-2 px-3 text-white rounded-lg' onClick={() => setShowModal(true)}>Add Todo</button>
                    </div>
                </div>
                <div>
                    {todoList && todoList.map((todo, index) => (
                    <ul className='text-black list-disc mt-5' key={index}>
                        <li className='flex justify-between py-2 px-2 text-black'>
                            <div>
                                {todo.todoTitle}
                            </div>
                            <div>
                                {todo.todoDate}
                            </div>
                            <div>
                                {todo.todoTime}
                            </div>
                            <div className='text-slate-500 cursor-pointer space-x-3 flex'>
                                <BiEdit size={18} role='button' className='hover:text-blue-500' />
                                <BsTrashFill size={18} role='button' className='hover:text-red-500' onClick={deleteTodo}/>
                            </div>
                        </li>
                    </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Todo