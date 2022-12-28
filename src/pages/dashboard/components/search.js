import styled from "styled-components";
import serachIcon from "../../../assets/icon/search.png";

const Search = () => {
  return (
    <Container>
      <SearchBox>
        <div className="icon"></div>
      </SearchBox>
    </Container>
  );
};

const Container = styled.div`
  background: ${(props) => props.theme.background[1]};
  padding:3vh 2vw;
  height: 70%;
  @media (max-width: 800px){
    margin-top:2vh;
      height:100%;
    }
`;

const SearchBox = styled.div`
  width: 90%;
  margin: auto;
  background: #ffffff;
  padding: 2vw;
  direction: ltr;
  .icon {
    width: 4.167vw;
    height: 4.167vw;
    background-image: url(${serachIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export default Search;
