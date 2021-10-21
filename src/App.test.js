import { render, screen } from '@testing-library/react';
import App from './App';
import SearchAppBar from './components/SearchAppBar'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get("http://localhost:3001/movies", (req, res, ctx) => {
    return res(ctx.json([{
      "movieId": 1,
      "metascore": "67",
      "boxOffice": "$389,804,217",
      "website": "https://marvel.com/guardians",
      "imdbRating": "7.7",
      "imdbVotes": "449,175",
      "runtime": "136 min",
      "language": "English",
      "rated": "PG-13",
      "production": "Walt Disney Pictures",
      "released": "05 May 2017",
      "imdbid": "tt3896198",
      "plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
      "director": "James Gunn",
      "title": "Guardians of the Galaxy Vol. 2",
      "actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
      "response": "True",
      "type": "movie",
      "awards": "Nominated for 1 Oscar. Another 12 wins & 42 nominations.",
      "dvd": "22 Aug 2017",
      "year": "2017",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
      "country": "USA",
      "genre": "Action, Adventure, Comedy, Sci-Fi",
      "writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)"
    }]))
  }),
)

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());


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

test('displays a movie on the home page', async () => {
  render(<App />)
  const movieCard = await screen.findByRole("heading", {name: /Guardians of the Galaxy Vol. 2/i})
  screen.debug()
})

// As a user, when I view the web site I see a list of movies to Browse anonymously
// As a user, when I click on a movie it allows me to look at the specific movie with details and reviews
// As a user, I can search for movies using the search box
// As a user, I can post a review on a movie by clicking on a review input
// As a user, I can register a new user