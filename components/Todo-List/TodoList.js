//local imports
import { TodoListItems } from "./Todo-List-Items/TodoListItems";

//style imports
import classes from './TodoList.module.css';

export const TodoList = ({ allTodos, noBtns }) => {
    return (
        <ul className={classes.TodoList}>
            {allTodos.map((eachTodo) => <TodoListItems key={eachTodo.todoId} eachTodo={eachTodo} noBtns={noBtns} />)}
        </ul>
    )
}
