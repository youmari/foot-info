import {
  fetchCountriesStatus,
  getCountries,
  getCountriesFailure,
  GET_COUNTRIES,
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_SUCCESS,
} from '../redux/homePage/homePage';

describe('Tests for Countries  actions', () => {
  test('should return an object with type and object with a boolean ', () => {
    const object = fetchCountriesStatus({ bool: true });
    expect(object.type).toEqual(GET_COUNTRIES);
    expect(object.payload.bool).toBeTruthy();
  });
  test('should return an object with type and object with an array ', () => {
    const response = [];
    const object = getCountries({ response });
    expect(object.type).toEqual(GET_COUNTRIES_SUCCESS);
    expect(object.payload.response).toEqual(response);
  });

  test('should return an object with type and object with an error message ', () => {
    const error = 'not found';
    const object = getCountriesFailure({ error });
    expect(object.type).toEqual(GET_COUNTRIES_FAILURE);
    expect(object.payload.error).toBe(error);
  });
});
