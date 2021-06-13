import { useContext, useRef, useMemo } from 'react';

//local imports
import { useStateContextConsumer } from '../global-state-utils/globalStateContext';
import { ACTION_CONSTANTS } from '../global-state-utils/stateActionConstants';

const generateNewId = () => new Date().getTime().toString() + Math.ceil(Math.random() * 10000);

const AllTodos = () => {
  const inputRef = useRef();

  const stateContext = useStateContextConsumer();

  const onAddTodoHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      const data = { todoId: generateNewId(), todoName: inputRef.current.value };
      inputRef.current.value = "";
      stateContext.globalDispatch({ type: ACTION_CONSTANTS.ADD_TODOS, data: data });
    }
  }

  const onDeleteTodoHandler = (todoId) => {
    console.log(todoId);
    stateContext.globalDispatch({ type: ACTION_CONSTANTS.DELETE_TODOS, todoId: todoId });
  }

  return (
    <>
      Add Todos
      <form onSubmit={onAddTodoHandler}>
        <label htmlFor="todoName">Todo Name</label>
        <input type="text" name="todoName" ref={inputRef} />
        <button>AddTodo</button>
      </form>

      <ul>
        {stateContext.globalState.map((EachTodo) => {
          return (
            <li key={EachTodo.todoId}>
              {EachTodo.todoName}
              <button onClick={onDeleteTodoHandler.bind(this, EachTodo.todoId)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default AllTodos;
