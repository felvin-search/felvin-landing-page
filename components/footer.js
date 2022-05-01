import styled from "styled-components";
import Logo from "./Logo";

const FooterStyles = styled.footer`
  position: relative;
  min-height: 50vh;
  padding-top: 4rem;
  border-radius: 4rem 4rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: radial-gradient(
      ellipse closest-corner at 50% 45%,
      #2cd687 0%,
      #ffe178 33%,
      #ffbfdb 70%,
      #fc4b6b 100%
    )
    fixed;
  overflow: hidden;
  @media (max-width: 450px) {
    padding-top: 0;
  }
`;
const LinkExternal = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #000;
`;

const MainText = styled.p`
  font-size: 2.2rem;
  text-align: center;
`;

const PillArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const Pill = styled.div`
  background-color: white;
  border-radius: 50px;
  padding: 0.9rem 1.6rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  text-align: center;
`;

const FancyText = styled.p`
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: -4rem;
  font-size: 10rem;

  &::before {
    content: "felvin";
    background: radial-gradient(
      #ffa240,
      #ffffff,
      #ff9d9b,
      #ffffff,
      #ffbfd8,
      #ff709e,
      #ffffff,
      #ff527a
    );
    color: transparent;
    -webkit-text-stroke: 2px transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }

  &::after {
    content: "felvin";
    left: 0;
    top: 0;
    position: absolute;
    background: radial-gradient(
        ellipse closest-corner at 50% 45%,
        #2cd687 0%,
        #ffe178 33%,
        #ffbfdb 70%,
        #fc4b6b 100%
      )
      fixed;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

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
`;

const LogoIcon = styled.svg`
  height: 30px;
  width: 30px;
`;

const LogoText = styled.svg`
  height: 27px;
  width: 87px;
`;
const CloseRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const SlightlySpacedRow = styled(CloseRow)`
  gap: 0.8rem;
  @media (max-width: 650px) {
    gap: 0.4rem;
  }
`;

const LogoComp = () => {
  return (
    <CloseRow>
      <LogoIcon as={Logo.Icon} />
      <LogoText as={Logo.Text} />
    </CloseRow>
  );
};

const SocialMediaIcons = () => {
  return (
    <SlightlySpacedRow>
      <LinkExternal href="https://discord.gg/FNMUavyu">
        <img src="/discord.svg" />
      </LinkExternal>
      <LinkExternal href="https://twitter.com/FelvinSearch?s=20&t=s88TcfTfEDP8czq8RdUjPQ">
        <img src="/twitter.svg" />
      </LinkExternal>
      <LinkExternal href="https://github.com/felvin-search">
        <img src="/github.svg" />
      </LinkExternal>
    </SlightlySpacedRow>
  );
};

const AnchorLinks = () => {
  return (
    <SlightlySpacedRow>
      <LinkExternal href="https://www.linkedin.com/company/felvin-search">
        ABOUT
      </LinkExternal>
      <LinkExternal href="https://www.linkedin.com/company/felvin-search">
        TEAM
      </LinkExternal>
      <LinkExternal href="mailto:team@felvin.com">CONTACT</LinkExternal>
    </SlightlySpacedRow>
  );
};

export default function Footer() {
  return (
    <FooterStyles>
      <MainText>start building with felvin</MainText>
      <PillArea>
        <LinkExternal href="https://chrome.google.com/webstore/detail/felvin-google-search-enha/dmhgpjahhfannndnaghleelgnpieiljl?hl=en">
          <Pill>Try Beta</Pill>
        </LinkExternal>
        {/* <LinkExternal href="https://github.com/felvin-search">
          <Pill>Fork on Git</Pill>
        </LinkExternal> */}
        {/* <LinkExternal href="https://discord.gg/FNMUavyu">
          <Pill>Submit Ideas</Pill>
        </LinkExternal> */}
      </PillArea>
      <FancyText />
      <LinkArea>
        <LogoComp />
        <AnchorLinks />
        <SocialMediaIcons />
      </LinkArea>
    </FooterStyles>
  );
}
