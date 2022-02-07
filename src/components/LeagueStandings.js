import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchData from '../api/api';
import Bar from './Bar';
import {
  fetchLeagueStandingsStatus,
  getLeagueStandings,
  getLeagueStandingsFailure,
} from '../redux/LeagueStandings/leagueStandings';
import GoBackBar from './GoBackBar';
import Loading from './Loading';
import Header from './Header';

const LeagueStandings = () => {
  const { leagueId } = useParams();
  const dispatch = useDispatch();
  const { onSuccess, isLoading } = useSelector((state) => state.standings);

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
  return (
    <div className="bg-blue-500">
      <Bar />
      {!isLoading ? (
        <>
          <GoBackBar
            name={`Details about ${onSuccess[0]?.league.name}`}
            to={`/${onSuccess[0]?.league.country}`}
          />
          <Header
            name={onSuccess[0]?.league.name}
            flag={onSuccess[0]?.league.logo}
            code={onSuccess[0]?.league.country}
          />
          <h4 className="bg-blue-800 text-white font-lato text-base pl-2">
            Details about
            {'  '}
            {onSuccess[0]?.league.name}
            {'  '}
            standings
          </h4>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="pr-1 pl-1" title="Position">Pos</th>
                <th className="pr-1 pl-1">Club</th>
                <th className="pr-1 pl-1">Played</th>
                <th className="pr-1 pl-1" title="Win">W</th>
                <th className="pr-1 pl-1" title="Draw">D</th>
                <th className="pr-1 pl-1" title="Lose">L</th>
                <th className="pr-1 pl-1" title="Goals for">GF</th>
                <th className="pr-1 pl-1" title="Goals against">GA</th>
                <th className="pr-1 pl-1" title="Goal Difference">GD</th>
                <th className="pr-1 pl-1" title="Points">Pts</th>
              </tr>
            </thead>
            <tbody>
              {onSuccess[0]?.league.standings[0].map((team) => (
                <tr className="p-6" key={team.team.id}>
                  <td className="text-center font-bold text-white">{team.rank}</td>
                  <td>
                    <div className="flex gap-1 items-center">
                      <img
                        className="w-8 h-fit mb-4 "
                        src={team.team.logo}
                        alt="team logo"
                      />
                      <h3 className="font-lato text-white mb-4">
                        {team.team.name}
                      </h3>
                    </div>
                  </td>
                  <td className="text-white font-lato text-center">
                    {team.all.played}
                  </td>
                  <td className="text-white font-lato">{team.all.win}</td>
                  <td className="text-white font-lato">{team.all.draw}</td>
                  <td className="text-white font-lato">{team.all.lose}</td>
                  <td className="text-white font-lato">{team.all.goals.for}</td>
                  <td className="text-white font-lato">
                    {team.all.goals.against}
                  </td>
                  <td className="text-white font-lato">{team.goalsDiff}</td>
                  <td className="text-white font-lato font-bold">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default LeagueStandings;
