import styled from 'styled-components'
import Logo from './Logo'
import Icons from "./Icons";

const HeaderStyle = styled.div`
    /* height: 140px; */
    display: flex;
    flex-direction: row;
`
const Link = styled.a`
  text-decoration: none;
  color: #000;
`;

const Icon = styled.svg`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: 2rem 1rem;
  margin-right: 0.1rem;
`;

const HeaderText = styled.div`
/* font-style: normal; */
/* font-weight: 700; */
font-size: 20px;
line-height: 30px;
color: #232323;

/* identical to box height, or 167% */
text-align: right;
text-transform: uppercase;
@media (max-width: 650px) {
    display: none;
}
`;

const CompStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center ;
`
// ================= Comp 1 =====================


const LogoIcon = styled.svg`
    margin: 2rem 0.5rem;
    height: 30px;
    width: 30px;
`

const LogoText = styled.svg`
    height: 27px;
    width: 87px;
    /* @media (max-width: 400px) {
        display: none;
    } */
`

const Comp1 = () => {
    return (
        <CompStyle>
            <LogoIcon as={Logo.Icon} />
            <LogoText as={Logo.Text} />
        </CompStyle>
    )
}

// ================= Comp 2 ======================

const Comp2 = () => {
    return (
        <CompStyle>
            <Icon as={Icons.Discord} />
            <HeaderText>Discord</HeaderText>
        </CompStyle>
    )
}

// ================= Comp 3 ======================

const Comp3 = () => {
    return (
        <CompStyle>
            <Icon as={Icons.GitHub} />
            <HeaderText>Fork</HeaderText>
        </CompStyle>
    )
}
// ================= Comp 4 ======================
const BetaButtonStyle = styled.div`
background: #232323;
border-radius: 50px;
/* align-items: center;
justify-content:center ; */
margin: 10px;
padding: 1rem;
font-size: 1rem;
white-space: nowrap;
/* font-weight: 700;
font-size: 36px;
line-height: 30px; */
color: #FAF9F9;
text-transform: uppercase;
    @media (max-width: 400px) {
        font-size: 0.5rem;
        padding: 0.5rem;
    }
`
const Comp4 = () => {
    return (
       <BetaButtonStyle>Try Beta</BetaButtonStyle> 
    )
}

// ================= Main Header =================
const LeftSection = styled.div`
    margin-right: auto;
`

const RightSection = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

export default function Header() {
 return (
 <HeaderStyle>
    <LeftSection>
        <Comp1 />
    </LeftSection>
    <RightSection>
        <Comp2 />
        <Comp3 />
        <Comp4 />
    </RightSection>
 </HeaderStyle>)
};
