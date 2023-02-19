import { Link } from 'react-router-dom';

import { Box, FilmName, Img, InfoWrap, Item, List } from './MovieList.styled';
import photoNotFound from '../../pages/NotFound/photo-not-found.jpg';
// import photoNotFound from 'https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg';

export const MovieList = ({ movies, state }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <List>
      {movies &&
        movies.map(({ id, title, poster_path, vote_average, release_date }) => {
          const average = Number(vote_average).toFixed(1);
          const year = release_date.slice(0, 4);

          return (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: state }}>
                <Img
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
                    Rating: <strong>{average === '0.0' ? 0 : average}</strong>
                  </p>
                  <p>
                    Release year: <strong>{year}</strong>
                  </p>
                </Box>
              </InfoWrap>
            </Item>
          );
        })}
    </List>
  );
};
