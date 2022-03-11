import styled from 'styled-components'
import Image from 'next/image'
const HomeStyle = styled.div`
  font-size: 50px;
  min-height: 100vh;
  /* background-color: yellow; */
  background: radial-gradient(136.27% 42.1% at 100%, #00E771 0%, #FFD542 28.13%, #F1B1CD 64.06%, #FF002E 100%);
  /* background-image: url("bg_blob.png"); */
  display:  flex;
  flex-direction: column ;
`

const Header = styled.div`
    height: 140px;
    background-color: blue;
`

const HeroStyle = styled.div`
    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-content: center ;
    flex: 1 0 auto;
    z-index: 2;
`

const HeroText = styled.div`

`
// TODO: Make the image come out fine
export default function Home() {
    return ( <HomeStyle>
                <Header>Yolo</Header>
                <HeroStyle>
                <div> div 1</div>
                <div> div 2</div>
                <div> div 3</div>
                </HeroStyle>
                <Image src="/bg_blob.png" height="900px" width="1441px" layout="intrinsic"/>

            </HomeStyle>);
}
