import axios from 'axios';

const GET_USER = "GET_USER";

export function getUser(){
  return {
    type: GET_USER,
    payload: axios.get('/api/me')
  };
};

const initialState = {
  user: {},
  isAuthed: false
};

export default function userReducer(state=initialState, action){
  switch(action.type) {
    case 'GET_USER_FULFILLED':
      return {
        ...state,
        user: action.payload.data,
        isAuthed: true
      };
    default:
      return state;
  }
}