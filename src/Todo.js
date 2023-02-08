import React,{useState} from 'react'
import'./Todo.css'

const Todo = ({ todo, remove, update,create }) =>{
    const [isEditing, setIsEditing]= useState(false)
    const [task, setTask]= useState(todo.task)

    const handleRemove = id => {
        console.log(id);
        remove(id);
    }
    const toggleForm =() => {
        setIsEditing(!isEditing)

    
    }
    const handlechange = e => {
        setTask(e.target.value)
    }
    
    const handleUpdate= e=>{
        e.prenventDefault()
        update(todo.id, task)
        toggleForm()
    }
    const toggleComplete = e =>{
        toggleComplete(e.target.id)

    }

    let result ;
    if (isEditing ) {
        result= (
            <div>
                <form className="Todo-edit-form" onSubmit= {handleUpdate}>
                    <input  value={task} onChange={handlechange} />
                    <button>Save</button>
                </form>
            </div>
        )
    } else {
        result= (
        <div className="Todo">
            <li
            id={todo.id}
            onClick={toggleComplete}
            className={todo.complete ? "Todo-Task Completed" : "Todo-task"}>
            {todo.task}
            </li>
            <div className="Todo-button">
                <button onClick={toggleForm}>Edit</button>
                <button onClick={handleRemove.bind(this,todo.id)}> Delete</button>

            </div>
        </div>
        )
    }
        return result
}

export default Todo