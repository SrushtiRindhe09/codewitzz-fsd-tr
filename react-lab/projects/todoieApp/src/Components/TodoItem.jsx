import react from 'react';

const TodoItem=(props)=>{
    return(<li class="todo-item">
        <span>
        {props.completed ? <></>:<input type="checkbox"/>}
        <span class="todo-text">{props.text}</span>
        </span>
        <p>...</p>
    </li>)
}
export default TodoItem;