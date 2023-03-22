import { Link } from "react-router-dom";

// Styles
import { FooterStyle } from "./styles";
import { Container } from "styles/Global";

// Icons
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <Container className="footer__container">
        <div className="footer__text">
          <div className="footer__text__aquabit">
            <ul>
              <li className="footer__text__title">Aquabit</li>

              <li>
                <Link to="/sobre-nos">Sobre Nós</Link>
              </li>

              <li>
                <Link to="/central-de-ajuda">Central de Ajuda</Link>
              </li>
            </ul>
          </div>

          <div className="footer__text__produto">
            <ul>
              <li className="footer__text__title">Produto</li>

              <li>
                <Link to="/aplicativo">O Aplicativo</Link>
              </li>
            </ul>
          </div>

          <div className="footer__text__fale-conosco">
            <ul>
              <li className="footer__text__title">Fale Conosco</li>

              <li>(11) 93257-8701</li>

              <li>contato@aquabit.com.br</li>
            </ul>
          </div>

          <div className="footer__text__transparencia">
            <ul>
              <li className="footer__text__title">Transparência</li>

              <li>
                <Link to="/politica-de-privacidade">
                  Política de Privacidade
                </Link>
              </li>

              <li>
                <Link to="/termos">Termos de Uso</Link>
              </li>

              <li>
                <Link to="/politica-de-cookies">Política de Cookies</Link>
              </li>
            </ul>
          </div>

          <div className="footer__text__midia">
            <div className="footer__media__image">
              <img src="/images/logo-aquabit.svg" alt="Logo Aquabit" />
            </div>

            <div className="footer__media__social">
              <a
                href="http://wa.me/+5511950765158"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.facebook.com/aquabit.cc"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/footer/meta.svg" alt="Logo Meta" />
              </a>

              <a
                href="https://www.instagram.com/aquabit.cc/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/channel/UCWPP_Sh758REEgn4WP1o9yg"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineYoutube />
              </a>

              <a
                href="https://www.linkedin.com/company/aquabit/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="footer__copyright">
        <p>Copyright 2018 – 2022 Aquabit. Todos os direitos reservados.</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
