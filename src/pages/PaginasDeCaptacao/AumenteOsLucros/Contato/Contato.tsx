import Form from "./Form/Form";

// Styles
import { ContatoStyle } from "./styles";
import { Container } from "styles/Global";

// Interfaces
interface IProps {
  style?: React.CSSProperties | undefined;
}

const Contato: React.FC<IProps> = ({ style }) => {
  return (
    <ContatoStyle id="contato" style={style}>
      <Container className="contato__container">
        <div className="home__default__text">
          <div className="home__default__title">
            <h2>Solicite a sua demonstração GRATUITA!</h2>
          </div>
        </div>

        <div className="contato__form">
          <Form />
        </div>
      </Container>
    </ContatoStyle>
  );
};

export default Contato;
