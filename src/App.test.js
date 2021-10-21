import { render, screen } from '@testing-library/react';
import App from './App';
import SearchAppBar from './components/SearchAppBar'

test('displays an app bar on the screen', () => {
  render(<App />);
  const banner = screen.getByRole('banner')
  expect(banner).toBeInTheDocument();
});

test('displays a home and login button', () => {
  render(<SearchAppBar />)
  const homeButton = screen.getByRole('button', {name: /home/i})
  expect(homeButton).toBeInTheDocument();
  const loginButton = screen.getByRole('button', {name: /login/i})
  expect(loginButton).toBeInTheDocument();
});

test('displays a movie on the home page', () => {
  render(<App />)

  const movieCard = screen.getByRole("heading", {name: /movie/i})
})

// As a user, when I view the web site I see a list of movies to Browse anonymously
// As a user, when I click on a movie it allows me to look at the specific movie with details and reviews
// As a user, I can search for movies using the search box
// As a user, I can post a review on a movie by clicking on a review input
// As a user, I can register a new user