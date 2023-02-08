import React, {useState} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import'./TodoList.css'

const TodoList = () =>{
    const [todos, setTodos] = useState([])

    const remove = id => {
        setTodos(todos.filter(todo => {
        console.log("you are about to delete this item: ", todo);
        return todos.id !== id;
        }))
    }
    const update = (id, updateTask) => {
        const updateTodos = todos.map(todo =>{
            if (todo.id === id) {
                return{...todo, task: updateTask}
            }
            return todo
        })
        setTodos(updateTodos)
    }

    const toggleComplete = id => {
        const updateTodos = todos.map(todo =>{
            if (todo.id === id){
                return { ...todo, complete: !todo.completed}
            }
            return todo
        })
        setTodos(updateTodos)
    }
    const create = (newTodo) =>{
        setTodos([...todos, newTodo])
        console.log("New Item Created");
    }

    const todoList = todos.map(todo => {
        return (
        <Todo 
        key={todo.id}
        remove={remove}
        togglecomplete={toggleComplete}
        update={update}
        create={create}
        todo={todo}
        />
    )}
        )
        console.log(todos)

    return (
        <div className="TodoList">
            <h1>Simple React Todo List</h1>
            <NewTodoForm create={create}/>
            <ul>{todoList}</ul>
        </div>
    )
    
   

    }
export default TodoList