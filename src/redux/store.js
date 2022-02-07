import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import LeagueReducer from './detailsPage/league';
import countriesReducer from './homePage/homePage';
import LeagueStandingsReducer from './LeagueStandings/leagueStandings';

const reducers = combineReducers({
  countries: countriesReducer,
  leagues: LeagueReducer,
  standings: LeagueStandingsReducer,
});

const middlewares = [logger];

const store = createStore(reducers,
  applyMiddleware(...middlewares));

export default store;
