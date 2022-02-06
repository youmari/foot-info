import { Route, Routes } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route path=":countryId" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
