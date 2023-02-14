export const MovieList = ({ trendMovie }) => {
  console.log('trendMovie', trendMovie);

  return (
    <ul>
      {trendMovie &&
        trendMovie.map(
          ({ id, title, poster_path, vote_average, release_date }) => {
            return (
              <li key={id}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                  />
                </a>
                <div>
                  <h2>{title}</h2>
                  <p>
                    Рейтинг: <b>{vote_average}</b> | Рік виходу:{' '}
                    <b>{release_date}</b>
                  </p>
                </div>
              </li>
            );
          }
        )}
    </ul>
  );
};
