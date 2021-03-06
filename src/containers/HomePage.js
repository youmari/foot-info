import { GlobeIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchData from '../api/api';
import { fetchCountriesStatus, getCountries, getCountriesFailure } from '../redux/homePage/homePage';
import Bar from '../components/Bar';
import Country from '../components/Country';

const HomePage = () => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countries.onSuccess);
  const filtredCountriesData = countriesData?.filter((country) => (
    country.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
  ));
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
    <div className="bg-blue-700">
      <Bar />
      <div className="flex justify-center items-center p-4">
        <GlobeIcon className="w-14 text-white" />
        <h2 className="text-2xl font-gill font-bold text-white">World Leagues info</h2>
      </div>
      <div className="flex justify-center bg-blue-700 m-3">
        <input className="w-13 rounded font-gill text-base p-2 border-solid border-blue-900 text-blue-900 placeholder:text-blue-900" type="search" placeholder="Search by Country..." onChange={(e) => setSearchInput(e.target.value)} />
      </div>
      <h2 className="font-gill bg-blue-800 text-white text-sm  pl-2">Leagues by Countries</h2>
      <div className="grid grid-cols-2 h-full bg-blue-700">
        {filtredCountriesData?.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
