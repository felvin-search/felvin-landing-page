import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import WishlistBar from "./Wishlist";
import { Grid } from "@mui/material";
import VideoPlayback from "./VideoPlayback";
const UseCasesPageStyles = styled.div`
  background-color: #1a1a1a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  position: relative;
  overflow-x: hidden;
  &:before {
    content: "";
    position: absolute;
    width: 200px;
    height: 90vh;
    left: 65%;
    top: 15%;
    background: #ffd542;
    mix-blend-mode: normal;
    opacity: 0.3;
    filter: blur(50px);
    transform: rotate(28deg);
  }
  &:after {
    content: "";
    position: absolute;
    width: 200px;
    height: 90vh;
    left: 65%;
    top: 15%;
    background: pink;
    mix-blend-mode: normal;
    opacity: 0.25;
    filter: blur(50px);
    transform: rotate(42deg);
  }
  @media (max-width: 650px) {
    &:after,
    &:before {
      top: 20%;
    }
  }
  @media (max-width: 450px) {
    &:after,
    &:before {
      top: 25%;
    }
  }
`;
const LinkExternal = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -0.2rem;
  background: linear-gradient(
    90deg,
    #29ef8a -21.97%,
    #ffd542 18.69%,
    #f1b1cd 55.53%,
    #fa3b5e 100%
  );
  font-size: 4rem;
  margin: 1rem;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: center;
`;

const HeadingLine = styled.div``;

const HeadingLine1 = styled(HeadingLine)`
  margin-bottom: -0.5rem;
`;

const MainUseCase = styled.span`
  color: white;
  opacity: ${(props) => (props.highlighted ? "1" : "0.3")};
  font-size: 2rem;
`;

const CodeUseCaseExample = styled.div`
  background: rgba(0, 0, 0, 0.9);
  flex-grow: 1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  margin: 1rem;
  width: 90%;
  z-index: 1;
  font-family: "F37 Jan Regular";
`;

const FancyTextArea = styled.div`
  height: 40vh;
  position: relative;
`;

const FancyText = styled.div`
  position: absolute;
  transform: translateX(-50%);
  background: radial-gradient(#ffd542, #1a1a1a 70%);
  -webkit-text-stroke: 1px transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: #1a1a1a;
  font-size: 10rem;
  height: 10rem;
`;

const FancyText1 = styled(FancyText)`
  top: 40%;
`;

const FancyText2 = styled(FancyText)`
  top: 50%;
`;

const FancyText3 = styled(FancyText)`
  top: 60%;
`;

const Subheading = styled.h3`
  color: #d9d9d9;
  font-size: 2.5rem;
  margin: 1rem;
  text-align: center;
  text-transform: lowercase;
`;

const ExternalLinkArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin: 0.5rem;
`;

const UseCaseArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  margin-bottom: 3rem;
  gap: 0.8rem;
`;

const Pill = styled.div`
  border-radius: 50px;
  padding: 0.6rem 1.2rem;
  font-size: 0.8rem;
  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

const ExternalLinkPill = styled(Pill)`
  font-size: 0.7rem;
  text-transform: uppercase;
  border: 1px solid #fc4b6b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const MainUseCaseRow = styled(ExternalLinkArea)`
  gap: 3rem;
  flex-direction: column;
  align-items: center;
`;

const UseCaseRow = styled(ExternalLinkArea)`
  gap: 1rem;
  margin: 0;
`;

const UseCasePill = styled(Pill)`
  background-color: #e8e8e8;

  color: #232323;
`;

//TODO: TO Make responsive silder
export default function UseCasesPage() {
  return (
    <UseCasesPageStyles>
      <Heading>
        <HeadingLine1>See Felvin in Action</HeadingLine1>
        {/* <HeadingLine>magic together</HeadingLine> */}
      </Heading>
      <MainUseCaseRow>
        {/* <MainUseCase>Books</MainUseCase> */}
        <MainUseCase highlighted>Instant Apps</MainUseCase>
      </MainUseCaseRow>
      <CodeUseCaseExample>
        {/* Examples */}
        <VideoPlayback
          headline="🚀 Add Addrenaline To Your Search Engine"
          desc="72+ more handcrafted tools for your daily task and still counting more.Need any tools not present. Give the idea in our Discord community or can create it by yourself by forking on github.
"
          video="/usecase1.mp4"
        />
        <VideoPlayback
          left="true"
          headline="No Need to Change Your Fav Search Engine😄"
          desc="It is available as a browser extension so no need to download any additional software, works with your fav browser, no need to switch your environment."
          video="/demo.mp4"
        />
        <VideoPlayback
          headline="Get the exact library you want 🔥"
          video="/demo3.mp4"
          desc="Never waste time finding libraries again."
        />
      </CodeUseCaseExample>
      <FancyTextArea>
        <FancyText1>more</FancyText1>
        <FancyText2>more</FancyText2>
        <FancyText3>more</FancyText3>
      </FancyTextArea>
      <Subheading>See What People Say About Us!</Subheading>
    </UseCasesPageStyles>
  );
}
