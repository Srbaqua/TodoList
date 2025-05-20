import React from 'react'
import TodoItem from "./TodoItem"

const Todos = (props) => {
  return (
    <div className="container"> 
        <h3 className = "pt-4"> Todos List </h3>
        {props.todos.length===0?"No Task to Display":
        props.todos.map((todo)=>{
            return (
            <TodoItem todo = {todo} key = {todo.sno} onDelete = {props.onDelete}/>
                )
            }
        
        )
    }

    </div>
)
}

export default Todos

