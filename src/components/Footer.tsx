import Github from "../icons/Github"
import Linkedin from "../icons/Linkedin"
import Youtube from "../icons/Youtube"
import Facebook from "../icons/Facebook"
import styled from "styled-components"

const data = [
 {
  label: "Link to my GitHub profile",
  href: "https://github.com/jeffclaybrook",
  icon: <Github />
 },
 {
  label: "Link to my LinkedIn profile",
  href: "https://linkedin.com/in/jeff-claybrook",
  icon: <Linkedin />
 },
 {
  label: "Link to my YouTube profile",
  href: "https://youtube.com/@jeffreyclaybrook",
  icon: <Youtube />
 },
 {
  label: "Link to my Facebook profile",
  href: "https://www.facebook.com/jeff.claybrook.16",
  icon: <Facebook />
 }
]

const Footer = () => (
 <Container>
  <Logo src="https://jeffclaybrook.s3.amazonaws.com/logo.png" alt="Jeffrey Claybrook" />
  <List>
   {data.map((item, i) => (
    <ListItem key={i}>
     <Link href={item.href} aria-label="item.label">{item.icon}</Link>
    </ListItem>
   ))}
  </List>
  <Text>© 2024 Jeffrey Claybrook</Text>
 </Container>
)

export default Footer

const Container = styled.footer`
 display: block;
 padding-block: 4em 2em;
 background: #f9fcff;
`

const Logo = styled.img`
 display: block;
 max-inline-size: 300px;
 inline-size: 100%;
 object-fit: cover;
 margin-inline: auto;
 margin-block-end: 2em;
 filter: invert(.75);
`

const List = styled.ul`
 display: flex;
 align-items: center;
 justify-content: space-between;
 max-inline-size: 300px;
 inline-size: 100%;
 margin-inline: auto;
 margin-block-end: 2em;
`

const ListItem = styled.li`
 display: inline-flex;
 align-items: center;
 justify-content: center;
`

const Link = styled.a`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 block-size: 3em;
 inline-size: 3em;
 border-radius: 50%;
 border: 1px solid #283237;
 transition: background-color .15s linear, border-color .15s linear;

 svg {
  fill: #283237;
 }

 &:hover {
  background-color: #465e8a;
  border-color: #465e8a;

  svg {
   fill: #f9fcff;
  }
 }
`

const Text = styled.p`
 font-size: .875em;
 color: #283237;
 text-align: center;
`