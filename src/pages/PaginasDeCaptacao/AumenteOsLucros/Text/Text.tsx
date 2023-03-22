import Button from "components/Button/Button";
import { useGlobal } from "providers/Global";

// Styles
import { TextStyle } from "./styles";
import { Container } from "styles/Global";

const Text: React.FC = () => {
  const { setOpenFormModal } = useGlobal();

  return (
    <TextStyle>
      <Container className="text__container">
        <div className="text__container__text">
          <div className="text__container__text__title">
            <h1>Aumente os lucros da sua produção!</h1>
          </div>

          <div className="text__container__text__description">
            <p>
              Saiba o quanto está lucrando ou tendo prejuízo para poder aumentar
              os lucros em sua produção.
            </p>
          </div>

          <div className="text__container__text__button">
            <Button
              title="CONHEÇA AGORA"
              onClick={() => setOpenFormModal(true)}
            />
          </div>
        </div>
      </Container>
    </TextStyle>
  );
};

export default Text;
