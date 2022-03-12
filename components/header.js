import styled from 'styled-components'
import Logo from './Logo'
const HeaderStyle = styled.div`
    height: 140px;
    display: flex;
    flex-direction: row;
    align-items: center;

`

const Comp1Style = styled.div`
    align-items: center ;
    display: flex;
    flex-direction: row;
`

const LogoStyled = styled.svg`
    margin: 2rem 1rem;
`

const Comp1 = () => {
    return (
        <Comp1Style>
            <LogoStyled as={Logo.Icon} />
            <LogoStyled as={Logo.Text} />
        </Comp1Style>
    )
}

export default function Header() {
 return (
 <HeaderStyle>
 <Comp1 />
 Yolo 2
 </HeaderStyle>)
};
