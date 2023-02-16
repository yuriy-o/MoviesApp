import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1em;
`;
export const Item = styled.li`
  /* display: block; */
  /* margin-right: 30px; */
  /* margin-bottom: 30px; */
  background-color: red;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 7px 7px;
`;
export const Img = styled.img`
  width: 200px;
  height: 300px;
`;
export const Div = styled.div`
  margin: 10px;
`;
export const Span = styled.span`
  font-weight: 700;
`;
