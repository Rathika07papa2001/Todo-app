import React, {useState} from "react";
import{v4 as uuid} from 'uuid'

const NewTodoForm =({create}) =>{
    const [userInput, setUserInput] =useState({})

    const handleChenge = e => {
        setUserInput({[e.target.name]:e.target.value})
    }

    const handleSubmit = e =>{
        e.prevenDefault();
        if(userInput.task ===''){
            alert('please enter the task')
        } else {
            
            const newTodo ={id:uuid(),task:userInput.task,complete:false}
            create(newTodo)
            setUserInput({})
        }
    }

    return(
        <form className='NewTodoForm' onSubmit={handleSubmit}>
            <label>New Todo</label>
            <input 
               value={userInput.task}
               onChange={handleChenge}
               type='text'
               name='text'
               placeholder="new todo"
               />
               <button>Add  Todo</button>
        </form>
    )

}
export default NewTodoForm