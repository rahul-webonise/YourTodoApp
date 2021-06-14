import { useRef } from 'react';

//local imports
import { InputWithRef } from "../../components/shared/Input/Input";
import { Button } from "../../components/shared/Button/Button";

//global state imports
import { useStateContextConsumer } from '../../global-state-utils/globalStateContext';
import { ACTION_CONSTANTS } from '../../global-state-utils/stateActionConstants';

//styles imports
import classes from "./AddTodo.module.css";

const generateNewId = () => new Date().getTime().toString() + Math.ceil(Math.random() * 10000);

export const AddTodo = () => {

    const inputRef = useRef();

    const stateContext = useStateContextConsumer();

    const onAddTodoHandler = (e) => {
        e.preventDefault();
        if (inputRef.current.value) {
            const data = { todoId: generateNewId(), todoName: inputRef.current.value, completed: false };
            inputRef.current.value = "";
            stateContext.globalDispatch({ type: ACTION_CONSTANTS.ADD_TODOS, data: data });
        }
    }

    return (
        <form className={classes.AddTodo} onSubmit={onAddTodoHandler}>
            <InputWithRef placeholder="Enter Todo" ref={inputRef} />
            <Button>+</Button>
        </form>
    )
}
