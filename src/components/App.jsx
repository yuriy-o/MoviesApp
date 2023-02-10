import { Header, HeaderLink, Section } from './App.styled';

export const App = () => {
  return (
    <>
      <Header>
        <HeaderLink href="#">Home</HeaderLink>
        <HeaderLink href="#">Movies</HeaderLink>
      </Header>
      <main>
        <Section>
          <h1>Trending today</h1>
        </Section>
      </main>
    </>
  );
};
