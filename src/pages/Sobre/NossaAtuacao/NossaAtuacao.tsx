// Styles
import { NossaAtuacaoStyle } from "./styles";
import { Container } from "styles/Global";

const NossaAtuacao: React.FC = () => {
  return (
    <NossaAtuacaoStyle>
      <Container className="atuacao__container">
        <div className="atuacao__text">
          <div className="atuacao__title">
            <h2>Nossa Atuação</h2>
          </div>

          <div className="atuacao__description">
            <p>
              Já nascemos nacionalmente, durante a construção de nossas
              plataformas,visitamos várias regiões do Brasil com diferentes
              tipos de produções e espécies, atendemos a todas elas, desde que
              seja criação em cativeiro. As principais são: Tilápia,
              Tambaqui/Tambatinga, Pirarucu, Pangasius e Camarão. Tanques
              escavados, elevados/suspensos e tanques redes
            </p>
          </div>
        </div>

        <div className="atuacao__image">
          <img
            src="/images/sobre-nos/nossaAtuacao/mapa-brasil.svg"
            alt="Mapa de atuação da Aquabit no Brasil"
          />
        </div>
      </Container>
    </NossaAtuacaoStyle>
  );
};

export default NossaAtuacao;
