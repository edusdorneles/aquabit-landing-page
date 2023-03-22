// Styles
import { BannerStyle } from "./styles";
import { Container } from "styles/Global";
import { useGlobal } from "providers/Global";

const Banner: React.FC = () => {
  const { setOpenFormModal } = useGlobal();

  return (
    <BannerStyle aria-label="Controle da produção de peixes na palma da mão">
      <Container className="home__banner__container">
        <div>
          <h1>
            Controle Inteligente na produção de peixes <br />e camarões
          </h1>
        </div>

        <div className="home__banner__description">
          <ul>
            <li>Eliminar prejuízos durante o ciclo/safra</li>
            <li>Ganhar mais nas vendas</li>
            <li>Ter mais tempo para tomada de decisão</li>
          </ul>

          <button onClick={() => setOpenFormModal(true)}>
            <p>QUERO TESTAR</p> <span>{">"}</span>
          </button>
        </div>
      </Container>
    </BannerStyle>
  );
};

export default Banner;
