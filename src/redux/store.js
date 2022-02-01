import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import LeagueReducer from './detailsPage/league';
import countriesReducer from './homePage/homePage';

const reducers = combineReducers({
  countries: countriesReducer,
  leagues: LeagueReducer,
});

const middlewares = [logger];

const store = createStore(reducers,
  applyMiddleware(...middlewares));

export default store;
