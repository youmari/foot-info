import { Route, Routes } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import HomePage from './components/HomePage';
import LeagueStandings from './components/LeagueStandings';

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
