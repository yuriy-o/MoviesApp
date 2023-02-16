import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  /* max-width: 1140px; */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2em;

  margin-top: 90px;
`;

export const Item = styled.li`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 7px 7px;
`;

export const InfoWrap = styled.div`
  padding: 15px 10px;
`;

export const FilmName = styled.p`
  font-size: 18px;
  font-weight: 500;

  margin-bottom: 15px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Img = styled.img`
  width: 343px;
  height: 515px;
`;
