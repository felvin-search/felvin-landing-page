import styled from "styled-components";
import ReactPlayer from "react-player";
import { useAnimation, motion } from "framer-motion";

import { useRef } from "react";
import useIntersection from "../helpers/observer";
import { useEffect } from "react";

const Variants = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

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

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  margin: 3rem 0;
  width: 95%;
  min-height: 25rem;
  overflow: hidden;
  @media (max-width:450px){
    width: 100%;
  }
`;
const Item1 = styled.div`
  position: relative;
  height: 100%;
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
  height: 100%;
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
  const control = useAnimation();
  const ref = useRef();
  const inViewport = useIntersection(ref, "0px"); //
  useEffect(() => {
    if (inViewport) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inViewport]);

  //   const [ref, inView] = useInView();

  return (
    <Container ref={ref} variants={Variants} initial="hidden" animate={control}>
      <Item1 left={left}>
        <Heading>{headline}</Heading>
        <BodyText>{desc}</BodyText>
      </Item1>
      <Item2 left={left}>
        <VideoBg />
        
        <ReactPlayer
          loop={true}
          muted={true}
          playing={true}
          url={video}
          width="100%"
          height="100%"
          style={{
             position: 'relative',
             zIndex:5
          }}
        />
      </Item2>
    </Container>
  );
};

export default VideoPlayback;
