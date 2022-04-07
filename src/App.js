import React from "react";
import Main from './components/Main';
import './App.css';

import { useState } from "react";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Problems from './components/Problems';
import Video from "./components/Video";


function App() {
   
   const [todos, setTodos] = useState([
     {
       id: 1,
       text: "스터디 미니 프로젝트 마무리",
       checked: true
     },
     {
       id: 2,
       text: "시험 공부 열심히 하기",
       checked: false
     },
     {
       id: 3,
       text: "맛집 탐방 프로젝트",
       checked: false
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

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router>
        <Switch>
          {/* <Route path={"/home"} exact component={Home} /> */}
          <Route path={"/"} exact>
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
      </Router>
    </BrowserRouter>
    

  );
}

export default App;
