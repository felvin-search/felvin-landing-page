import styled from 'styled-components'
import Image from 'next/image'
import Header from './header'
import HeroArea from './heroArea'
const HomeStyle = styled.div`
  font-size: 50px;
  min-height: 100vh;
  /* background-color: yellow; */
  /* background: radial-gradient(136.27% 42.1% at 100%, #00E771 0%, #FFD542 28.13%, #F1B1CD 64.06%, #FF002E 100%); */
  background: radial-gradient(200.18% 300.33% at 0% -48.51%, #2CD687 0%, #FFE178 30.73%, #FFBFDB 58.85%, #FC4B6B 100%);
  /* background: linear-gradient(0.35turn, #2CD687 0%, #FFE178 30.73%, #FFBFDB 58.85%, #FC4B6B 100%); */
  /* background-image: url("bg_blob.png"); */
  display:  flex;
  flex-direction: column ;
`


// TODO: Make the image come out fine
export default function Home() {
    return ( <HomeStyle>
                <Header />
                {/* <Image src="/bg_blob.png" height="900px" width="1441px" layout="responsive"/> */}
                <HeroArea />
            </HomeStyle>);
}
