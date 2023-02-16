import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  display: block;
  width: 120px;
  /* height: 40px; */
  text-align: center;
  border: none;
  background: #3a7999;
  color: #f2f2f2;
  padding: 5px 10px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 500ms ease;

  margin-bottom: 15px;

  :hover {
    background: rgba(0, 0, 0, 0);
    color: #3a7999;
    box-shadow: inset 0 0 0 3px #3a7999;
    transform: scale(1.05);
  }
`;
export const Wrap = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const Img = styled.img`
  width: 345px;
  height: 515px;

  margin-right: 35px;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.32), 0px 1px 10px rgba(0, 0, 0, 0.5),
    0px 5px 10px rgba(0, 0, 0, 0.5);
`;
export const Div = styled.div`
  width: 700px;
`;
export const H1 = styled.h1`
  margin-bottom: 25px;
`;
export const Info = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
`;
export const Span = styled.span`
  font-weight: 700;
`;
export const LinkInfo = styled(Link)`
  font-size: 20px;
  font-weight: 500;
`;
