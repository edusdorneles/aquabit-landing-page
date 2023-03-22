import { useGlobal } from "providers/Global";

// Styles
import { CookieAlertStyle } from "./styles";
import { Container } from "styles/Global";

const CookieAlert: React.FC = () => {
  const { cookieAlert, setCookieAlert, alreadyCookieAlert } = useGlobal();

  return (
    <CookieAlertStyle className={cookieAlert ? "cookie-alert--active" : ""}>
      <Container className="cookie-alert__container">
        <Container className="cookie__container">
          <div className="cookie__text">
            <div className="cookie__title">
              <h3>Aviso de Cookies</h3>
            </div>

            <div className="cookie__description">
              <p>
                O AQUABIT realiza a coleta de cookies dos usuários e visitantes
                de seu website para fornecer uma navegação aprimorada, assim
                como otimizar os seus serviços de marketing.
              </p>
            </div>
          </div>

          <div className="cookie__buttons">
            <button
              onClick={() => {
                setCookieAlert(false);
                alreadyCookieAlert("definições");
              }}
              className="cookie__button--personalizado"
            >
              Definições de cookies
            </button>

            <button
              onClick={() => {
                setCookieAlert(false);
                alreadyCookieAlert("false");
              }}
            >
              Rejeitar todos
            </button>

            <button
              onClick={() => {
                setCookieAlert(false);
                alreadyCookieAlert("true");
              }}
            >
              Aceitar todos
            </button>
          </div>
        </Container>
      </Container>
    </CookieAlertStyle>
  );
};

export default CookieAlert;
