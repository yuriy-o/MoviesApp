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

  console.log(movieData);
  console.log(movieId);

  const location = useLocation();
  const from = location.state?.from ?? '/';

  return (
    <Section>
      <BackLink to={from}>Go Back</BackLink>
      <img src="" alt="" />
    </Section>
  );
};
