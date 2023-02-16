import { Outlet } from 'react-router-dom';
import { MdHome, MdOutlineLocalMovies } from 'react-icons/md';

import { HeaderLink, WrapHeader } from './Header.styled';

export const SharedLayout = () => {
  return (
    <>
      <WrapHeader>
        <HeaderLink href="/goit-react-hw-05-movies/">
          <MdHome />
          Home
        </HeaderLink>
        <HeaderLink href="/goit-react-hw-05-movies/movies">
          <MdOutlineLocalMovies />
          Movies
        </HeaderLink>
      </WrapHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
};
