
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import { useState } from "react";
import AddTodo from './Components/AddTodo';

function App() {
  const onDelete = (todo)=>{
    console.log("Are you sure you want to delete? ",todo);
    setTodos(todos.filter((e)=>{
      return e!=todo;
    }))
  }
  const addTodo = (title,desc)=>{
    console.log("I am adding ${title}",title,desc )
    let sno;
    if(todos.length==0)sno = 0;
    else{
     sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno :sno,
      title :title,
      desc : desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }


  const [todos, setTodos] = useState( [
    {
      sno:1,
      title:"Go to Home",
      desc: "Father is calling"

    },
    {
      sno:2,
      title:"Go to school",
      desc: "Teacher is calling"

    },
    {
      sno:3,
      title:"Go to Shop",
      desc: "Some ornaments is needed to bought "

    }
  ]);
  return (
      <>
      
        <Header title = "Todos List App"/>
        <AddTodo addTodo={addTodo}/>
        <Todos todos = {todos}  onDelete = {onDelete} /> 
        <Footer/>
     </>
  );
}

export default App;
