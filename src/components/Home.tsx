import { useTypewriter } from "react-simple-typewriter"
import styled from "styled-components"

const Home = () => {
 const [text] = useTypewriter({
  words: [
   "product manager.",
   "frontend developer.",
   "UX/UI designer.",
   "content creator.",
   "QA & debugger.",
   "technical writer."
  ],
  loop: 0,
  typeSpeed: 125,
  deleteSpeed: 50,
  delaySpeed: 2050
 })

 return (
  <Header>
   <Image src="https://jeffclaybrook.s3.amazonaws.com/headshot.webp" alt="Jeffrey Claybrook headshot" />
   <Title>Hi, my name is <Strong>Jeff</Strong></Title>
   <Subtitle>and I'm a <Strong>{text}</Strong></Subtitle>
   <Button
    href="https://jeffclaybrook.s3.amazonaws.com/resume.min.pdf"
    target="_blank"
    rel="noreferrer"
   >
    My Resume
   </Button>
  </Header>
 )
}

export default Home

const Header = styled.header`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 background: #f9fcff;
 block-size: 100vh;
 padding: .875em;
`

const Image = styled.img`
 display: block;
 block-size: 275px;
 inline-size: 275px;
 border-radius: 5em 2em;
 object-fit: cover;
 margin-block-end: 2em;
 border: .25em solid #465e8a;
`

const Title = styled.h1`
 font-size: 2em;
 font-weight: 350;
 letter-spacing: .02em;
 color: #131d22;
`

const Subtitle = styled.h2`
 font-size: 1.5em;
 font-weight: 350;
 letter-spacing: .015em;
 color: #131d22;
 margin-block-end: 1em;
`

const Strong = styled.strong`
 font-weight; 600;
 color: #465e8a;
`

const Button = styled.a`
 display: inline-block;
 text-align: center;
 margin-inline: auto;
 font-size: 1.0875em;
 color: #f9fcff;
 text-transform: uppercase;
 letter-spacing: .015em;
 background: #465e8a;
 border: 1px solid #465e8a;
 border-radius: .325em;
 font-weight: 450;
 padding: .65em 1.25em;
 transition: background-color .15s linear, border-color .15s linear;

 &:hover {
  background-color: #7991c0;
  border-color: #7991c0;
  color: #ffffff;
 }
`