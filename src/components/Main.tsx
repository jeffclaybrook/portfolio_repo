import { ReactNode } from "react"
import styled from "styled-components"

interface MainProps {
 children: ReactNode
}

const Main = ({ children }: MainProps) => (
 <Container>
  {children}
 </Container>
)

export default Main

const Container = styled.main`
 padding: .875em;
`