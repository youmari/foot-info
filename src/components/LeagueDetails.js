// import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import DetailsPage from './DetailsPage';
// import fetchData from '../api/api';
const LeagueDetails = () => {
  const countriesData = useSelector((state) => state.countries.onSuccess);

  return (
    <>
      {countriesData?.map((country) => (
        <Routes key={uuid()}>
          <Route exact path={country.name} element={<DetailsPage country={country} />} />
        </Routes>
      ))}
    </>
  );
};

export default LeagueDetails;
