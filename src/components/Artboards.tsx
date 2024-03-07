import styled from "styled-components"

const artboards = [
 { src: "https://jeffclaybrook.s3.amazonaws.com/reach-2.webp", alt: "Reach 2" },
 { src: "https://jeffclaybrook.s3.amazonaws.com/channel.webp", alt: "Channel page" },
 { src: "https://jeffclaybrook.s3.amazonaws.com/publisher.webp", alt: "Publisher app" },
 { src: "https://jeffclaybrook.s3.amazonaws.com/reach.webp", alt: "Reach app" },
 { src: "https://jeffclaybrook.s3.amazonaws.com/editor.webp", alt: "Video editor" },
 { src: "https://jeffclaybrook.s3.amazonaws.com/zendesk.webp", alt: "Zendesk home page" },
 { src: "https://jeffclaybrook.s3.amazonaws.com/publisher-2.webp", alt: "Publisher slide manager" },
 { src: "https://jeffclaybrook.s3.amazonaws.com/administration.webp", alt: "User administration page" },
 { src: "https://jeffclaybrook.s3.amazonaws.com/reach-3.webp", alt: "Reach 3" }
]

const Artboards = () => {
 return (
  <Grid>
   {artboards.map((item, i) => (
    <Card key={i}>
     <Image src={item.src} alt={item.alt} />
    </Card>
   ))}
  </Grid>
 )
}

export default Artboards

const Grid = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 gap: .875em;
 max-inline-size: 1200px;
 inline-size: 100%;
 margin-inline: auto;

 @media screen and (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr)
 }

 @media screen and (min-width: 992px) {
  grid-template-columns: repeat(3, 1fr)
 }
`

const Card = styled.div`
 display: flex;
 border-radius: .5em;
 overflow: hidden;
 box-shadow: 0 0 0 1px #0000000d;
`

const Image = styled.img`
 display: block;
 object-fit: cover;
 border-radius: inherit;
`