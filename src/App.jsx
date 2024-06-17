import{useState} from "react"
import React from 'react'
import TodoList from "./assets/components/TodoList"
import TodoInput from "./assets/components/TodoInput"

export default function App() {
  

  const [todos, setTodos]= useState([])
  const [todoValue,setTodoValue]=useState('')

  function handleAddTodos(newTodo){
    const newTodoList= [...todos,newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodos(index){
    const newTodoList=todos.filter((todo,todoindex)=>{
      return todoindex!== index

    })
    setTodos(newTodoList)

  }

  function handleEditTodos(index){
    const valueToBeEdited= todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)

  }


  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos}/>
    </>
  )
}


