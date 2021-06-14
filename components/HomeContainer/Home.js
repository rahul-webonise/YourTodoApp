import React, { useMemo } from 'react'

//local imports
import { AddTodo } from "../Add-Todo/AddTodo";
import { TodoList } from "../Todo-List/TodoList";

//style imports
import classes from './Home.module.css'

export const Home = ({ allTodos }) => {

    const notCompletedTodos = useMemo(() => allTodos.filter(eachTodo => !eachTodo.completed), [allTodos])

    return (
        <div className={classes.Home}>
            <AddTodo />
            <TodoList allTodos={notCompletedTodos} />
        </div>
    )
}
