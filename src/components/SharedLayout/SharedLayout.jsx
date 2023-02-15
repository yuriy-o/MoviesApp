import { Outlet } from 'react-router-dom';
import { HeaderLink, WrapHeader } from './Header.styled';

export const SharedLayout = () => {
  return (
    <>
      <WrapHeader>
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/movies">Movies</HeaderLink>
      </WrapHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
};
