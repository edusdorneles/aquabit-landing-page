import Form from "components/Contato/Form/Form";
import FormCentralDeAjuda from "./FormCentralDeAjuda/FormCentralDeAjuda";
import { useLocation } from "react-router-dom";

// Styles
import { ContatoStyle } from "./styles";
import { Container } from "styles/Global";

// Interfaces
interface IProps {
  style?: React.CSSProperties | undefined;
}

const Contato: React.FC<IProps> = ({ style }) => {
  const currentPage = useLocation();

  return (
    <ContatoStyle id="contato" style={style}>
      <Container className="contato__container">
        <div className="home__default__text">
          <div className="home__default__title">
            <h2>Descubra como poderemos melhorar seus resultados!</h2>
          </div>
        </div>

        <div className="contato__form">
          {currentPage.pathname !== "/central-de-ajuda" ? (
            <Form />
          ) : (
            <FormCentralDeAjuda />
          )}
        </div>
      </Container>
    </ContatoStyle>
  );
};

export default Contato;
