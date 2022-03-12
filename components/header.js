import styled from 'styled-components'
import Logo from './Logo'
import Icons from "./Icons";

const HeaderStyle = styled.div`
    height: 140px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
const Link = styled.a`
  text-decoration: none;
  color: #000;
`;

const Icon = styled.svg`
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin: 2rem 1rem;

`;

const HeaderText = styled.div`
font-family: 'Inconsolata';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 30px;
color: #232323;

/* identical to box height, or 167% */
text-align: right;
text-transform: uppercase;

`;
const CompStyle = styled.div`
    align-items: center ;
    display: flex;
    flex-direction: row;
`
// ================= Comp 1 =====================


const LogoStyled = styled.svg`
    margin: 2rem 1rem;
`
const Comp1 = () => {
    return (
        <CompStyle>
            <LogoStyled as={Logo.Icon} />
            <LogoStyled as={Logo.Text} />
        </CompStyle>
    )
}

// ================= Comp 2 ======================

const Comp2 = () => {
    return (
        <CompStyle>
            <Icon as={Icons.GitHub} />
            <HeaderText>Github</HeaderText>
        </CompStyle>
    )
}

// ================= Comp 3 ======================

const Comp3 = () => {
    return (
        <CompStyle>
            <Icon as={Icons.Discord} />
            <HeaderText>Discord</HeaderText>
        </CompStyle>
    )
}
// ================= Comp 4 ======================
const BetaButtonStyle = styled.div`
background: #232323;
border-radius: 50px;
align-items: center;
justify-content:center ;
margin: 10px;
padding: 20px 35px;
font-family: 'Inconsolata';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 30px;
color: #FAF9F9;
text-transform: uppercase;
`
const Comp4 = () => {
    return (
       <BetaButtonStyle>Try Beta</BetaButtonStyle> 
    )
}

// ================= Main Header =================
const LeftSection = styled.div`
float:left`
const RightSection = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
float:right`

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
