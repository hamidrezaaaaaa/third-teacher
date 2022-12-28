import styled from "styled-components";
import SideBar from "../sidebar";
import data from "../../data/about.json";

const Team = () => {
  const sideBarData = data.about[0].sideBar;
  const members = data.team.map((item, i) => {
    return (
      <Member key={i}>
        <div className="image">
          <img src={item.img} alt={item.name} />
        </div>
        <h3>{item.name}</h3>
        <p className="post">{item.post}</p>
      </Member>
    );
  });

  return (
    <Container>
      <Content>
        <h1>معرفی اعضا</h1>
        <Gallery>{members}</Gallery>
      </Content>
      <SideBar width="20%" content={sideBarData} />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding-left: 1.736vw;
`;

const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1.736vw;
  padding: 6.25vw 6.25vw 4.861vw 0;
  h1 {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.textColor[1]};
    font-size: 1.736vw;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    width: 20%;
    gap: 10px;
    &:after {
      content: "";
      display: inline-flex;
      width: 100%;
      height: 3px;
      background: ${(props) => props.theme.background[1]};
    }
  }
`;

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  .image {
    width: 12.5vw;
    height: 12.5vw;
    border: 3px solid #ffcf87;
    margin-bottom: 1.042vw;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  h3 {
    margin: 0;
    color: ${(props) => props.theme.textColor[1]};
    font-size: 1.389vw;
    font-weight: 500;
  }
  .post {
    margin: 0;
    color: ${(props) => props.theme.textColor[1]};
    font-size: 1.389vw;
    font-weight: 200;
  }
`;

export default Team;
