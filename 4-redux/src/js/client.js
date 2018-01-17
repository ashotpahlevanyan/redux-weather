import { applyMiddleware, createStore } from 'redux';

const reducer = (state=0, action) => {
  switch(action.type) {
    case "INC": 
      return state + 1;
    case "DEC":
      return state - 1;
  }
  return state;
}

const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
  action.type="DEC";
  next(action);
}
const middleware = applyMiddleware(logger);

const store = createStore(reducer, 1, middleware); 

store.subscribe(() => {
  console.log("store changed", store.getState());
})
store.dispatch({type: "INC"});
store.dispatch({type: "DEC"});
store.dispatch({type: "DEC"});
store.dispatch({type: "INC"});