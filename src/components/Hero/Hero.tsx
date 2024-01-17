import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello 👋, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1>Jacob Moracha</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>I am a Front-End Web And Mobile Dev with React and ReactNative Technologies</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume"> I specialize in creating intuitive and visually appealing user interfaces for both mobile and web applications. With a strong understanding of the latest technologies and methodologies, I am committed to delivering high-quality solutions to my clients.</p>
        </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.8*1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contact" className="button">Contact Me</NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
          <img src={Illustration} alt="Ilustração"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}