const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;

// To combine the multiple reducer to one as objects
const combineReducers = redux.combineReducers;

const applyMiddleware = redux.applyMiddleware;

// create logger which is middleware
const logger = reduxLogger.createLogger();

// make the type or tags name
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    // info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// }

// initial state for cake
const initialCakeState = {
  numOfCakes: 10,
};

// initial state for cream
const initialIceCreamState = {
  numOfIceCreams: 20,
};

// reducer method which containing the state and action objects
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// which cakeRedcer which reducer for buycake mark/tags to use action
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// which iceCreamReducer which reducer for buycake mark/tags to use action
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// combine the reducer to one objects
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// first make the redux store and assign the use reducer method here rootReducer which combination of the objects
// contaiing with cake and iceCream reducer method
const store = createStore(rootReducer, applyMiddleware(logger));

// after that use with store getState() which initial state
console.log("Initial State ", store.getState());

// unsubscribe method
const unsubscribe = store.subscribe(() => {});

// dispathch method use with buyCake() which get the action.type and after that reducer execute
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// you can both use at one time
// store.dispatch(buyCake(),buyIceCream());
// store.dispatch(buyCake(),buyIceCream());
// store.dispatch(buyCake(),buyIceCream());
// store.dispatch(buyCake(),buyIceCream());
// store.dispatch(buyCake(),buyIceCream());
// store.dispatch(buyCake(),buyIceCream());

// unsubscribe the method
// unsubscribe();
