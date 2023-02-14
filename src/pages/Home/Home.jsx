import * as API from '../../components/utils/Api';
import { useEffect, useState } from 'react';
import { H1, Section } from './Home.styled';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [trendMovie, setTrendMovie] = useState();

  useEffect(() => {
    API.getTrendMovie().then(data => setTrendMovie(data.results));
  }, []);

  return (
    <Section>
      <H1>Trending today</H1>

      <MovieList trendMovie={trendMovie} />
    </Section>
  );
};
