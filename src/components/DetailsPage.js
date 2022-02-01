import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import fetchData from '../api/api';
import { fetchLeagueStatus, getLeague, getLeagueFailure } from '../redux/detailsPage/league';

const DetailsPage = ({ country: { name, flag, code } }) => {
  const dispatch = useDispatch();
  // const leagues = useSelector((state) => state.leagues.onSuccess);
  useEffect(async () => {
    try {
      dispatch(fetchLeagueStatus({ bool: true }));
      const {
        data: { response },
      } = await fetchData(`leagues?country=${name}`);
      dispatch(fetchLeagueStatus({ bool: false }));
      dispatch(getLeague(response));
    } catch (err) {
      dispatch(getLeagueFailure({ err }));
    }
  }, []);
  return (
    <div className="">
      <div className="bg-blue-700">
        <Link to="/" className="underline font-gill text-white">
          <ArrowLeftIcon className="w-11 h-auto p-3" />
        </Link>
        <h2 className="text-xl text-white">
          Details about
          {name}
          {' '}
          Leagues
        </h2>
      </div>
      <article className="flex justify-around bg-blue-500 p-3">
        <img
          className="h-auto w-32 self-center p-1"
          src={flag}
          alt="Country flag"
        />
        <div className="flex flex-col justify-end">
          <h3 className="font-gill font-bold text-white text-xl text-right mr-2">
            {name}
          </h3>
          <p className="font-lato text-lg text-right text-white mr-2">{code}</p>
        </div>
      </article>
      <h4 className="bg-blue-700 text-white font-lato text-base pl-2">
        Leagues and Details about leagues in
        {name}
      </h4>
    </div>
  );
};

export default DetailsPage;

DetailsPage.propTypes = {
  country: PropTypes.objectOf(PropTypes.string).isRequired,
};