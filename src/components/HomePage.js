import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchData from '../api/api';
import { fetchCountriesStatus, getCountries, getCountriesFailure } from '../redux/homePage/homePage';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      dispatch(fetchCountriesStatus({ bool: true }));
      const { data: { response } } = await fetchData('countries');
      dispatch(fetchCountriesStatus({ bool: false }));
      dispatch(getCountries(response));
    } catch (err) {
      dispatch(getCountriesFailure({ err }));
    }
  }, []);

  return (
    <h1> HomePage</h1>
  );
};

export default HomePage;
