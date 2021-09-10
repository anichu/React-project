const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {

  if(action.type === 'add'){
    return {
    counter: state.counter + 1,
    
      }  
}else if(action.type === 'remove'){
    return{
      counter: state.counter - 1
    }
  }
  
  return state;
};
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  // this function will be run whenever the state is changed
  
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);
store.dispatch({type:'add'});
store.dispatch({type:'add'});
store.dispatch({type:'remove'});
store.dispatch({type:'remove'});

