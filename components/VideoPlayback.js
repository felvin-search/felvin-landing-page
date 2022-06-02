import styled from "styled-components";
import ReactPlayer from "react-player";

const VideoBg = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background: rgba(255, 255, 255, 0.1);
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
const ReactPlayerStyle = styled(ReactPlayer)`
  height: 100%;
  width: 100%;
  z-index: 3;
  position: relative;
  max-width: 1153px;
  aspect-ratio: 2306 / 1372;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 3rem 0;
  width: 95%;
  min-height: 25rem;
`;
const Item1 = styled.div`
  position: relative;
  /* background-color: red; */
  grid-column: ${(props) => (props.left ? "1/2" : "2/3")};
  grid-row-start: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  @media (max-width: 600px) {
    grid-column: span 2;
    grid-row-start: 1;
    padding: 1rem;
  }
`;
const Item2 = styled.div`
  position: relative;
  /* background-color: blue; */
  grid-column: ${(props) => (props.left ? "2/3" : "1/2")};
  grid-row-start: 1;
  @media (max-width: 600px) {
    grid-column: span 2;
    grid-row-start: 2;
  }
`;
const Heading = styled.h2`
  color: white;
`;
const BodyText = styled.p`
  color: white;
`;

const VideoPlayback = ({ headline, desc, left, video }) => {
  return (
    <Container>
      <Item1 left={left}>
        <Heading>{headline}</Heading>
        <BodyText>{desc}</BodyText>
      </Item1>
      <Item2 left={left}>
        <VideoBg />
        <ReactPlayerStyle
          loop={true}
          muted={true}
          playing={true}
          url={video}
          width="100%"
          height="100%"
        />
      </Item2>
    </Container>
  );
};

export default VideoPlayback;
