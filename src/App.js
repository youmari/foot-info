import { Route, Routes } from 'react-router-dom';
import DetailsPage from './containers/DetailsPage';
import HomePage from './containers/HomePage';
import LeagueStandings from './containers/LeagueStandings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route path=":countryId" element={<DetailsPage />} />
        <Route path=":countryId/:leagueId" element={<LeagueStandings />} />
      </Routes>
    </div>
  );
}

export default App;
