import * as API from '../../components/utils/Api';
import { useEffect, useState } from 'react';
import { Section } from './Home.styled';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [trendMovie, setTrendMovie] = useState();

  useEffect(() => {
    API.getTrendMovie().then(data => setTrendMovie(data.results));
  }, []);

  return (
    <Section>
      <h1>Trending today</h1>
      <div>data Axios</div>

      <MovieList trendMovie={trendMovie} />
    </Section>
  );
};
