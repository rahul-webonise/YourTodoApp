import React from 'react'

//local imports
import { TodoList } from "../Todo-List/TodoList";

//style imports
import classes from './TodoEg.module.css'

export const TodoEg = ({ allTodos }) => {
    return (
        <div className={classes.TodoEg}>
            <TodoList allTodos={allTodos} noBtns />
        </div>
    )
}
