import styled from "styled-components";
import Header from "./header";
import WishlistBar from "./Wishlist";
import ReactPlayer from "react-player";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
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
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
`;

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

const ReactPlayerStyle = styled(ReactPlayer)`
  height: 100%;
  width: 100%;
  margin-top: 1rem;
`;

// TODO: Make the image come out fine
export default function Home() {
  return (
    <HomeStyle>
      <Header />
      <HeroStyle>
        <Grid sx={{ width: "90%" }} container>
          <Grid item xs={12} sm={6}>
            <HeroText>
              <HeroTextTransparent>The</HeroTextTransparent>
              <HeroTextTransparent>Ultimate</HeroTextTransparent>
              <HeroTextSolid>Dev Utility</HeroTextSolid>
            </HeroText>
            <WishlistBar />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ReactPlayerStyle
              loop={true}
              muted={true}
              playing={true}
              url="/demo.mp4"
              width="100%"
              height="100%"
            />
          </Grid>
        </Grid>
      </HeroStyle>
    </HomeStyle>
  );
}
