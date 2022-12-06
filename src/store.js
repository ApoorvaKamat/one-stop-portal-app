import React, { createContext, useReducer } from 'react'

const initialState = {
  count: 0,
  UserName: 'Apoorva',
  showModal: true,
  login:false,
}

export const Context = createContext(initialState) // <- initialize Context using initialState

export const Store = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
          case 'show_guide_Modal':
            return {...state, showModal:action.payload}
          case 'update_text':
            console.log('Here');
            return { ...state, UserName: action.payload }
          case 'set_login':
            return {...state,login:action.payload}
          
          default:
            return state
        }
      }, initialState);
  return (
    <Context.Provider value={[state,dispatch]}> {/* <- this value is gonna be Global state */} 
      {children}
    </Context.Provider>
  )
}