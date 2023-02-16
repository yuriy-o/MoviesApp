import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCreditsById } from '../../components/utils/Api';
import sorryImage from '../../pages/NotFound/sorryImage.svg';
import { Div, Img, Item, List, Span } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isCastLoading, setIsCastLoading] = useState(false);
  const imageURL = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getCreditsById(movieId).then(data => setCast(data.cast));
    setIsCastLoading(true);
  }, [movieId]);

  if (cast.length === 0 && isCastLoading) {
    return <p>We don't have any cast information on this movie.</p>;
  }

  console.log(cast);

  return (
    <List>
      {cast &&
        cast.map(({ profile_path, id, character, name }) => {
          return (
            <Item key={id}>
              <Img
                src={profile_path ? `${imageURL}${profile_path}` : sorryImage}
                alt={name}
              />
              <Div>
                <p>
                  <Span>Name:</Span> {name}
                </p>
                <p>
                  <Span>Character:</Span> {character}
                </p>
              </Div>
            </Item>
          );
        })}
    </List>
  );
};
