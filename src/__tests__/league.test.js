import {
  fetchLeagueStatus,
  getLeague,
  getLeagueFailure,
  GET_LEAGUE,
  GET_LEAGUE_FAILURE,
  GET_LEAGUE_SUCCESS,
} from '../redux/detailsPage/league';

describe('Tests for Leagues actions', () => {
  test('should return an object with type and object with a boolean ', () => {
    const object = fetchLeagueStatus({ bool: true });
    expect(object.type).toEqual(GET_LEAGUE);
    expect(object.payload.bool).toBeTruthy();
  });
  test('should return an object with type and object with an array ', () => {
    const response = [];
    const object = getLeague({ response });
    expect(object.type).toEqual(GET_LEAGUE_SUCCESS);
    expect(object.payload.response).toEqual(response);
  });

  test('should return an object with type and object with an error message ', () => {
    const error = 'not found';
    const object = getLeagueFailure({ error });
    expect(object.type).toEqual(GET_LEAGUE_FAILURE);
    expect(object.payload.error).toBe(error);
  });
});
