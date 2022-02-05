const initialState = {
  onSuccess: [],
  onFailure: '',
  isLoading: false,
};

export const GET_COUNTRIES = 'FOOT_INFO/HOME_PAGE_GET_COUNTRIES';
export const GET_COUNTRIES_SUCCESS = 'FOOT_INFO/HOME_PAGE_GET_COUNTRIES_SUCCESS';
export const GET_COUNTRIES_FAILURE = 'FOOT_INFO/HOME_PAGE_GET_COUNTRIES_FAILURE';

export const fetchCountriesStatus = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});
export const getCountries = (payload) => ({
  type: GET_COUNTRIES_SUCCESS,
  payload,
});

export const getCountriesFailure = (payload) => ({
  type: GET_COUNTRIES_FAILURE,
  payload,
});

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, isLoading: action.payload.bool };
    case GET_COUNTRIES_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case GET_COUNTRIES_FAILURE:
      return { ...state, onFailure: action.payload.err };
    default:
      return state;
  }
};

export default countriesReducer;
