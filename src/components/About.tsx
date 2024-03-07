import ProductManagement from "../icons/ProductManagement"
import FrontendDevelopment from "../icons/FrontendDevelopment"
import UXDesignResearch from "../icons/UXDesignResearch"
import ContentCreator from "../icons/ContentCreator"
import QADebugging from "../icons/QADebugging"
import TechnicalWriting from "../icons/TechnicalWriting"
import styled from "styled-components"

const about = [
 { label: "Product Management", icon: <ProductManagement /> },
 { label: "Frontend Development", icon: <FrontendDevelopment /> },
 { label: "UX Design & Research", icon: <UXDesignResearch /> },
 { label: "Content Creator", icon: <ContentCreator /> },
 { label: "QA & Debugging", icon: <QADebugging /> },
 { label: "Technical Writing", icon: <TechnicalWriting /> }
]

const About = () => {
 return (
  <Cards>
   {about.map((item, i) => (
    <Card key={i}>
     <Icon>{item.icon}</Icon>
     <Label>{item.label}</Label>
    </Card>
   ))}
  </Cards>
 )
}

export default About

const Cards = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 gap: .875em;
 max-inline-size: 1200px;
 margin-inline: auto;

 @media screen and (min-width: 600px) {
  grid-template-columns: repeat(2, 1fr)
 }

 @media screen and (min-width: 992px) {
  grid-template-columns: repeat(3, 1fr)
 }
`

const Card = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: .75em;
 text-align: center;
 background: #f9fcff;
 box-shadow: 0 0 0 1px rgba(0,0,0,.05);
 padding: 1.5em .75em;
 border-radius: .5em;
`

const Icon = styled.div`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 block-size: 3.5em;
 inline-size: 3.5em;
 border-radius: 1em;
 padding: .75em;
 background: #d6e3ff;

 svg {
  fill: #465e8a;
 }
`

const Label = styled.h4`
 font-size: 1.25em;
 font-weight: 450;
 letter-spacing: .02em;
 color: #131d22;
`