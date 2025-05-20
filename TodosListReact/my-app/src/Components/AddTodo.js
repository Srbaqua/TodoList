import React, { use, useState } from 'react'
import { useFormState } from 'react-dom'

const AddTodo = ({addTodo}) => {
    const [title,setTitle] = useState("");
    const [desc,setdesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Missing title or desc!!");
        }
        addTodo(title,desc);
    }
    
    return (
    <div className="container py-2" >
           <h3>Add Task</h3>
           <form onSubmit={submit}>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" className="form-control" value={desc} onChange={(e)=>setdesc(e.target.value)} id="desc" />
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
