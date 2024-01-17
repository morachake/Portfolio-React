import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        <p>Get in touch using the form below</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:jacobmoracha@gmail.com">jacobmoracha@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+254791648620">(254) 791648620</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}