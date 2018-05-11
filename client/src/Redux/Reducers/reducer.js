import {combineReducers} from 'redux';

const user = (state = {}, action) => {
  switch(action.type){
    case 'GET_USER':
      return action.payload
    case 'GET_USER_PENDING':
      return state;
    case 'GET_USER_FULFILLED':
      return action.payload.data;
    case 'GET_USER_REJECTED':
      return state;
    default:
      return state;
  }
}

export default combineReducers({ user })