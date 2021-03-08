import {
    applyMiddleware,
    combineReducers,
    createStore,
    compose,
  } from 'redux';
  import thunk from 'redux-thunk';
  import authReducer from './auth/authReducer';
  
  const store = createStore(combineReducers({
    auth: authReducer,
  }), compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));
  
  export default store;
  