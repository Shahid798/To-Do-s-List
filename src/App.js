 import './App.css';
import {Header} from './MyComponents/Header';
// import {Todo} from './MyComponents/Todo';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import React,{ useState,useEffect } from 'react';
import {AddToDo} from './MyComponents/AddToDo';
import {About} from './MyComponents/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem('todos')===null){
      initTodo = [];
  }
  else{
      initTodo = JSON.parse(localStorage.getItem('todos'));
  }


  const onDelete=(todo)=>{
    console.log('i am On Delete of todo',todo);
     setTodos(todos.filter((e)=>{
      return e!==todo;
     }));
     localStorage.getItem('todos');
  }

  const addToDo = (title,desc)=>{
    let sno;
    if(todos.length===0){
      sno =0;
    }
    else{
       sno = todos[todos.length-1].sno +1;
    }
   
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
      }
      setTodos([...todos,myTodo]);
      console.log(myTodo);
      
  }

  const [todos,setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])

  return (
    <>
    <Router>
        <Header title="My To Do's List" searchBar={false} />
        
        <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
              <AddToDo addToDo={addToDo}/>
              <Todos todos={todos} onDelete={onDelete}/>
            </>
            )
          }}>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          
        </Switch>

        

        <Footer/>
    </Router>
    </>
  );
}

export default App;
