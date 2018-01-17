import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const reducer = (state=0, action) => {
  
  return state;
}

const middleware = applyMiddleware(thunk, logger());

const store = createStore(reducer, middleware); 

store.dispatch((dispatch) => {
  dispatch({type: "FOO"}); //dispatch some action, e g, started ajax call
  // do something async here , e.g. make the actional ajax call here
  dispatch({type: "BAR"});  // dispatch again e.g. ended ajax call
});