// Styles
import { WebEAppStyle } from "./styles";
import { Container } from "styles/Global";

const WebEApp = () => {
  return (
    <WebEAppStyle>
      <Container className="web-e-app__container">
        <div className="web-e-app__image">
          <img
            src="/images/aplicativo/web/app-e-web-produtos.webp"
            alt="Aquabit - Web e App"
          />
        </div>

        <div className="web-e-app__text">
          <h2>PRINCIPAIS CADASTROS NO APLICATIVO E NO COMPUTADOR</h2>
          <p>
            Nosso sistema se complementa entre as plataformas mobile (celular) e
            web (computador). Nelas o produtor tem acesso a todos os cadastros,
            controles de lotes e tanques, controle do manejo, compra de ração,
            arraçoamentos, vendas, controle financeiro, qualidade de água e
            relatórios.
          </p>
        </div>
      </Container>
    </WebEAppStyle>
  );
};

export default WebEApp;
