// AuthContext.js
import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  buyer: null,
  admin: null,
  seller: null,
  isAuthenticated: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS_BUYER':
      return {
        ...state,
        isAuthenticated: true,
        buyer: action.payload.buyer,
      };
    case 'LOGIN_SUCCESS_ADMIN':
      return {
        ...state,
        isAuthenticated: true,
        admin: action.payload.admin,
      };
    case 'LOGIN_SUCCESS_SELLER':
      return {
        ...state,
        isAuthenticated: true,
        seller: action.payload.seller,
      };
    case 'LOGOUT':
      return {
        ...state,
        buyer: null,
        admin: null,
        seller: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
