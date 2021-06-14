import React, { useMemo } from 'react'

//local imports
import { AddTodo } from "../Add-Todo/AddTodo";
import { TodoList } from "../Todo-List/TodoList";

//style imports
import classes from './CompletedTodos.module.css'

export const CompletedTodos = ({ allTodos }) => {

    const completedTodos = useMemo(() => allTodos.filter(eachTodo => eachTodo.completed), [allTodos])

    return (
        <div className={classes.CompletedTodos}>
            <h3>List of Finished Todos</h3>
            <TodoList allTodos={completedTodos} />
        </div>
    )
}
