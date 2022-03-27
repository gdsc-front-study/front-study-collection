import React from "react";
import TodoItem from './TodoItem';
import TodoInsert from "./TodoInsert";
import './TodoList.css';
import { MdAddCircle } from "react-icons/md";
import { useState } from "react";
//todos는 할일 객체가 들어있는 배열을 만들어줌
//todoitem으로 컴포넌트를 넘김
let nextId = 4;
const TodoList = ({todos, setTodos, onCheckToggle}) => {
    const [insertToggle, setInsertToggle] = useState(false);
    const onInsertToggle = () => {
        setInsertToggle(prev=> !prev);
    }
    const onInsertTodo = text => {
        if(text === "") {
          return alert("할 일을 입력해주세요.")
        } else {
          const todo= {
            id: nextId,
            text,
            checked : false
          }
          //concat 함수 설정 이유 : 새배열이 리턴되고, 기존배열 변경x(push는 변경)
          setTodos(todos => todos.concat(todo));
          nextId++;
        }
      };
    return (
    <div className="TodoList">
        {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle}/>

    ))}
    
    <div className="add-todo-button" onClick={onInsertToggle}><MdAddCircle/></div>
    {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} onInsertTodo = {onInsertTodo}/>}
    </div>);
}
export default TodoList;