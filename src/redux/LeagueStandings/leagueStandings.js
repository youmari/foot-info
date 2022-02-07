const initialState = {
  onSuccess: [],
  onFailure: '',
  isLoading: false,
};

export const GET_LEAGUE_STANDINGS = 'FOOT_INFO/STANDINGS/GET_LEAGUE_STANDINGS';
export const GET_LEAGUE_STANDINGS_SUCCESS = 'FOOT_INFO/STANDINGS/GET_LEAGUE_STANDINGS_SUCCESS';
export const GET_LEAGUE_STANDINGS_FAILURE = 'FOOT_INFO/STANDINGS/GET_LEAGUE_STANDINGS_FAILURE';

export const fetchLeagueStandingsStatus = (payload) => ({
  type: GET_LEAGUE_STANDINGS,
  payload,
});
export const getLeagueStandings = (payload) => ({
  type: GET_LEAGUE_STANDINGS_SUCCESS,
  payload,
});

export const getLeagueStandingsFailure = (payload) => ({
  type: GET_LEAGUE_STANDINGS_FAILURE,
  payload,
});

const LeagueStandingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEAGUE_STANDINGS:
      return { ...state, isLoading: action.payload.bool };
    case GET_LEAGUE_STANDINGS_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case GET_LEAGUE_STANDINGS_FAILURE:
      return { ...state, onFailure: action.payload.err };
    default:
      return state;
  }
};

export default LeagueStandingsReducer;
