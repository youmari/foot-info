import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LeagueDetails from './components/LeagueDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
      <LeagueDetails />
    </div>
  );
}

export default App;
