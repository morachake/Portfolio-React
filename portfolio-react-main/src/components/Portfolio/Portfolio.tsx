import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/jacob-d242/omart" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              <a href="https://omart.co.ke" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Omart Kenya</h3>
              <p>A multivendor Ecommerce Platform for Omart Kenya with React and NodeJs.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>NodeJs</li>
                <li>Css</li>
                <li>Express</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/jacob-d242/Food--App" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              <a href="https://github.com/jacob-d242/Food--App" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Food Delivery App</h3>
              <p>A Food order And delivery App
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>FireBase</li>
                <li>Css</li>
                <li>ReactNative</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/jacob-d242/tingaRN" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              <a href="https://github.com/jacob-d242/tingaRN" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Tinga Up</h3>
              <p>ReactNative mobile application for tractor booking services
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>FireBase</li>
                <li>Css</li>
                <li>Redux</li>
                <li>ReactNative</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/jacob-d242/candy-crush" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              <a href="https://github.com/jacob-d242/candy-crush" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>MaiGaz</h3>
              <p>ReactNative mobile application for Gas and water delivery. Provide ease of locating vendors near me using maps
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>FireBase</li>
                <li>Css</li>
                <li>Redux</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/jacob-d242/personal-portfolio" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              <a href="https://github.com/jacob-d242/personal-portfolio" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Personal portfolio</h3>
              <p>My first web application highlighting mys skills and achievements
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Css</li>
                <li>JavaSript</li>
                <li>HTML</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href=" https://github.com/jacob-d242/task-app-react" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              <a href=" https://github.com/jacob-d242/task-app-react" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Task App</h3>
              <p>Web application with all crud functionaliries,managing state with Redux and stores data in MongoDb database
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Css</li>
                <li>JavaSript</li>
                <li>HTML</li>
                <li>NodeJs</li>
                <li>Express</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}