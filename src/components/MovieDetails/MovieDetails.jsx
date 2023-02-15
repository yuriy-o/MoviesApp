import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieById } from '../../components/utils/Api';

import { Section } from '../../pages/Home/Home.styled';
import { BackLink } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getMovieById(movieId).then(data => setMovieData(data));
  }, [movieId]);

  const location = useLocation();
  const from = location.state?.from ?? '/';

  const { poster_path, title, vote_average, overview } = movieData;
  console.log('movieData', movieData);

  return (
    <Section>
      {/* //! Умова → ховає кнопку [Go Back], якщо на сторінку попали за посиланням у якого нема попереднього переходу */}
      {location?.state?.from && <BackLink to={from}>Go Back</BackLink>}

      <img src="" alt="" />
    </Section>
  );
};
