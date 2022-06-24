import styled from "styled-components";
import Header from "./header";
import WishlistBar from "./Wishlist";
import ReactPlayer from "react-player";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import DoneIcon from "@mui/icons-material/Done";

const HomeStyle = styled.div`
  min-height: 100vh;
  background: radial-gradient(
    200.18% 300.33% at 0% -48.51%,
    #2cd687 0%,
    #ffe178 30.73%,
    #ffbfdb 58.85%,
    #fc4b6b 100%
  );
`;

const HeroStyle = styled.div`
  z-index: 10;
  overflow: hidden;
  display: flex;
  height: 80vh;
  // margin-top: 5rem;
  // border: ${(props) => (props.body ? `1px solid #fff` : `1px solid #000`)};
  /* @media (max-width: 650px) {
    margin-top: 3rem;
  }
  @media (max-width: 450px) {
    margin-top: 2rem;
  }
  @media (max-width: 350px) {
    margin-top: 0.5rem;
  } */
  justify-content: center;
  align-items: center;
`;

const HeroContainer = styled.div``;
const HeroText = styled.div`
  font-size: 3rem;
  color: #232323;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

const HeroTextSolid = styled.h2`
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

const ReactPlayerStyle = styled(ReactPlayer)`
  height: 100%;
  width: 100%;
  z-index: 3;
  position: relative;
  max-width: 1153px;
  aspect-ratio: 2306 / 1372;
`;
const Tagline = styled.h6`
  font-size: 1rem;
  width: 100%;
  margin: 0;
  color: #232323;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  @media (max-width: 450px) {
    font-size: 0.85rem;
  }
`;
const VideoBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(255, 255, 255, 0.25);
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
// TODO: Make the image come out fine
export default function Home() {
  return (
    <HomeStyle>
      <Header />
      <HeroStyle body>
        <Grid sx={{ width: "90%" }} container>
          <Grid
            component={motion.div}
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.05 },
            }}
            item
            xs={12}
            sm={6}
          >
            <HeroText>
              <HeroTextTransparent>The</HeroTextTransparent>
              <HeroTextTransparent>Ultimate</HeroTextTransparent>
              <HeroTextSolid>Search Extension</HeroTextSolid>

              <Tagline>
                <DoneIcon />
                Finds exactly what you are looking for
              </Tagline>

              <Tagline>
                <DoneIcon />
                Serves content right on the search page
              </Tagline>

              <Tagline>
                <DoneIcon />
                No unnecessary links
              </Tagline>
              <Tagline>
                <DoneIcon />
                Great listeners - Request what you would like us to build
              </Tagline>
            </HeroText>
            <WishlistBar />
          </Grid>
          <Grid
            item
            component={motion.div}
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1.05 } }}
            xs={12}
            sm={6}
            sx={{ position: "relative", mt: 2 }}
          >
            <VideoBg />
            <ReactPlayerStyle
              loop={true}
              muted={true}
              playing={true}
              url="/hero_video.mp4"
              width="100%"
              height="100%"
            />
          </Grid>
        </Grid>
      </HeroStyle>
    </HomeStyle>
  );
}
