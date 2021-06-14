//global state imports
import { useStateContextConsumer } from '../../../global-state-utils/globalStateContext';
import { ACTION_CONSTANTS } from '../../../global-state-utils/stateActionConstants';

//local imports
import { Button } from '../../shared/Button/Button'

//style imports
import classes from './TodoListItems.module.css'

export const TodoListItems = ({ eachTodo, noBtns }) => {

    const stateContext = useStateContextConsumer();

    const onDeleteTodoHandler = (todoId) => {
        console.log(todoId);
        stateContext.globalDispatch({ type: ACTION_CONSTANTS.DELETE_TODOS, todoId: todoId });
    }

    const onCompleteTodoHandler = (todoId) => {
        console.log(todoId);
        stateContext.globalDispatch({ type: ACTION_CONSTANTS.COMPLETE_TODOS, todoId: todoId });
    }

    const onUnCompleteTodoHandler = (todoId) => {
        console.log(todoId);
        stateContext.globalDispatch({ type: ACTION_CONSTANTS.UNCOMPLETE_TODOS, todoId: todoId });
    }

    let btnToRender;

    if (noBtns) {
        btnToRender = null;
    } else if (!eachTodo.completed) {
        btnToRender = <Button
            title="Completed"
            style={{ backgroundColor: "green", boxShadow: "none", borderRadius: "5px", width: "2.5rem", padding: "0" }}
            onClick={onCompleteTodoHandler.bind(this, eachTodo.todoId)}>
            Done
        </Button>
    } else {
        btnToRender = <Button
            title="Completed"
            style={{ backgroundColor: "green", boxShadow: "none", borderRadius: "5px", width: "3.5rem", padding: "0" }}
            onClick={onUnCompleteTodoHandler.bind(this, eachTodo.todoId)}>
            Undone
        </Button>
    }

    return (
        <li className={classes.TodoListItems}>
            <span className={classes.TodoTitle}>{eachTodo.todoName}</span>
            {btnToRender}
            {!noBtns && <Button
                title="delete"
                style={{ backgroundColor: "#eb2929", boxShadow: "none" }}
                onClick={onDeleteTodoHandler.bind(this, eachTodo.todoId)}>
                X
            </Button>}
        </li>
    )
}
