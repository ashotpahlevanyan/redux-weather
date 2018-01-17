import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const reducer = (state=0, action) => {
  
  return state;
}

const middleware = applyMiddleware(logger());

const store = createStore(reducer, middleware); 

store.dispatch({type: "FOO"});