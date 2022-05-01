import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const UseCasesPageStyles = styled.div`
  background-color: #1a1a1a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  position: relative;
  overflow-x: hidden;
  &:before {
    content: "";
    position: absolute;
    width: 200px;
    height: 90vh;
    left: 65%;
    top: 15%;
    background: #ffd542;
    mix-blend-mode: normal;
    opacity: 0.3;
    filter: blur(50px);
    transform: rotate(28deg);
  }
  &:after {
    content: "";
    position: absolute;
    width: 200px;
    height: 90vh;
    left: 65%;
    top: 15%;
    background: pink;
    mix-blend-mode: normal;
    opacity: 0.25;
    filter: blur(50px);
    transform: rotate(42deg);
  }
  @media (max-width: 650px) {
    &:after,
    &:before {
      top: 20%;
    }
  }
  @media (max-width: 450px) {
    &:after,
    &:before {
      top: 25%;
    }
  }
`;
const LinkExternal = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -0.2rem;
  background: linear-gradient(
    90deg,
    #29ef8a -21.97%,
    #ffd542 18.69%,
    #f1b1cd 55.53%,
    #fa3b5e 100%
  );
  font-size: 4rem;
  margin: 1rem;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: center;
`;

const HeadingLine = styled.div``;

const HeadingLine1 = styled(HeadingLine)`
  margin-bottom: -0.5rem;
`;

const MainUseCase = styled.span`
  color: white;
  opacity: ${(props) => (props.highlighted ? "1" : "0.3")};
  font-size: 2rem;
`;

const CodeUseCaseExample = styled.div`
  background: rgba(0, 0, 0, 0.9);
  flex-grow: 1;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
  width: 90%;
  z-index: 1;
  font-family: "F37 Jan Regular";
`;

const CodeSearchBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 60px;
  display: flex;
  flex-direction: row;
  align-self: center;
  gap: 1rem;
  justify-content: space-around;
  color: white;
  padding: 2rem;
`;

const MySyntaxHighlighter = styled(SyntaxHighlighter)`
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.1);
  width: clamp(300px, 600px, 90%);
  height: 50vh;
  overflow-y: auto;
  -webkit-scrollbar: none;
`;

const CodeSnippet = `/*
* MergeSort implementation.
*
* Merge Sort is an algorithm where the main list is divided down into two half sized lists, which then have merge sort
* called on these two smaller lists recursively until there is only a sorted list of one.
*
* On the way up the recursive calls, the lists will be merged together inserting
* the smaller value first, creating a larger sorted list.
*/

/**
* Sort and merge two given arrays.
*
* @param {Array} list1 Sublist to break down.
* @param {Array} list2 Sublist to break down.
* @return {Array} The merged list.
*/
export function merge (list1, list2) {
   const results = []
   let i = 0
   let j = 0
 
   while (i < list1.length && j < list2.length) {
     if (list1[i] < list2[j]) {
       results.push(list1[i++])
     } else {
       results.push(list2[j++])
     }
   }
 
   return results.concat(list1.slice(i), list2.slice(j))
 }
 
 /**
  * Break down the lists into smaller pieces to be merged.
  *
  * @param {Array} list List to be sorted.
  * @return {Array} The sorted list.
  */
 export function mergeSort (list) {
   if (list.length < 2) return list
 
   const listHalf = Math.floor(list.length / 2)
   const subList1 = list.slice(0, listHalf)
   const subList2 = list.slice(listHalf, list.length)
 
   return merge(mergeSort(subList1), mergeSort(subList2))
 }`;

const FancyTextArea = styled.div`
  height: 40vh;
  position: relative;
`;

const FancyText = styled.div`
  position: absolute;
  transform: translateX(-50%);
  background: radial-gradient(#ffd542, #1a1a1a 70%);
  -webkit-text-stroke: 1px transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: #1a1a1a;
  font-size: 10rem;
  height: 10rem;
`;

const FancyText1 = styled(FancyText)`
  top: 40%;
`;

const FancyText2 = styled(FancyText)`
  top: 50%;
`;

const FancyText3 = styled(FancyText)`
  top: 60%;
`;

const Subheading = styled.h3`
  color: #d9d9d9;
  font-size: 2.5rem;
  margin: 1rem;
  text-align: center;
  text-transform: lowercase;
`;

const ExternalLinkArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin: 0.5rem;
`;

const UseCaseArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  margin-bottom: 3rem;
  gap: 0.8rem;
`;

const Pill = styled.div`
  border-radius: 50px;
  padding: 0.6rem 1.2rem;
  font-size: 0.8rem;
`;

const ExternalLinkPill = styled(Pill)`
  font-size: 0.7rem;
  text-transform: uppercase;
  border: 1px solid #fc4b6b;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MainUseCaseRow = styled(ExternalLinkArea)`
  gap: 3rem;
`;

const UseCaseRow = styled(ExternalLinkArea)`
  gap: 1rem;
  margin: 0;
`;

const UseCasePill = styled(Pill)`
  background-color: #e8e8e8;
  color: #232323;
`;

export default function UseCasesPage() {
  return (
    <UseCasesPageStyles>
      <Heading>
        <HeadingLine1>See Felvin in Action</HeadingLine1>
        {/* <HeadingLine>magic together</HeadingLine> */}
      </Heading>
      <MainUseCaseRow>
        <MainUseCase>Books</MainUseCase>
        <MainUseCase highlighted>Code</MainUseCase>
      </MainUseCaseRow>
      <CodeUseCaseExample>
        <CodeSearchBox>
          <img src="/search_icon.svg" /> merge sort in javascript
        </CodeSearchBox>
        <MySyntaxHighlighter
          language="javascript"
          style={a11yDark}
          wrapLongLines={true}
          customStyle={{ padding: "2rem", overflowX: "hidden" }}
        >
          {CodeSnippet}
        </MySyntaxHighlighter>
      </CodeUseCaseExample>
      <FancyTextArea>
        <FancyText1>more</FancyText1>
        <FancyText2>more</FancyText2>
        <FancyText3>more</FancyText3>
      </FancyTextArea>
      <Subheading>See more potential use cases for Felvin</Subheading>
      <ExternalLinkArea>
        <ExternalLinkPill>
          <LinkExternal href="https://github.com/felvin-search">
            <img src="/github_white.svg" /> Fork On Git
          </LinkExternal>
        </ExternalLinkPill>
        <ExternalLinkPill>
          <LinkExternal href="https://felvin.com/">
            <img src="/cloud_down.svg" /> Try the Beta
          </LinkExternal>
        </ExternalLinkPill>
        {/* <ExternalLinkPill>
          <LinkExternal href="https://discord.gg/FNMUavyu">
            <img src="/diagonal_arrow.svg" /> Submit Ideas
          </LinkExternal>
        </ExternalLinkPill> */}
      </ExternalLinkArea>
      <UseCaseArea>
        <UseCaseRow>
          <UseCasePill>Code Snippets</UseCasePill>
          <UseCasePill>Regex Validator</UseCasePill>
          <UseCasePill>Latex Render</UseCasePill>
        </UseCaseRow>
        <UseCaseRow>
          <UseCasePill>HTTP Status codes</UseCasePill>
          <UseCasePill>CSV to JSON</UseCasePill>
          <UseCasePill>Markdown to HTML</UseCasePill>
        </UseCaseRow>
        <UseCaseRow>
          <UseCasePill>Train timing finder</UseCasePill>
          <UseCasePill>Search tweets of people you follow</UseCasePill>
          <UseCasePill>Logo finder</UseCasePill>
        </UseCaseRow>
        <UseCaseRow>
          <UseCasePill>Royalty free Music finder</UseCasePill>
          <UseCasePill>Book finder</UseCasePill>
          <UseCasePill>PDF merger</UseCasePill>
        </UseCaseRow>
      </UseCaseArea>
    </UseCasesPageStyles>
  );
}
