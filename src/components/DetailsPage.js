// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, CogIcon, MicrophoneIcon } from '@heroicons/react/solid';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import fetchData from '../api/api';
import {
  fetchLeagueStatus,
  getLeague,
  getLeagueFailure,
} from '../redux/detailsPage/league';

const DetailsPage = () => {
  const { countryId } = useParams();
  const dispatch = useDispatch();
  const leagues = useSelector((state) => state.leagues.onSuccess);
  useEffect(async () => {
    try {
      dispatch(fetchLeagueStatus({ bool: true }));
      const {
        data: { response },
      } = await fetchData(`leagues?country=${countryId}`);
      dispatch(fetchLeagueStatus({ bool: false }));
      dispatch(getLeague(response));
    } catch (err) {
      dispatch(getLeagueFailure({ err }));
    }
  }, []);
  return (
    <div className="bg-blue-500 h-screen">
      <div className="flex justify-end bg-blue-800">
        <MicrophoneIcon className="w-5 text-white cursor-pointer" />
        <CogIcon className="w-5 text-white m-3 ml-6 mr-3 cursor-pointer" />
      </div>
      <div className="flex items-center bg-blue-700">
        <Link to="/" className=" text-white inline">
          <ArrowLeftIcon className="w-11 h-auto p-3" />
        </Link>
        <h2 className="ml-3 text-lg text-white">
          Details about
          {'  '}
          {leagues[0]?.country.name}
          {'  '}
          Leagues
        </h2>
      </div>
      <article className="flex justify-around bg-blue-500 p-3">
        <img
          className="h-auto w-32 self-center p-1"
          src={leagues[0]?.country.flag}
          alt="Country flag"
        />
        <div className="flex flex-col justify-end">
          <h3 className="font-gill font-bold text-white text-xl text-right mr-2">
            {leagues[0]?.country.name}
          </h3>
          <p className="font-lato text-lg text-right text-white mr-2">
            {leagues[0]?.country.code}
          </p>
        </div>
      </article>
      <h4 className="bg-blue-800 text-white font-lato text-base pl-2">
        Leagues and Details about leagues in
        {' '}
        {leagues[0]?.country.name}
      </h4>
      {leagues?.map((league) => (
        <div key={league.league.id}>
          <div className="bg-blue-500">
            <article
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
            </article>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsPage;

// DetailsPage.propTypes = {
//   country: PropTypes.objectOf(PropTypes.string).isRequired,
// };
