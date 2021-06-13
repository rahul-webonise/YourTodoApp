//using useReducer with useContext for global state instead of redux
import { useReducer } from 'react';

import { ACTION_CONSTANTS } from './stateActionConstants';

const initialState = [];

export const useGlobalState = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case ACTION_CONSTANTS.ADD_TODOS:
                return [action.data, ...state];
            case ACTION_CONSTANTS.DELETE_TODOS:
                return state.filter(eachTodo => eachTodo.todoId != action.todoId);
            default:
                console.error('should not reach here');
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return [state, dispatch];
}