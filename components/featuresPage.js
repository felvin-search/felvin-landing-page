import styled from 'styled-components'
import dynamic from 'next/dynamic';
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

const FeaturesPageStyles = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: radial-gradient(ellipse at top left, hsla(326, 100%, 95%, 1) 0%, hsla(326, 100%, 95%, 1) 50%, hsla(60, 100%, 95%, 1) 100%);
`

const FeaturesHeading = styled.span`
  align-self: flex-start;
  background: linear-gradient(90deg, #29EF8A -21.97%, #FFD542 18.69%, #F1B1CD 55.53%, #FA3B5E 100%);
  font-size: 10rem;
  margin: 2rem;
  -webkit-text-stroke: 4px transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: hsla(326, 100%, 95%, 1);
  @media (max-width: 650px) {
  font-size: 6rem;
  margin: 1.5rem;
  }
  @media (max-width: 450px) {
  font-size: 4.5rem;
  margin: 1rem;
  }
`

const FeaturesAreaStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 5vw 0;
  width: 100%;
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FeatureBox = styled.div`
    border-radius: 50px;
    width: clamp(200px, 28vw, 400px);
    height: 50vh;
    background-image: radial-gradient(farthest-corner at 75px 100px, hsla(326, 100%, 80%, 1) 0%, hsla(326, 100%, 80%, 1) 20%, hsla(55, 100%, 80%, 1) 100%);
    @media (max-width: 900px) {
    width: clamp(200px, 30vw, 400px);
      height: 55vh;
    }
    @media (max-width: 650px) {
      width: clamp(200px, 400px, 80vw);
      height: 50vh;
    }
`;

const FeatureBox2 = styled(FeatureBox)`
    background-image: radial-gradient(farthest-corner at 75px 100px, hsla(55, 100%, 80%, 1) 0%, hsla(60, 100%, 80%, 1) 20%, hsla(326, 100%, 80%, 1) 100%);
`

const FeatureBox3 = styled(FeatureBox)`
    background-image: radial-gradient(circle at center, hsla(55, 100%, 80%, 1) 0%, hsla(326, 100%, 80%, 1) 100%);
`

const EmptyHalf = styled.div`
  position: relative;
  height: 50%;
`

const BackgroundSpline = styled(Spline)`
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;

  & canvas {
    height: 600px;
    width: 600px;
    position: absolute;
    top: 30%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
`

const FeatureDescription = styled.div`
  margin: 1rem;
`

const FeatureDescriptionBody = styled.p`
  margin: 0.5rem;
  font-family: "F37 Jan Regular";
`

const FeatureDescriptionHead = styled.h2`
  margin: 0.5rem 0.5rem 0;
`

export default function FeaturesPage() {
    return (
    <FeaturesPageStyles>
        <FeaturesHeading>features</FeaturesHeading>
        <FeaturesAreaStyles>
          <FeatureBox>
            <EmptyHalf>
              {/* <BackgroundSpline scene="/scene.spline"/> */}
            </EmptyHalf>
            <FeatureDescription>
              <FeatureDescriptionHead>Open Source</FeatureDescriptionHead>
              <FeatureDescriptionBody>
                All the instant apps you see on the website are open source. 
                Find the repository here:
                https://github.com/felvin-search/instant-apps
              </FeatureDescriptionBody>
            </FeatureDescription>
          </FeatureBox>
          <FeatureBox2>
            <EmptyHalf>
              {/* <BackgroundSpline scene="https://prod.spline.design/9eXZLEGhiWSxWmzL/scene.spline"/> */}
            </EmptyHalf>
            <FeatureDescription>
              <FeatureDescriptionHead>Community Driven</FeatureDescriptionHead>
              <FeatureDescriptionBody>
                Instant apps are created by the small but mighty Felvin community. Drive the best results with their help.
              </FeatureDescriptionBody>
            </FeatureDescription>
          </FeatureBox2>
          <FeatureBox3>
            <EmptyHalf>
              {/* <BackgroundSpline scene="https://prod.spline.design/uoEBJkJw3c12nE9d/scene.spline"/> */}
            </EmptyHalf>
            <FeatureDescription>
              <FeatureDescriptionHead>Customizable</FeatureDescriptionHead>
              <FeatureDescriptionBody>
                Create and modify instant apps according to your specific needs. Make search what you want it to be.
              </FeatureDescriptionBody>
            </FeatureDescription>
          </FeatureBox3>
        </FeaturesAreaStyles>
    </FeaturesPageStyles>);
}
