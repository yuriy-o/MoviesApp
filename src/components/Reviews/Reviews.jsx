import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReviewsById } from 'components/utils/Api';
import { Span } from 'components/Cast/Cast.styled';
import { Hr, Img, List, Text, Warn, WrapInfoAuthor } from './Reviews.styled';
import sorryImage from '../../pages/NotFound/NoImageAvailable2.svg';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isReviewLoaded, setIsReviewLoaded] = useState(false);

  useEffect(() => {
    getReviewsById(movieId).then(data => setReviews(data.results));
    setIsReviewLoaded(true);
  }, [movieId]);

  console.log('reviews', reviews);
  console.log('movieId', movieId);

  if (reviews.length === 0 && isReviewLoaded) {
    return <Warn>We don`t have any reviews for this movie</Warn>;
  }

  return (
    <div>
      <List>
        {reviews.map(({ id, author, content, url, author_details }) => {
          const { rating, avatar_path, username } = author_details;
          let imageURL = '';

          if (avatar_path === null) {
            imageURL = sorryImage;
          } else if (avatar_path?.includes('http')) {
            imageURL = avatar_path.slice(1);
          } else {
            imageURL = `https://www.themoviedb.org/t/p/w150_and_h150_face/${avatar_path}`;
          }

          return (
            <li key={id}>
              <WrapInfoAuthor>
                <Img src={imageURL} alt={author} title={username} />
                <div>
                  <Text>
                    <Span>Author:</Span> {author}
                  </Text>
                  <Text>
                    <Span>Username:</Span> {username}
                  </Text>
                  <Text>
                    <Span>Rating:</Span> {rating || 0}
                  </Text>
                </div>
              </WrapInfoAuthor>
              <p>
                <Span>Content:</Span> {content}
              </p>
              <p>
                <Span>URL:</Span>{' '}
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </p>
              <Hr />
            </li>
          );
        })}
      </List>
    </div>
  );
};
