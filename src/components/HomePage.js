import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import fetchData from '../api/api';
import { fetchCountriesStatus, getCountries, getCountriesFailure } from '../redux/homePage/homePage';
import Country from './Country';

const HomePage = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countries.onSuccess);
  useEffect(async () => {
    if (!countriesData.length) {
      try {
        dispatch(fetchCountriesStatus({ bool: true }));
        const { data: { response } } = await fetchData('countries');
        dispatch(fetchCountriesStatus({ bool: false }));
        dispatch(getCountries(response));
      } catch (err) {
        dispatch(getCountriesFailure({ err }));
      }
    }
  }, []);

  return (
    <>
      <h2 className="font-gill bg-blue-800 text-white text-sm  pl-2">Leagues by Countries</h2>
      <div className="grid grid-cols-2 h-full bg-blue-700">
        {countriesData?.map((country) => (
          <Country key={uuid()} country={country} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
