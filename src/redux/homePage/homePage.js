const initialState = {
  onSuccess:[],
  onFailure:'',
  isLoading: false,
}

const GET_COUNTRIES = "FOOT_INFO/HOME_PAGE_GET_COUNTRIES";
const GET_COUNTRIES_SUCCESS = "FOOT_INFO/HOME_PAGE_GET_COUNTRIES_SUCCESS";
const GET_COUNTRIES_FAILURE = "FOOT_INFO/HOME_PAGE_GET_COUNTRIES_FAILURE";

export const getCountries = (payload) => ({
  type: GET_COUNTRIES,
  payload
})

const footBallReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, isLoading: true };
    case GET_COUNTRIES_SUCCESS:
      return { ...state, onSuccess: action.payload.data.response };
    case GET_COUNTRIES_FAILURE:
      return { ...state, onFailure: action.error};
    default:
      return state;
  }
}

export default footBallReducer;