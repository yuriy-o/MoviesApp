import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';

import { getMovieById } from '../../utils/Api';
// import photoNotFound from '../../pages/NotFound/photo-not-found.jpg';

import { Section } from '../../pages/Home/Home.styled';
import {
  BackLink,
  Div,
  H1,
  Img,
  Info,
  LinkInfo,
  Loading,
  Span,
  Wrap,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getMovieById(movieId).then(data => setMovieData(data));
  }, [movieId]);

  const location = useLocation();
  const from = location.state?.from ?? '/';
  const {
    poster_path,
    title,
    vote_average,
    overview,
    homepage,
    genres,
    release_date,
  } = movieData;

  const imageURL = 'https://image.tmdb.org/t/p/w500/';
  const Score = Math.floor(vote_average * 10);
  // const Year = () => new Date(`${release_date}`)?.getFullYear();

  return (
    <Section>
      {/* //! Умова → ховає кнопку [Go Back], якщо на сторінку попали за посиланням у якого нема попереднього переходу */}
      {location?.state?.from && <BackLink to={from}>Go Back</BackLink>}

      <Wrap>
        <Loading>
          <Img src={`${imageURL}${poster_path}`} alt={title} />
        </Loading>

        {/* <Img
          src={poster_path ? `${imageURL}${poster_path}` : photoNotFound}
          alt={title}
        /> */}
        <Div>
          <H1>{title}</H1>
          <Info>
            <Span>User Score:</Span> {Score ? Score : 0}%
          </Info>
          <Info>
            <Span>Release Year:</Span> {release_date}
          </Info>
          <Info>
            <Span>Homepage:</Span>{' '}
            <a href={homepage} target="_blank" rel="noopener noreferrer">
              {homepage}
            </a>
          </Info>

          <Info>
            <Span>Overview:</Span> {overview}
          </Info>
          <Info>
            <Span>Genres:</Span> {genres?.map(genre => genre.name).join(', ')}
          </Info>
        </Div>
      </Wrap>
      <hr />
      <h2>Additional information</h2>
      <ul>
        <li>
          <LinkInfo to={'cast'} state={{ from }}>
            Cast
          </LinkInfo>
        </li>
        <li>
          <LinkInfo to={'reviews'} state={{ from }}>
            Reviews
          </LinkInfo>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Section>
  );
};
