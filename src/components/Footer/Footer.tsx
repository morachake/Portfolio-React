import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>J</span>
        <span>acob</span>
      </a>
      <div>
        <p>
        This site was made with a
          <img src={reactIcon} alt="React" /> Source Code available
          <a
          href="https://github.com/jacob-d242/"
          target="_blank"
          rel="noreferrer"
        > ❤️</a>
         
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/jacob-moracha/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/jacob-d242/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/jacobMoracha/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://twitter.com/MorachaKe"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Discord" />
        </a>
      </div>
    </Container>
  )
}
