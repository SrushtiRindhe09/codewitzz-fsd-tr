import React from "react";
import Header from './Components/Header.jsx';
import TodoItem from './Components/TodoItem.jsx';
import Button from './Components/Button.jsx';
import './style.css';

const App = () => {
    return (
    <div id="todo-container">
        <Header/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <Button/>
    </div> ) 
}
export default App;