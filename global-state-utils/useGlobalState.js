//using useReducer with useContext for global state instead of redux
import { useReducer } from 'react';

import { ACTION_CONSTANTS } from './stateActionConstants';

const initialState = [
    {
        todoId: 't1',
        todoName: "buy tomatoes",
        completed: true
    },
    {
        todoId: 't2',
        todoName: "buy potatoes",
        completed: true
    },
    {
        todoId: 't3',
        todoName: "buy potatoes",
        completed: false
    },
    {
        todoId: 't4',
        todoName: "buy potatoes",
        completed: false
    },
];

export const useGlobalState = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case ACTION_CONSTANTS.ADD_TODOS:
                return [action.data, ...state];
            case ACTION_CONSTANTS.ADD_BULK_TODOS:
                return [...state, ...action.data];
            case ACTION_CONSTANTS.DELETE_TODOS:
                return state.filter(eachTodo => eachTodo.todoId !== action.todoId);
            case ACTION_CONSTANTS.COMPLETE_TODOS:
                const todoToComplete = state.find(eachTodo => eachTodo.todoId === action.todoId);
                todoToComplete.completed = true;
                const newTodoArr = state.filter(eachTodo => eachTodo.todoId !== action.todoId);
                return [todoToComplete, ...newTodoArr];
            case ACTION_CONSTANTS.UNCOMPLETE_TODOS:
                const todoToUnComplete = state.find(eachTodo => eachTodo.todoId === action.todoId);
                todoToUnComplete.completed = false;
                const remTodoArr = state.filter(eachTodo => eachTodo.todoId !== action.todoId);
                return [todoToUnComplete, ...remTodoArr];

            default:
                console.error('should not reach here');
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return [state, dispatch];
}