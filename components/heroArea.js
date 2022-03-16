import styled from 'styled-components'
import Breakpoints from '../shared/Breakpoints'
const HeroStyle = styled.div`
    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-content: center ;
    flex: 1 0 auto;
    z-index: 2;
`

const MainTextStyle = styled.div`

`
// TODO: Make sure you specify the font as web fonts or something so that
// others don't have to locally install the fonts
// TODO: 
const MainTextLine1 = styled.div`
font-family: 'Fredoka';
font-style: normal;
font-weight: 700;
font-size: 120px;
line-height: 100px;

/* or 83% */
text-align: center;
letter-spacing: -0.02em;
/* text-shadow: 0px 0px 5px black; */
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: black;
color: transparent;

/* Grays/Gray 600 */
/* border: 1px solid #232323; */
box-sizing: border-box;`

const MainTextLine2 = styled.div`
font-family: 'Fredoka';
font-style: normal;
font-weight: 700;
font-size: 120px;
line-height: 100px;

text-align: center;
letter-spacing: -0.02em;
margin: 20px;

box-sizing: border-box;`

const MainText = () => {
    return (<MainTextStyle>
        <MainTextLine1>search less,</MainTextLine1>
        <MainTextLine2>do more</MainTextLine2>
    </MainTextStyle>)
}

const SubTextStyle = styled.div`
font-family: 'Fredoka';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
margin: 5px;

/* or 150% */
text-align: center;
`

const SearchBox = () => {};

export default function HeroArea () {
    return (                
        <HeroStyle>
        <MainText />
        <SubTextStyle> Build customisable and </SubTextStyle>
        <SubTextStyle> community-driven search experiences</SubTextStyle>
        </HeroStyle>)
}
