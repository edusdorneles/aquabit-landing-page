// Styles
import { ParceirosStyle } from "./styles";
import { Container } from "styles/Global";

const Parceiros: React.FC = () => {
  return (
    <ParceirosStyle>
      <Container className="parceiros__container">
        <div className="home__default__text">
          <div className="home__default__title">
            <h2>Parceiros</h2>
          </div>
        </div>

        <div className="parceiros__images">
          <img
            src="/images/home/parceiros/sebrae.webp"
            alt="Parceiro - Sebrae"
          />

          <img
            src="/images/home/parceiros/banco-nordeste.webp"
            alt="Parceiro - Banco Nordeste"
          />

          <img
            src="/images/home/parceiros/embrapa.webp"
            alt="Parceiro - Embrapa"
          />

          <img
            src="/images/home/parceiros/sicoob.webp"
            alt="Parceiro - Sicoob"
          />

          <img
            src="/images/home/parceiros/fundetec.webp"
            alt="Parceiro - Fundatec"
          />
        </div>
      </Container>
    </ParceirosStyle>
  );
};

export default Parceiros;
