import styled from 'styled-components'
import Breakpoints from '../shared/Breakpoints';

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
  justify-content: center;
  align-items: center;
  gap: 5vw;
  padding: 5vw 0;
  @media (max-width: 900px) {
      gap: 2vw;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const FeatureBox = styled.div`
    border-radius: 5rem;
    width: 25vw;
    height: 50vh;
    background-image: radial-gradient(farthest-corner at 75px 100px, hsla(326, 100%, 80%, 1) 0%, hsla(326, 100%, 80%, 1) 20%, hsla(55, 100%, 80%, 1) 100%);
    @media (max-width: 900px) {
      width: 30vw;
    }
    @media (max-width: 650px) {
      width: clamp(200px, 400px, 80vw);
    }
`;

const FeatureBox2 = styled(FeatureBox)`
    background-image: radial-gradient(farthest-corner at 75px 100px, hsla(55, 100%, 80%, 1) 0%, hsla(60, 100%, 80%, 1) 20%, hsla(326, 100%, 80%, 1) 100%);
`

const FeatureBox3 = styled(FeatureBox)`
    background-image: radial-gradient(circle at center, hsla(55, 100%, 80%, 1) 0%, hsla(326, 100%, 80%, 1) 100%);
`

const EmptyHalf = styled.div`
  height: 50%;
`

const FeatureDescription = styled.div`
  margin: 1rem;
`

export default function FeaturesPage() {
    return (
    <FeaturesPageStyles>
        <FeaturesHeading>features</FeaturesHeading>
        <FeaturesAreaStyles>
          <FeatureBox>
            <EmptyHalf />
            <FeatureDescription>
              <h2>Open Source</h2>
              <p>Be it finding code, comparing cars or find your next favourite holiday destination, with Felvin you won’t have to go anywhere else.</p>
            </FeatureDescription>
          </FeatureBox>
          <FeatureBox2>
            <EmptyHalf />
            <FeatureDescription>
              <h2>Community Driven</h2>
              <p>Open source repo here and the community knows the best and can drive the best result.</p>
            </FeatureDescription>
          </FeatureBox2>
          <FeatureBox3>
            <EmptyHalf />
            <FeatureDescription>
              <h2>Truly Extensible</h2>
              <p>Wished you could improve your search experience? Now we give this power to you.</p>
            </FeatureDescription>
          </FeatureBox3>
        </FeaturesAreaStyles>
    </FeaturesPageStyles>);
}
