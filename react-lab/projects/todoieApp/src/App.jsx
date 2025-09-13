import React from "react";
import Header from './Components/Header.jsx';
import TodoItem from './Components/TodoItem.jsx';
import Button from './Components/Button.jsx';
import HooksComponent from './Components/HooksComponent.jsx';
import './style.css';

const App = () => {
    return (
    <div id="todo-container">
        <HooksComponent/>        
        <Header/>
        <TodoItem text="Eat"/>
        <TodoItem text="play"/>
        <TodoItem completed={true} text="study"/>
        <TodoItem text="bathing"/>
        <TodoItem text="driving"/>
        <TodoItem text="drink water"/>
        <TodoItem text="breakfast"/>
        <Button/>
    </div> ) 
}
export default App;