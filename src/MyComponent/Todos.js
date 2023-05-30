import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  const mystyle={
    minHeight : "53.7vh",
    margin: "10px auto  "
  }
  return (
    <div className="container" style={mystyle}>
    <h1 className='text-center my-2'>To_Do List</h1>
    {props.todos.length===0? "i am already empty":
    props.todos.map((todo)=>{
      return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
    
    })}
    <hr/>
   
    </div>
  )
}
