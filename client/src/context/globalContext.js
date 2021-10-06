import { createContext, useContext, useReducer } from 'react';
import globalReducer from './globalReducer';

const initialState = {
  user: null,
  isLoading: false,
  alert: { isAlert: false, type: '', message: '' },
};

const globalContext = createContext(initialState);

export const useValue = () => {
  return useContext(globalContext);
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <globalContext.Provider value={{ state, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalProvider;
