import React, { useContext } from 'react';

import { useGlobalState } from './useGlobalState';

export const StateContext = React.createContext();

export const StateContextProvider = ({ children }) => {

    const [state, dispatch] = useGlobalState();

    return (
        <StateContext.Provider value={{ globalState: state, globalDispatch: dispatch }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContextConsumer = () => {
    const stateContextConsumer = useContext(StateContext);

    return stateContextConsumer;
}