import React from 'react';
import style from "./Todo.module.css"
function Todo({todo}) {
    return (
        <div className={style.container}>
            <h2>Todos</h2>
            <p className={style.text}>{todo}</p>
        </div>
    )
}
export default Todo



