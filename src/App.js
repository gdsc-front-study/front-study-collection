import React from "react";
import Main from './components/Main';
import './App.css';

import { useState } from "react";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Problems from './components/Problems';
import Video from "./components/Video";


function App() {
   
   const [todos, setTodos] = useState([
     {
       id: 1,
       text: "할일 1",
       checked: true
     },
     {
       id: 2,
       text: "할일 2",
       checked: false
     },
     {
       id: 3,
       text: "할일 3",
       checked: true
     }
   ]);
//체크되도록 기능 구현(만약 id가 같다면 checked의 불리언값 반대, id 다르면 todo반환)
const onCheckToggle =(id) => {
  setTodos(todos => 
    todos.map(todo => 
      todo.id === id ? {...todo, checked: !todo.checked }: todo
      )
  );
}
  return (

    <BrowserRouter>
    <Switch>
      {/* <Route path={"/home"} exact component={Home} /> */}
      <Route path={`${process.env.PUBLIC_URL}/`} exact>
      <>
        <Main>
          <Template>
            <TodoList todos= {todos} setTodos = {setTodos} onCheckToggle = {onCheckToggle}/>
            
          </Template>
        </Main>
     </>
      </Route>
      <Route path={"/problems"} exact>
        <Problems />
      </Route>
      <Route pate={"/videos"} exact>
        <Video />
      </Route>
    </Switch>
    </BrowserRouter>
    

  );
}

export default App;
