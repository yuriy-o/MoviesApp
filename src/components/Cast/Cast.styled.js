import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1em;

  /* margin-top: 90px; */
`;
export const Item = styled.li`
  /* display: block;
  margin-right: 30px;
  margin-bottom: 30px; */

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.32), 0px 1px 10px rgba(0, 0, 0, 0.5),
    0px 5px 10px rgba(0, 0, 0, 0.5);
`;
export const Img = styled.img`
  width: 200px;
  height: 300px;
`;
export const Span = styled.span`
  font-weight: 700;
`;
