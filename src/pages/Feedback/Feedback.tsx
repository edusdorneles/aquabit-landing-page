import Banner from "./Banner/Banner";

// Styles
import { FeedbackStyle } from "./styles";
import { Container } from "styles/Global";

const Feedback: React.FC = () => {
  return (
    <FeedbackStyle>
      <Banner />

      <Container className="feedback_container">
        <div className="feedback__title">
          <h2>O formulário foi enviado com sucesso!</h2>
        </div>

        <div className="feedback__description">
          <p>
            Temos certeza que iremos lhe auxiliar a alcançar os melhores
            resultados.
          </p>

          <p>
            Nossa equipe de especialistas em Aquicultura entrará em contato o
            mais breve possível.
          </p>
        </div>
      </Container>
    </FeedbackStyle>
  );
};

export default Feedback;
