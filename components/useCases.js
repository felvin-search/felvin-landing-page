import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const UseCasesPageStyles = styled.div`
  background-color: #1A1A1A;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`

const Heading = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: -0.2rem;
    background: linear-gradient(90deg, #29EF8A -21.97%, #FFD542 18.69%, #F1B1CD 55.53%, #FA3B5E 100%);
    font-size: 4rem;
    margin: 1rem;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: center;
`

const HeadingLine = styled.div`
`

const HeadingLine1 = styled(HeadingLine)`
    margin-bottom: -0.5rem;
`

const MainUseCase = styled.span`
    color: white;
    opacity: ${props => props.highlighted? "1" : "0.3"};
    font-size: 2rem;
`

const CodeUseCaseExample = styled.div`
    background: #0F0F0F;
    flex-grow: 1;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    margin: 1rem;
    width: 90%;
`

const CodeSearchBox = styled.div`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: white;
    padding: 2rem;
`

const MySyntaxHighlighter = styled(SyntaxHighlighter)`
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.1);
    width: clamp(300px, 600px, 90%);
    height: 50vh;
    overflow-y: auto;
    -webkit-scrollbar: none;
`

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
 }`

const Subheading = styled.h3`
    color: #D9D9D9;
    font-size: 1.8rem;
    margin: 1rem;
    text-align: center;
`

const ExternalLinkArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    margin: 0.5rem;
`

const UseCaseArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`

const Pill = styled.div`
    border-radius: 50px;
    padding: 0.6rem 1.2rem;
`

const ExternalLinkPill = styled(Pill)`
    text-transform: uppercase;
    border: 2px solid #FC4B6B;
    color: white;
`

const MainUseCaseRow = styled(ExternalLinkArea)`
    gap: 3rem;
`

const UseCaseRow = styled(ExternalLinkArea)`
    gap: 0.5rem;
`

const UseCasePill = styled(Pill)`
    background-color: #E8E8E8;
    color: #232323;
`

export default function UseCasesPage() {
    return (
        <UseCasesPageStyles>
            <Heading>
                <HeadingLine1>you and felvin can build</HeadingLine1>
                <HeadingLine>magic together</HeadingLine>
            </Heading>
            <MainUseCaseRow>
                <MainUseCase>Books</MainUseCase>
                <MainUseCase highlighted >Code</MainUseCase>
            </MainUseCaseRow>
            <CodeUseCaseExample>
                <CodeSearchBox>merge sort in javascript</CodeSearchBox>
                <MySyntaxHighlighter 
                    language="javascript"
                    style={a11yDark}
                    wrapLongLines={true}
                    customStyle={{padding: "2rem", overflowX: "hidden"}}
                >
                    {CodeSnippet}
                </MySyntaxHighlighter>
            </CodeUseCaseExample>
            <Subheading>See more potential use cases for Felvin</Subheading>
            <ExternalLinkArea>
                <ExternalLinkPill>Fork On Git</ExternalLinkPill>
                <ExternalLinkPill>Try the Beta</ExternalLinkPill>
                <ExternalLinkPill>Submit Ideas</ExternalLinkPill>
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
    )
}