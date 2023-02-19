import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { getQueryMovie } from 'utils/Api';
import { Section } from 'pages/Home/Home.styled';
import { Input } from './Movies.styled';
import { MovieList } from 'components/MovieList/MovieList';
import { Formik } from 'formik';
import { Warn } from 'components/Reviews/Reviews.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [querySearch, setQuerySearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryUrl = searchParams.get('query');

  const location = useLocation();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    actions.setSubmitting(false);

    if (values.searchQuery === '') {
      return;
    }
    setSearchParams({ query: values.searchQuery });
  };

  useEffect(() => {
    if (!queryUrl) {
      return;
    }

    setQuerySearch(queryUrl);
    getQueryMovie(queryUrl.toLowerCase()).then(data => setMovies(data.results));
    setIsLoading(true);
  }, [queryUrl]);

  return (
    <Section>
      <Formik
        // initialValues={{ searchQuery: '' }}
        initialValues={{ searchQuery: searchParams.get('query') || '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <form>
            <Input
              name="query"
              value={querySearch}
              onChange={e => setQuerySearch(e.target.value.trim())}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
          </form>
        )}
      </Formik>

      {movies.length === 0 && searchParams.get('query') && isLoading && (
        <Warn>We don`t have any movies</Warn>
      )}

      <MovieList movies={movies} state={location} />
    </Section>
  );
};
export default Movies;
