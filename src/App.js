// import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import {TodoItem} from './MyComponent/TodoItem';
import {AddTodo, addTodo } from './MyComponent/AddTodo.js';
import {Todos} from './MyComponent/Todos';
import {Footer} from './MyComponent/Footer';
import { useState,useEffect } from 'react';
import { About } from './MyComponent/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  let initTodo;
  if(    localStorage.getItem("todos")===null  ){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(    localStorage.getItem("todos")    );

  }
const onDelete=(todo)=>{
  console.log("THIS IS DELETED",todo);


  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
  localStorage.setItem("todos",JSON.stringify(todos));

}


const  addTodo=(title,desc)=>{
  console.log("i am adding  this todo",title,desc);
  
  let sno;
 if(todos.length===0){
  sno=0;
 }
 else{
  sno=todos[todos.length-1].sno+1;
 }
  const myTodo={
    sno:sno,
    title:title,
    desc:desc,

  }
  setTodos([...todos,myTodo]);
  
  
}
const[ todos,setTodos]=useState( initTodo);
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
  
},[todos])
return (
 <> <Router>
      <Header title="TODO-LIST" searchBar={true}/>
      {/* <Routes>
          <Route exact path="/about" />
            <About />
          

          <Route exact path="/" element={()=>{return(
            <>
           
            </>
          );}}
           />
          
        </Routes> */}
           <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element={<>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
          </>} />
        </Routes>
        <Footer/>
    </Router>
     

      </>
  );
}


export default App;
