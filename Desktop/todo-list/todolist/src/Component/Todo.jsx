import { useEffect, useRef, useState } from 'react';
import './Css/Todo.css'
import TodoItems from './TodoItems';

let count = 0;
export const Todo = () => {

       const [todos, setTodos] = useState([]);
       const inputRef = useRef(null);
       // a function to show infos
       const add = () => {
              setTodos([...todos, { no: count++, text: inputRef.current.value, display: "" }])
              // to reset the value of the input
              inputRef.current.value = '';
              localStorage.setItem("todos_count", count)
       }
       useEffect(() => {
              setTodos(JSON.parse(localStorage.getItem("todos")))
              count = localStorage.getItem("todos_count")
       }, [])
       // to display the result on the console we use
       // when todos get updated the function gets execute
       useEffect (() => {
              setTimeout(() => {
                     console.log(todos);
                     localStorage.setItem("todos", JSON.stringify(todos))
                    
              }, 100);
       }, [todos])
       
       return (
         <div className="todo">
                <div className="todo-header">TO-DO LIST</div>
                <div className="todo-add">
                <input ref={inputRef} type="text" placeholder='add your task' className='todo-input' />
                <div onClick={() => add()} className="todo-add-btn"> ADD</div>
                       
                </div>
                <div className="todo-list">
                       {todos.map((item, index) => {
                              return <TodoItems key={index} setTodos ={setTodos} no={item.no} display={item.display} text= {item.text} />
                             })}
                </div>

    </div>
  )
}
export default Todo;