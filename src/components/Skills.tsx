import Bootstrap from "../icons/Bootstrap"
import ChatGPT from "../icons/ChatGPT"
import Css3 from "../icons/Css3"
import Html5 from "../icons/Html5"
import Invision from "../icons/Invision"
import Javascript from "../icons/Javascript"
import Jira from "../icons/Jira"
import Json from "../icons/Json"
import Keynote from "../icons/Keynote"
import Mui from "../icons/Mui"
import Netlify from "../icons/Netlify"
import Nodejs from "../icons/Nodejs"
import Npm from "../icons/Npm"
import React from "../icons/React"
import Sass from "../icons/Sass"
import Trello from "../icons/Trello"
import Typescript from "../icons/Typescript"
import Zendesk from "../icons/Zendesk"
import styled from "styled-components"

const skills = [
 { label: "Bootstrap", icon: <Bootstrap /> },
 { label: "ChatGPT", icon: <ChatGPT /> },
 { label: "CSS3", icon: <Css3 /> },
 { label: "HTML5", icon: <Html5 /> },
 { label: "Invision", icon: <Invision /> },
 { label: "JavaScript", icon: <Javascript /> },
 { label: "Jira", icon: <Jira /> },
 { label: "JSON", icon: <Json /> },
 { label: "Keynote", icon: <Keynote /> },
 { label: "MUI", icon: <Mui /> },
 { label: "Netlify", icon: <Netlify /> },
 { label: "NodeJS", icon: <Nodejs /> },
 { label: "NPM", icon: <Npm /> },
 { label: "React", icon: <React /> },
 { label: "Sass", icon: <Sass /> },
 { label: "Trello", icon: <Trello /> },
 { label: "TypeScript", icon: <Typescript /> },
 { label: "Zendesk", icon: <Zendesk /> }
]

const Skills = () => {
 return (
  <Cards>
   {skills.map((item, i) => (
    <Card key={i}>
     <Icon>{item.icon}</Icon>
     <Label>{item.label}</Label>
    </Card>
   ))}
  </Cards>
 )
}

export default Skills

const Cards = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: .875em;
 max-inline-size: 1200px;
 margin-inline: auto;

 @media screen and (min-width: 768px) {
  grid-template-columns: repeat(3, 1fr)
 }

 @media screen and (min-width: 992px) {
  grid-template-columns: repeat(4, 1fr)
 }
`

const Card = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: .75em;
 text-align: center;
 padding: 1.5em .75em;
 border-radius: .5em;
 background: #f9fcff;
 box-shadow: 0 0 0 1px #0000000d;
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