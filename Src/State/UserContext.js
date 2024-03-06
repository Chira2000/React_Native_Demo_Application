import React, { createContext, useContext, useReducer } from 'react';


//State Management Using Context
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const initialState = {
      users: [],
      loading: true,
      error: null,
    };

    const userReducer = (state, action) => {
        switch (action.type) {
          case 'FETCH_USERS_SUCCESS':
            return { ...state, users: action.payload, loading: false };
          case 'FETCH_USERS_ERROR':
            return { ...state, error: action.payload, loading: false };
          default:
            return state;
        }
      };

      const [state, dispatch] = useReducer(userReducer, initialState);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const data = await response.json();
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data.data });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_ERROR', payload: error.message });
    }
  };

  return (
    <UserContext.Provider value={{ state, fetchUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};