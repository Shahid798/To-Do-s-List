import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {

  let myStyle = {
    minHeight: "70vh",
    margin: "10vh auto",
  }
  return (
    <div className='container shadow-lg p-3 mb-5 bg-body rounded' style={myStyle}>
      <h3 className='my-3' >To Do's List</h3> 
      {props.todos.length === 0? "No To Do's to display":
       props.todos.map((todo)=>{
        return (<TodoItem todo={todo} key = {todo.sno} onDelete = {props.onDelete}/>)
       })
       }
    </div>
  )
}

export default Todos
