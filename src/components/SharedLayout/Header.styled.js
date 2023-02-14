import styled from '@emotion/styled';

export const WrapHeader = styled.header`
  padding: 20px 40px;
  margin-bottom: 50px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const HeaderLink = styled.a`
  position: relative;
  text-decoration: none;
  color: black;
  font-size: 30px;
  padding: 10px;
  /* font-size: 2rem; */

  :not(:last-child) {
    margin-right: 10px;
  }

  ::before {
    content: '';
    position: absolute;
    height: 3px;
    left: 0px;
    bottom: 0px;
    transition: 0.6s;
    width: 0%;
    background: linear-gradient(to right, #ff0000, #fff200, #1e9600);
  }

  &:hover::before,
  &:focus::before {
    width: 100%;
  }
`;
