import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as API from '../../utils/Api';
import { H1, Section } from './Home.styled';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const location = useLocation();
  const [trendMovie, setTrendMovie] = useState();

  useEffect(() => {
    API.getTrendMovie().then(data => setTrendMovie(data.results));
  }, []);

  return (
    <Section>
      <H1>Trending today</H1>

      <MovieList movies={trendMovie} state={location} />
    </Section>
  );
};

export default Home;
