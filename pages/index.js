import styled from "styled-components";
import Home from "../components/home";
import FeaturesPage from "../components/featuresPage";
import UseCasesPage from "../components/useCases";
import Footer from "../components/footer";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const HomeStyle = styled.div`
  font-size: 50px;
  min-height: 100vh;
  background-color: yellow;
`;

const Tab = styled.div`
  font-size: 50px;
  min-height: 100vh;
`;

export default function App() {
  return (
    <div>
      <Home />
      <UseCasesPage />
      <FeaturesPage />
      <Footer />
    </div>
  );
}
