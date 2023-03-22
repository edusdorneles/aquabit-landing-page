// Styles
import { AceleradorasStyle } from "./styles";
import { Container } from "styles/Global";

const Aceleradoras: React.FC = () => {
  return (
    <AceleradorasStyle>
      <Container className="aceleradoras__container">
        <div className="aceleradoras__title">
          <h2>Aceleradoras</h2>
        </div>

        <div className="aceleradoras__images">
          <img
            src="/images/sobre-nos/aceleradoras/startup-pr.svg"
            alt="StartupPR"
          />

          <div className="aceleradoras__images--wrapper"></div>
          <img
            src="/images/sobre-nos/aceleradoras/campo-digital.svg"
            alt="Campo Digital"
          />

          <div className="aceleradoras__images--wrapper"></div>
          <img
            src="/images/sobre-nos/aceleradoras/inova-amazonia.svg"
            alt="Inova Amazônia"
          />
        </div>
      </Container>
    </AceleradorasStyle>
  );
};

export default Aceleradoras;
