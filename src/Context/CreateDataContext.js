//CreateDataContext
import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //actions === { addPost: (dispatch) => { return () => {}}}
    //i dont what  exactly is going on
    const boundActios = {};
    for (let key in actions) {
      boundActios[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActios }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
