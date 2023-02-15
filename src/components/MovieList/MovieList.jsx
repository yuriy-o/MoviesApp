import { Link } from 'react-router-dom';

import { Box, FilmName, InfoWrap, Item, List } from './MovieList.styled';
import photoNotFound from '../../pages/NotFound/photo-not-found.jpg';

export const MovieList = ({ trendMovie, state }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  // console.log(trendMovie);

  return (
    <List>
      {trendMovie &&
        trendMovie.map(
          ({ id, title, poster_path, vote_average, release_date }) => {
            const average = Number(vote_average).toFixed(1);
            const year = release_date.slice(0, 4);

            return (
              <Item key={id}>
                <Link to={`/movies/${id}`} state={{ from: state }}>
                  <img
                    src={
                      poster_path ? `${BASE_URL}${poster_path}` : photoNotFound
                    }
                    alt={title}
                    loading="lazy"
                  />
                </Link>
                <InfoWrap>
                  <FilmName>{title}</FilmName>
                  <Box>
                    <p>
                      Rating: <strong>{average}</strong>
                    </p>
                    <p>
                      Release year: <strong>{year}</strong>
                    </p>
                  </Box>
                </InfoWrap>
              </Item>
            );
          }
        )}
    </List>
  );
};
