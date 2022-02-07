import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchData from '../api/api';
import {
  fetchLeagueStandingsStatus,
  getLeagueStandings,
  getLeagueStandingsFailure,
} from '../redux/LeagueStandings/leagueStandings';

const LeagueStandings = () => {
  const { leagueId } = useParams();
  const dispatch = useDispatch();
  const { onSuccess, isLoading } = useSelector((state) => state.standings);
  console.log(onSuccess);
  useEffect(async () => {
    try {
      dispatch(fetchLeagueStandingsStatus({ bool: true }));
      const {
        data: { response },
      } = await fetchData(`standings?league=${leagueId}&season=2021`);
      dispatch(getLeagueStandings(response));
      dispatch(fetchLeagueStandingsStatus({ bool: false }));
    } catch (err) {
      dispatch(getLeagueStandingsFailure({ err }));
    }
  }, []);
  return <h1>league standings</h1>;
};

export default LeagueStandings;
