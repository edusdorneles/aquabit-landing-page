// Styles
import { ControleManejoStyle } from "./styles";
import { Container } from "styles/Global";

const ControleManejo = () => {
  return (
    <ControleManejoStyle>
      <Container className="controle-manejo__container">
        <div className="controle-manejo__image--mobile">
          <img
            src="/images/aplicativo/mobile/controle-do-manejo.webp"
            alt="Aquabit - Controle do manejo"
          />
        </div>

        <div className="controle-manejo__text">
          <h2>CONTROLE DO MANEJO</h2>
          <p>
            Tanto no celular como pelo computador o produtor terá: Controles das
            Biometrias, Mortalidades, Transferências, Estoque por Tanques e
            Lotes.
          </p>
        </div>

        <div className="controle-manejo__image--desktop">
          <img
            src="/images/aplicativo/web/controle-manejo-compra-racao.webp"
            alt="Aquabit - Controle do manejo e compra de ração"
          />
        </div>

        <div className="controle-manejo__image--mobile">
          <img
            src="/images/aplicativo/mobile/compra-de-racao.webp"
            alt="Aquabit - Compra de ração"
          />
        </div>

        <div className="controle-manejo__text">
          <h2>COMPRA E RAÇÃO</h2>
          <p>
            No módulo de compra de ração, o produtor irá cadastrar as rações,
            registrar todas as compras, já gerando financeiro e controlando todo
            o estoque, podendo até fazer ajustes de estoques para mais ou para
            menos caso seja necessário.
          </p>
        </div>
      </Container>
    </ControleManejoStyle>
  );
};

export default ControleManejo;
