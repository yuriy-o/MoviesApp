import { Outlet } from 'react-router-dom';
import { MdHome, MdOutlineLocalMovies } from 'react-icons/md';

import { HeaderLink, WrapHeader } from './Header.styled';

export const SharedLayout = () => {
  return (
    <>
      <WrapHeader>
        <HeaderLink href="/">
          <MdHome />
          Home
        </HeaderLink>
        <HeaderLink href="/movies">
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
