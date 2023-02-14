import { Link } from 'react-router-dom';

import { Box, FilmName, InfoWrap, Item, List } from './MovieList.styled';
import photoNotFound from '../../pages/NotFound/photo-not-found.jpg';

export const MovieList = ({ trendMovie }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <List>
      {trendMovie &&
        trendMovie.map(
          ({ id, title, poster_path, vote_average, release_date }) => {
            const average = Number(vote_average).toFixed(1);
            const year = release_date.slice(0, 4);

            return (
              <Item key={id}>
                <Link href="http://" target="_blank" rel="noopener noreferrer">
                  <img
                    src={
                      poster_path
                        ? `${BASE_URL}${poster_path}`
                        : { photoNotFound }
                    }
                    alt={title}
                    loading="lazy"
                  />
                </Link>
                <InfoWrap>
                  <FilmName>{title}</FilmName>
                  <Box>
                    <p>
                      Рейтинг: <strong>{average}</strong>
                    </p>
                    <p>
                      Рік виходу: <strong>{year}</strong>
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
