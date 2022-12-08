import React, { createContext, useReducer } from 'react'

const initialState = {
  count: 0,
  UserName: 'Apoorva',
  showModal: true,
  login:false,
  getExpertName:'',
  activeNavPage:'',
  isMeetingScheduled:
    {
        'Sajal Suhane':{
            isSet:false,
            meetingDate: '',
        },
        'Apoorva Kamat':{
            isSet:false,
            meetingDate: '',
        },
        'Jin Ryong Kim':{
            isSet:false,
            meetingDate: '',
        },
        'Yatharth Singhal':{
            isSet:false,
            meetingDate: '',
        },
        'Yash Pratapwar':{
            isSet:false,
            meetingDate: '',
        },
        'Anusri Yarlagadda':{
            isSet:false,
            meetingDate: '',
        },
    }

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
          case 'set_expert_name':
            return {...state,getExpertName:action.payload}
          case 'set_active_Nav_page' :
            return {...state,activeNavPage:action.payload}
          case 'set_meeting_schedule':
            return {...state,isMeetingScheduled:action.payload};
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