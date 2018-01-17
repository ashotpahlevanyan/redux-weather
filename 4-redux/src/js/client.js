import { combineReducers, createStore } from 'redux';

const userReducer = (state={}, actions) => {
  return state;
}

const tweetsReducer = (state={}, actions) => {
  return state;
}

const reducers = combineReducers({
  user: userReducer, 
  tweets: tweetsReducer
});

const store = createStore(reducers, {
  user : {
    name: "Ashot", 
    age: 32
  },
  tweets : []
});

store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch({type: "INC", payload: 15});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "INC", payload: 18});
store.dispatch({type: "DEC", payload: 37});
store.dispatch({type: "DEC", payload: 437});
store.dispatch({type: "INC", payload: 1500});