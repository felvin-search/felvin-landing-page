import styled from 'styled-components'
import Breakpoints from '../shared/Breakpoints';

const FeaturesPageStyles = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: radial-gradient(at top left, lightpink, lightyellow);
`

const FeaturesHeading = styled.span`
  align-self: flex-start;
  background: linear-gradient(to right, lightgreen, yellow, hotpink, deeppink, crimson);
  font-size: 10rem;
  margin: 2rem;
  -webkit-text-stroke: 4px transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: lightpink;
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
  @media (max-width: 650px) {
    flex-direction: column;
    /* margin: 2rem 0rem 1rem 0rem; */
  }
`;

const FeatureBox = styled.div`
    border-radius: 5rem;
    width: 25vw;
    height: 50vh;
    margin: 15px;
    background: linear-gradient(to bottom right, gold, yellow, lightpink, pink);
    @media (max-width: 900px) {
      width: 30vw;
    }
    @media (max-width: 650px) {
      width: 80vw;
    }
`;

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
          <FeatureBox>
            <EmptyHalf />
            <FeatureDescription>
              <h2>Community Driven</h2>
              <p>Open source repo here and the community knows the best and can drive the best result.</p>
            </FeatureDescription>
          </FeatureBox>
          <FeatureBox>
            <EmptyHalf />
            <FeatureDescription>
              <h2>Truly Extensible</h2>
              <p>Wished you could improve your search experience? Now we give this power to you.</p>
            </FeatureDescription>
          </FeatureBox>
        </FeaturesAreaStyles>
    </FeaturesPageStyles>);
}
