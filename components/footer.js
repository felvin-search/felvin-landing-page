import styled from 'styled-components';
import Logo from './Logo'

const FooterStyles = styled.footer`
    position: relative;
    min-height: 50vh;
    padding-top: 4rem;
    border-radius: 4rem 4rem 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: radial-gradient(ellipse closest-corner at 50% 45%, #2CD687 0%, #FFE178 33%, #FFBFDB 70%, #FC4B6B 100%) fixed;
    overflow: hidden;
    @media (max-width: 450px) {
        padding-top: 0;
    }
`

const MainText = styled.p`
    font-size: 2.2rem;
    text-align: center;
`

const PillArea = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    @media (max-width: 450px) {
        flex-direction: column;
    }
`

const Pill = styled.div`
    background-color: white;
    border-radius: 50px;
    padding: 0.9rem 1.6rem;
    font-size: 0.7rem;
    text-transform: uppercase;
    text-align: center;
`

const FancyText = styled.p`
    padding: 0;
    margin: 0;
    position: absolute;
    bottom: -4rem;
    font-size: 10rem;

    &::before {
        content: 'felvin';
        background: radial-gradient(#FFA240, #FFFFFF, #FF9D9B, #FFFFFF, #FFBFD8, #FF709E, #FFFFFF, #FF527A);
        color: transparent;
        -webkit-text-stroke: 2px transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
    
    &::after {     
        content: 'felvin';   
        left:0;
        top:0;
        position:absolute;
        background: radial-gradient(ellipse closest-corner at 50% 45%, #2CD687 0%, #FFE178 33%, #FFBFDB 70%, #FC4B6B 100%) fixed;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
`

const LinkArea = styled.div`
    width: 100%;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    z-index: 1;
    @media (max-width: 650px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    @media (max-width: 450px) {
        padding: 1rem;
    }
`

const LogoIcon = styled.svg`
    height: 30px;
    width: 30px;
`

const LogoText = styled.svg`
    height: 27px;
    width: 87px;
`
const CloseRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 450px) {
        flex-direction: column;
    }
`

const SlightlySpacedRow = styled(CloseRow)`
    gap: 0.8rem;
    @media (max-width: 650px) {
        gap: 0.4rem;
    }
`

const LogoComp = () => {
    return (
        <CloseRow>
            <LogoIcon as={Logo.Icon} />
            <LogoText as={Logo.Text} />
        </CloseRow>
    )
}

const SocialMediaIcons = () => {
    return (
        <SlightlySpacedRow>
            <img src="/discord.svg" />
            <img src="/twitter.svg" />
            <img src="/github.svg" />
        </SlightlySpacedRow>
    )
}

const AnchorLinks = () => {
    return (
        <SlightlySpacedRow>
            <a>ABOUT</a>
            <a>TEAM</a>
            <a>CONTACT</a>
        </SlightlySpacedRow>
    )
}

export default function Footer() {
    return (
        <FooterStyles>
            <MainText>start building with felvin</MainText>
            <PillArea>
                <Pill>Try Beta</Pill>
                <Pill>Fork on Git</Pill>
                <Pill>Submit Ideas</Pill>
            </PillArea>
            <FancyText />
            <LinkArea>
                <LogoComp/>
                <AnchorLinks/>
                <SocialMediaIcons/>
            </LinkArea>
        </FooterStyles>
    )
}