import styled from "styled-components";

const Library = () => {
  return (
    <Container>
      <Gallery>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </Gallery>
      <TurnOver>صفحه بعد</TurnOver>
    </Container>
  );
};

const Container = styled.div`
  background: ${(props) => props.theme.background[1]};
  padding: 2vw;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2vw;
  width: 90%;
`;

const Item =styled.div`
    width:100%;
    background:#FFFFFF;
    padding:1.5vw;
`

const TurnOver =styled.p`
margin:0;
padding:0;
text-align:left;
font-size:${props=>props.theme.textColor[0]};
font-size:1.5vw;
font-weight:400;
margin-top:5vw;
`

export default Library;
