import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import footBallReducer from './homePage/homePage';

// const reducers = combineReducers(
//   footBallReducer,
// );
const middlewares = [logger];

const store = createStore(footBallReducer,
  applyMiddleware(...middlewares));

export default store;
