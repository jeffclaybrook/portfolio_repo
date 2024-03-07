import styled from "styled-components"

interface TestimonialProps {
 quote: string
 name: string
 title: string
}

const Testimonial = ({ quote, name, title }: TestimonialProps) => (
 <Article>
  <Quote>"{quote}"</Quote>
  <Name>-{name}</Name>
  <Title>{title}</Title>
 </Article>
)

export default Testimonial

const Article = styled.article`
 display: flex;
 flex-direction: column;
 justify-content: center;
 max-inline-size: 1200px;
 min-block-size: 260px;
 margin-inline: auto;
 padding: 1.5em;
 border-radius: 1.5em;

 &:nth-of-type(1) {
  background: linear-gradient(#04091eb3,#04091ea6),url(https://jeffclaybrook.s3.amazonaws.com/conferenceroom.webp) no-repeat 50%/cover
 }

 &:nth-of-type(2) {
  background: linear-gradient(#04091eb3,#04091ea6),url(https://jeffclaybrook.s3.amazonaws.com/posed.webp) no-repeat 50%/cover;
 }

 &:nth-of-type(3) {
  background: linear-gradient(#04091eb3,#04091ea6),url(https://jeffclaybrook.s3.amazonaws.com/generic1.webp) no-repeat 50%/cover;
 }

 &:nth-of-type(4) {
  background: linear-gradient(#04091eb3,#04091ea6),url(https://jeffclaybrook.s3.amazonaws.com/generic2.webp) no-repeat 50%/cover;
 }
`

const Quote = styled.h3`
 font-size: 1.5em;
 font-weight: 400;
 letter-spacing: .03em;
 line-height: 1.5;
 color: #f9fcff;
 text-shadow: 0 1px 0 #131d22;
 margin-block-end: .875em;
`

const Name = styled.h4`
 font-size: 1.125em;
 letter-spacing: .03em;
 font-weight: 400;
 color: #f9fcff;
 text-shadow: 0 1px 0 #131d22;
 margin-block-end: .0875em;
`

const Title = styled.h5`
 font-size: 1em;
 font-weight: 500;
 color: #f9fcff;
 letter-spacing: .005em;
 text-shadow: 0 1px 0 #131d22;
`