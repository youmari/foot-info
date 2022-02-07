import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import fetchData from '../api/api';
import {
  fetchLeagueStatus,
  getLeague,
  getLeagueFailure,
} from '../redux/detailsPage/league';
import Bar from './Bar';
import GoBackBar from './GoBackBar';
import Loading from './Loading';
import Header from './Header';

const DetailsPage = () => {
  const { countryId } = useParams();
  const dispatch = useDispatch();
  const { onSuccess, isLoading } = useSelector((state) => state.leagues);

  useEffect(async () => {
    try {
      dispatch(fetchLeagueStatus({ bool: true }));
      const {
        data: { response },
      } = await fetchData(`leagues?country=${countryId}`);
      dispatch(getLeague(response));
      dispatch(fetchLeagueStatus({ bool: false }));
    } catch (err) {
      dispatch(getLeagueFailure({ err }));
    }
  }, []);
  return (
    <div className="bg-blue-500 h-screen">
      <Bar />
      {!isLoading ? (
        <>
          <GoBackBar name={`Details about ${onSuccess[0]?.country.name} leagues`} to="/" />
          <Header
            name={onSuccess[0]?.country.name}
            flag={onSuccess[0]?.country.flag}
            code={onSuccess[0]?.country.code}
          />
          <h4 className="bg-blue-800 text-white font-lato text-base pl-2">
            Details about leagues in
            {' '}
            {onSuccess[0]?.country.name}
          </h4>
          {onSuccess?.map((league) => (
            <div key={league.league.id}>
              <div className="bg-blue-500">
                <Link
                  to={`${league.league.id}`}
                  className="h-20 flex items-center bg-blue-700 even:bg-blue-900 gap-3 relative"
                  key={league.league.id}
                >
                  <img
                    className="w-16 h-auto p-3"
                    src={league.league.logo}
                    alt="league logo"
                  />
                  <h3 className="font-lato text-lg text-white">
                    {league.league.name}
                  </h3>
                  <ArrowCircleRightIcon className="w-4 text-white absolute right-3" />
                </Link>
              </div>
            </div>
          ))}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DetailsPage;
