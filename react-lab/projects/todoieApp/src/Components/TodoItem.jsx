import react from 'react';

const TodoItem=()=>{
    return(<li class="todo-item">
        <span>
        <input type="checkbox"/>
        <span class="todo-text">Eat</span>
        </span>
        <p>...</p>
    </li>)
}
export default TodoItem;