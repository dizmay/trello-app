import {
    applyMiddleware,
    combineReducers,
    createStore,
    compose,
  } from 'redux';
  import thunk from 'redux-thunk';
  import SignupReducer from './Signup/SignupReducer';
  
  const store = createStore(combineReducers({
    SignupReducer
  }), compose(
    applyMiddleware(thunk),
  ));
  
  export default store;
  