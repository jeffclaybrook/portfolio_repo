import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Artboards from "./components/Artboards"
import Contact from "./components/Contact"
import Main from "./components/Main"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonial"

const containers = [
 {
  title: "About",
  subtitle: "A few things I've been known to dabble in"
 },
 {
  title: "Skills",
  subtitle: "I'm a Jeff of all trades"
 },
 {
  title: "Projects",
  subtitle: "A few demo projects"
 },
 {
  title: "Artboards",
  subtitle: "Getting the most out of every pixel"
 },
 {
  title: "Contact",
  subtitle: "Let's get in touch!"
 }
]

const testimonials = [
 {
  name: "Brian Skulski",
  title: "Co-Founder & Vice President, Value Waste Services",
  quote: "In a world where I believe people can be your greatest joy or your biggest thorn, I can say with conviction that Jeff is a wonderful breath of fresh air to work alongside."
 },
 {
  name: "Kathryn Laster",
  title: "Digital Learning Consultant",
  quote: "Jeff is the epitome of spirit, enthusiasm, and energy. He is the type of person who has never met a stranger, and his friendliness impacts all who comes in contact with him."
 },
 {
  name: "Karen Clardy",
  title: "President, RISD Board of Trustees",
  quote: "Jeff goes out of his way to make sure no one is left out of an activity. His sense of integrity is beyond reproach. I can always count on Jeff to do the right thing."
 },
 {
  name: "AJ Alsodani",
  title: "Owner & Founder, Lil Baghdad",
  quote: "Jeff Claybrook showed excellence in his work ethic and it was a pleasure and honor to work with an individual of his virtue and character."
 }
]

const App = () => {
 return (
  <>
   <Home />
   <Main>
    <Container
     title={containers[0].title}
     subtitle={containers[0].subtitle}
    >
     <About />
    </Container>
    <Testimonial
     quote={testimonials[0].quote}
     name={testimonials[0].name}
     title={testimonials[0].title}
    />
    <Container
     title={containers[1].title}
     subtitle={containers[1].subtitle}
    >
     <Skills />
    </Container>
    <Testimonial
     quote={testimonials[1].quote}
     name={testimonials[1].name}
     title={testimonials[1].title}
    />
    <Container
     title={containers[2].title}
     subtitle={containers[2].subtitle}
    >
     <Projects />
    </Container>
    <Testimonial
     quote={testimonials[2].quote}
     name={testimonials[2].name}
     title={testimonials[2].title}
    />
    <Container
     title={containers[3].title}
     subtitle={containers[3].subtitle}
    >
     <Artboards />
    </Container>
    <Testimonial
     quote={testimonials[3].quote}
     name={testimonials[3].name}
     title={testimonials[3].title}
    />
    <Container
     title={containers[4].title}
     subtitle={containers[4].subtitle}
    >
     <Contact />
    </Container>
   </Main>
   <Footer />
  </>
 )
}

export default App