import styled from "styled-components";
import Logo from "./Logo";
import Header from "./header";
import HeroArea from "./heroArea";



const LinkExternal = styled.a`
  text-decoration: none;
`;

const HomeStyle = styled.div`
  /* font-size: 50px; */
  min-height: 100vh;
  /* background-color: yellow; */
  background: radial-gradient(
    200.18% 300.33% at 0% -48.51%,
    #2cd687 0%,
    #ffe178 30.73%,
    #ffbfdb 58.85%,
    #fc4b6b 100%
  );
  /* background-image: url("bg_blob.png"); */
  display: flex;
  flex-direction: column;
`;

const HeroStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  z-index: 10;
  overflow: hidden;
  /* & canvas {
    height: 600px;
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
`;

const BackgroundSpline1 = styled.iframe`
  pointer-events: none;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  & canvas {
    position: absolute;
    left: 50%;
  }
`;
const IframeContainer = styled.div`
  position: absolute;
  overflow: hidden;
  width: 70%;
  padding-top: 75%;
`;

const HeroText = styled.div`
  font-size: 3rem;
  color: #232323;
  @media (max-width: 650px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
  @media (max-width: 350px) {
    font-size: 1.2rem;
  }
`;

const HeroTextSolid = styled.h1`
  -webkit-text-stroke: 1px #232323;
  margin: 0rem;
`;

const HeroTextTransparent = styled(HeroTextSolid)`
  color: transparent;
  margin-bottom: -1.5rem;
  @media (max-width: 450px) {
    margin-bottom: -0.5rem;
  }
`;

const Tagline = styled.h2`
  font-size: 1rem;
  max-width: 300px;
  margin: 0;
  color: #232323;
  line-height: 1.5rem;
`;

const SearchBox = styled.input`
  padding: 1.5rem;
  padding-right: 55px;
  font-size: 1rem;
  border-radius: 50px;
  width: clamp(45vw, 350px, 90vw);
  margin: 2.5rem 0;
  @media (max-width: 450px) {
    padding: 1rem;
    padding-right: 55px;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 3.6rem;
  opacity: 0.3;
  transition: opacity 200ms ease-in-out;
  @media (max-width: 450px) {
    top: 3.1rem;
    right: 0.8rem;
  }
  &:hover {
    opacity: 0.6;
  }
`;

const SearchButtonIcon = styled.svg`
  height: 36px;
  width: 36px;
`;
const Iframe = styled.iframe`
  height: 600px;
  width: 600px;
  position: absolute;
  z-index: -1;
  border: none;
  pointer-events: none;
  @media (max-width: 600px) {
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const ImageContaner = styled.div`
  position: absolute;
  width: 10rem;

  z-index: -1;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const SearchForm = styled.form`
  margin-top: 1rem;
  position: relative;
  display: flex;
  border: black solid 2px;
  border-radius: 3rem;
  overflow: hidden;
  background: white;
`;

const Input = styled.input`
  border: none;
  padding-left: 2rem;
  font-size: larger;
  background: transparent;
  color: black;
  width: 25rem;
  & :focus{
    outline: none;
  }
 
`;
const Wishlist = styled.div`
 padding: 1em;
 font-size: larger;
 border-radius: 2rem;
 cursor: pointer;
 background-color: black;
 color: white;
`;

// TODO: Make the image come out fine
export default function Home() {
  return (
    <HomeStyle>
      <Header />
      <HeroStyle>
        <Iframe
          height="100%"
          width="100%"
          src="https://my.spline.design/scene-4c1f8b8ea6669d4e8fa0c0f82115a3e9/"
        />
        <HeroText>
          <HeroTextTransparent>Search Engine</HeroTextTransparent>
          <HeroTextTransparent>For</HeroTextTransparent>
          <HeroTextSolid>Engineers</HeroTextSolid>
        </HeroText>

        <SearchForm>
          <Input placeholder="Enter Your Email" />
          <Wishlist>Get early access</Wishlist>
        </SearchForm>
      </HeroStyle>
    </HomeStyle>
  );
}
