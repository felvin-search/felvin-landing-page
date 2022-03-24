import styled from 'styled-components'
import Logo from './Logo'
import Header from './header'
import HeroArea from './heroArea'
import dynamic from 'next/dynamic';
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});
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
`

const BackgroundSpline = styled(Spline)`
  z-index: -1;
  position: absolute;
`

const HeroText = styled.div`
  font-size: 3rem;
  color: #232323;
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
  -webkit-text-stroke: 1px #232323;
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
  color: #232323;
  line-height: 1.5rem;
`

const SearchForm = styled.form`
  position: relative;
`

const SearchBox = styled.input`
  padding: 1.5rem;
  padding-right: 55px;
  font-size: 1rem;
  border-radius: 50px;
  width: clamp(45vw, 350px, 90vw);
  margin: 2.5rem 0;
  @media (max-width: 450px) {
    padding: 1rem;
    padding-right: 55px;
  }
`

const SearchButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 3.6rem;
  opacity: 0.3;
  transition: opacity 200ms ease-in-out;
  @media (max-width: 450px) {
    top: 3.1rem;
    right: 0.8rem;
  }
  &:hover {
    opacity: 0.6;
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
                  <BackgroundSpline scene="https://prod.spline.design/NalNaI8izLx7QDUW/scene.spline"/>
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
            </HomeStyle>);
}
