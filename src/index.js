const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
// Action Creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  }
}

// (previousState, action) => newState

// const initialState = {
//   numOfCakes: 10,
//   numOfIcecreams: 20
// }

const InitialCakeState = {
  numOfCakes: 10
}

const InitialIcecreamState = {
  numOfIcecreams: 20
}

// const reducer = (state = initialState, action) => {         //reducer
//   switch(action.type) {
//     case BUY_CAKE: return {
//       ...state,
//       numOfCakes: state.numOfCakes - 1        //returns updated number of Cakes
//     }

//     case BUY_ICECREAM: return {
//       ...state,
//       numOfIcecreams: state.numOfIcecreams - 1        //returns updated number of Icecreams
//     }

//     default: return state
//   }
// }

const cakeReducer = (state = InitialCakeState, action) => {
switch(action.type) {
  case BUY_CAKE: return {
    ...state,
    numOfCakes: state.numOfCakes - 1        //returns updated number of Cakes
  }

  default: return state
}
}

const icecreamReducer = (state = InitialIcecreamState, action) => {
switch(action.type) {
  case BUY_ICECREAM: return {
    ...state,
    numOfIcecreams: state.numOfIcecreams - 1        //returns updated number of Icecreams
  }
  
  default: return state
}
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer
})
const store = createStore(rootReducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()







































// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
