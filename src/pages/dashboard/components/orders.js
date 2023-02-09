import styled from "styled-components";

const Orders = () => {
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
  padding:3vh 2vw;
  @media (max-width: 800px){
    margin-top:2vh;
      height:100%;
    }
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  gap: 2vw;
  width: 90%;
  @media (max-width: 800px){
    width: 100%;
    }
`;

const Item =styled.div`
box-sizing:border-box;
width:100%;
background:#FFFFFF;
padding:1.5vw;
@media (max-width: 800px){
  width: 100%;
  font-size: 2.5vw;
  padding: 2.5vh 1.5vw;
}
`

const TurnOver =styled.p`
margin:0;
padding:0;
text-align:left;
color:${props=>props.theme.textColor[0]};
font-size:1vw;
font-weight:400;
margin-top:5vw;

@media (max-width: 800px){
  font-size: 2.5vw;
}

`

export default Orders;
