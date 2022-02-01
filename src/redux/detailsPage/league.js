const initialState = {
  onSuccess: [],
  onFailure: '',
  isLoading: false,
};

const GET_LEAGUE = 'FOOT_INFO/LEAGUE_GET_LEAGUE';
const GET_LEAGUE_SUCCESS = 'FOOT_INFO/LEAGUE_GET_LEAGUE_SUCCESS';
const GET_LEAGUE_FAILURE = 'FOOT_INFO/LEAGUE_GET_LEAGUE_FAILURE';

export const fetchLeagueStatus = (payload) => ({
  type: GET_LEAGUE,
  payload,
});
export const getLeague = (payload) => ({
  type: GET_LEAGUE_SUCCESS,
  payload,
});

export const getLeagueFailure = (payload) => ({
  type: GET_LEAGUE_FAILURE,
  payload,
});

const LeagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEAGUE:
      return { ...state, isLoading: action.payload.bool };
    case GET_LEAGUE_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case GET_LEAGUE_FAILURE:
      return { ...state, onFailure: action.payload.err };
    default:
      return state;
  }
};

export default LeagueReducer;
