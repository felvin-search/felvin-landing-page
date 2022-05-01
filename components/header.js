import styled from "styled-components";
import Logo from "./Logo";
import Icons from "./Icons";

const HeaderStyle = styled.div`
  /* height: 140px; */
  display: flex;
  flex-direction: row;
`;
const LinkExternal = styled.a`
  text-decoration: none;
 
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
  align-items: center;
  margin-right: 1rem;
  
`;
// ================= Comp 1 =====================

const LogoIcon = styled.svg`
  margin: 2rem 0.5rem;
  height: 30px;
  width: 30px;
`;

const LogoText = styled.svg`
  height: 27px;
  width: 87px;
  /* @media (max-width: 400px) {
        display: none;
    } */
`;

const Comp1 = () => {
  return (
    <CompStyle>
      <LogoIcon as={Logo.Icon} />
      <LogoText as={Logo.Text} />
    </CompStyle>
  );
};

// ================= Comp 2 ======================

const Comp2 = () => {
  return (
    <CompStyle>
     
      <Icon as={Icons.Discord} />
      <HeaderText>Discord</HeaderText>
      
    </CompStyle>
  );
};

// ================= Comp 3 ======================

const Comp3 = () => {
  return (
    <CompStyle>
      <Icon as={Icons.GitHub} />
      <HeaderText>Fork</HeaderText>
    </CompStyle>
  );
};

// ================= Comp 4 ======================
const BetaButtonStyle = styled.div`
  background: #232323;
  border-radius: 50px;
  margin: 10px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  white-space: nowrap;
  color: #faf9f9;
  text-transform: uppercase;
  @media (max-width: 400px) {
    font-size: 0.5rem;
    padding: 0.5rem;
  }
`;
const Comp4 = () => {
  return <BetaButtonStyle>Try Beta</BetaButtonStyle>;
};
export { Comp4 };

// ================= Main Header =================
const LeftSection = styled.div`
  margin-right: auto;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <LeftSection>
        <Comp1 />
      </LeftSection>
      <RightSection>
        
          <Comp2 />
       
        {/* <LinkExternal href="https://github.com/felvin-search">
          <Comp3 />
        </LinkExternal> */}
        {/* <LinkExternal href="https://felvin.com/">
        <Comp4 />
        </LinkExternal> */}
      </RightSection>
    </HeaderStyle>
  );
}
