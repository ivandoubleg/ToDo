//import './App.css';
import React from "react";//los paaarametros se llaman propiedades en JS
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
//import './App.css';

const todos =[
  { text:'ver video', completed: false},
    {text:'marcar lista', completed: false},
    {text:'study react ', completed: false}, 

]

function App() {// si empieza con mayuscula es un componente 
  return (
    <React.Fragment>
      <TodoCounter />
         <TodoSearch />
         <TodoList>
          {todos.map(todo=>(
            <TodoItem key={todo.text} text ={todo.text}
            completed = {todo.completed}
            />
          ))}
        </TodoList>
     <CreateTodoButton />
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
