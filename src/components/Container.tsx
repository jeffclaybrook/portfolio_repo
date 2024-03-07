import { ReactNode } from "react"
import styled from "styled-components"

interface ContainerProps {
 title: string
 subtitle: string
 children: ReactNode
}

const Container = ({ title, subtitle, children }: ContainerProps) => {
 return (
  <Section>
   <Title>{title}</Title>
   <Subtitle>{subtitle}</Subtitle>
   {children}
  </Section>
 )
}

export default Container

const Section = styled.section`
 display: block;
 padding-block: 6em;
`

const Title = styled.h2`
 font-size: 2.25em;
 font-weight: 450;
 letter-spacing: .02em;
 text-align: center;
 color: #465e8a;
`

const Subtitle = styled.h3`
 font-size: 1.25em;
 font-weight: 400;
 letter-spacing: .02em;
 text-align: center;
 color: #3e484e;
 padding-inline: .75em;
 margin-block-end: 3em;
`