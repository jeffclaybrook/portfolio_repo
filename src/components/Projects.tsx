import styled from "styled-components"
import NewTab from "../icons/NewTab"

const projects = [
 {
  to: "https://spectacular-smakager-deac89.netlify.app/",
  label: "Music app",
  image: "https://jeffclaybrook.s3.amazonaws.com/musicapp.webp",
  alt: "Music app",
  ariaLabel: "Music app"
 },
 {
  to: "https://jeffclaybrook.github.io/CalcPWA",
  label: "Calculator App",
  image: "https://jeffclaybrook.s3.amazonaws.com/calculator.webp",
  alt: "Calculator app",
  ariaLabel: "Calculator app"
 },
 {
  to: "https://jeffclaybrook.github.io/Notes-App",
  label: "Notes App",
  image: "https://jeffclaybrook.s3.amazonaws.com/notesapp.webp",
  alt: "Notes app",
  ariaLabel: "Notes app"
 },
 {
  to: "https://jeffclaybrook.github.io/Unsplash-API/",
  label: "Unsplash API",
  image: "https://jeffclaybrook.s3.amazonaws.com/unsplashapi.webp",
  alt: "Unsplash API",
  ariaLabel: "Unsplash API"
 },
 {
  to: "https://jeffclaybrook.github.io/custom-video-player",
  label: "Video Player",
  image: "https://jeffclaybrook.s3.amazonaws.com/videoplayer.webp",
  alt: "Video player",
  ariaLabel: "Video player"
 },
 {
  to: "https://jeffclaybrook.github.io/Task-App",
  label: "Task App",
  image: "https://jeffclaybrook.s3.amazonaws.com/taskapp.webp",
  alt: "Task app",
  ariaLabel: "Task app"
 },
 {
  to: "https://jeffclaybrook.github.io/form-fields",
  label: "Text Fields",
  image: "https://jeffclaybrook.s3.amazonaws.com/textfields.webp",
  alt: "Text fields design",
  ariaLabel: "Text fields UI"
 },
 {
  to: "https://jeffclaybrook.github.io/Facebook-Messenger",
  label: "Messenger App",
  image: "https://jeffclaybrook.s3.amazonaws.com/messenger.webp",
  alt: "Messenger app",
  ariaLabel: "Messenger app"
 },
 {
  to: "https://lilbaghdad.com",
  label: "Food Truck Menu",
  image: "https://jeffclaybrook.s3.amazonaws.com/foodtruckmenu.webp",
  alt: "Food truck menu",
  ariaLabel: "Food truck app"
 }
]

const Projects = () => {
 return (
  <Grid>
   {projects.map((item, i) => (
    <Card
     key={i}
     href={item.to}
     aria-label={item.ariaLabel}
     target="_blank"
     rel="noreferrer"
    >
     <Figure>
      <Image src={item.image} alt={item.label} />
     </Figure>
     <Details>
      <Label>{item.label}</Label>
      <NewTab />
     </Details>
    </Card>
   ))}
  </Grid>
 )
}

export default Projects

const Grid = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 gap: .875em;
 max-inline-size: 1200px;
 margin-inline: auto;

 @media screen and (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr)
 }

 @media screen and (min-width: 992px) {
  grid-template-columns: repeat(3, 1fr)
 }
`

const Card = styled.a`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 position: relative;
 border-radius: .5em;
 overflow: hidden;
 box-shadow: 0 0 0 1px #0000000d;
 aspect-ratio: 5 / 3;

 &:hover {
  figure {
   transform: scale(1.25);
  }
 }
`

const Figure = styled.figure`
 display: flex;
 position: relative;
 transition: all .25s ease-in-out;

 &::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(#04091eb3,#04091ea6);
  border-radius: inherit;
 }
`

const Image = styled.img`
 display: block;
 object-fit: cover;
`

const Details = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 gap: .75em;
 block-size: 100%;
 inline-size: 100%;
 position: absolute;
 border-radius: inherit;
 inset: 0;

 svg {
  position: relative;
  fill: #f9fcff;
 }
`

const Label = styled.h4`
 font-size: 1.25em;
 font-weight: 450;
 letter-spacing: .02em;
 color: #f9fcff;
 text-shadow: 0 1px 0 #0f1d23;
 position: relative;
`