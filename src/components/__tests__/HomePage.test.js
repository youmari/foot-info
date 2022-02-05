import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from '../../redux/store';
import HomePage from '../HomePage';
import LeagueDetails from '../LeagueDetails';

describe('HomePage test', () => {
  test('should HomePage match the snapchot', async () => {
    const app = render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<HomePage />} path="/" />
          </Routes>
        </Router>
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });

  test('should render and and find Brazil link', async () => {
    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<HomePage />} path="/" />
          </Routes>
        </Router>
      </Provider>,
    );
    const brazilLeague = await waitFor(() => screen.getByRole('link', { name: /country flag brazil br/i }));
    expect(brazilLeague).toBeInTheDocument();
  });

  test('should render and and find Brazil link and click it and get the first league ', async () => {
    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<HomePage />} path="/" />
          </Routes>
          <LeagueDetails />
        </Router>
      </Provider>,
    );
    const canadaLeague = await waitFor(() => screen.getByRole('link', { name: /country flag canada ca/i }));
    fireEvent.click(canadaLeague);
    const league = await waitFor(() => screen.getByRole('heading', { name: /canadian championship/i }));
    expect(league).toBeInTheDocument();
  });
});
