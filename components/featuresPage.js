import styled from 'styled-components'
import Breakpoints from '../shared/Breakpoints';

const FeaturesPageStyles = styled.div`
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const FeaturesAreaStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${Breakpoints.medium}) {
    flex-direction: row;
    margin: 2rem 0rem 1rem 0rem;
  }
`;

const FeatureBox = styled.div`
    border-radius: 90px 90px 90px 90px;
    width: 426px;
    height: 520px;
    margin: 15px;
    background-color: white;
`;

export default function FeaturesPage() {
    return (
    <FeaturesPageStyles>
        <FeaturesAreaStyles>
        <FeatureBox />
        <FeatureBox />
        <FeatureBox />

        </FeaturesAreaStyles>
    </FeaturesPageStyles>);
}
