import styled from 'styled-components'
import Logo from './Logo'
import Header from './header'
import HeroArea from './heroArea'
const HomeStyle = styled.div`
  /* font-size: 50px; */
  min-height: 100vh;
  /* background-color: yellow; */
  background: radial-gradient(200.18% 300.33% at 0% -48.51%, #2CD687 0%, #FFE178 30.73%, #FFBFDB 58.85%, #FC4B6B 100%);
  /* background-image: url("bg_blob.png"); */
  display:  flex;
  flex-direction: column ;
`

const HeroStyle = styled.div`
  text-align: center;
  display: flex ;
  flex-direction: column;
  align-items: center;
  justify-content: center ;
  flex: 1 0 auto;
  z-index: 2;
  font-family: monospace;
`

const HeroText = styled.div`
  font-size: 3rem;
  @media (max-width: 650px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
  @media (max-width: 350px) {
    font-size: 1.2rem;
  }
`

const HeroTextSolid = styled.h1`
  -webkit-text-stroke: 1px black;
  margin: 0rem;
  `

const HeroTextTransparent = styled(HeroTextSolid)`
  color: transparent;
  margin-bottom: -1.5rem;
  @media (max-width: 450px) {
    margin-bottom: -0.5rem;
  }
`

const Tagline = styled.h2`
  font-size: 1rem;
  max-width: 300px;
  margin: 0;
`

const SearchForm = styled.form`
  position: relative;
`

const SearchBox = styled.input`
  padding: 1.5rem;
  padding-right: 48px;
  font-size: 1rem;
  border-radius: 50px;
  width: clamp(45vw, 350px, 90vw);
  margin: 2.5rem;
  @media (max-width: 450px) {
    padding: 1rem;
    padding-right: 48px;
  }
`

const SearchButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  cursor: pointer;
  position: absolute;
  right: 3.2rem;
  top: 3.7rem;
  opacity: 0.3;
  transition: opacity 200ms ease-in-out;
  @media (max-width: 450px) {
    top: 3.1rem;
    right: 3rem
  }
  &:hover {
    opacity: 0.5;
  }
`

const SearchButtonIcon = styled.svg`
  height: 36px;
  width: 36px;
`

// TODO: Make the image come out fine
export default function Home() {
    return ( <HomeStyle>
                <Header />
                <HeroStyle>
                  <HeroText>
                    <HeroTextTransparent>search less,</HeroTextTransparent>
                    <HeroTextSolid>do more</HeroTextSolid>
                  </HeroText>
                  <Tagline>Build customisable and community-driven search experiences</Tagline>
                  <SearchForm>
                    <SearchBox placeholder='SEEK AND YOU SHALL FIND...'/>
                    <SearchButton type='submit' >
                      <SearchButtonIcon as={Logo.Icon} />
                    </SearchButton>                    
                  </SearchForm>
                </HeroStyle>
                {/* <Image src="/bg_blob.png" height="900px" width="1441px" layout="responsive"/> */}
            </HomeStyle>);
}
