// Styles
import { VendasStyle } from "./styles";
import { Container } from "styles/Global";

const Vendas = () => {
  return (
    <VendasStyle>
      <Container className="vendas__container">
        <div className="vendas__image--mobile">
          <img
            src="/images/aplicativo/mobile/vendas.webp"
            alt="Aquabit - Controle do manejo"
          />
        </div>

        <div className="vendas__text">
          <h2>VENDAS</h2>
          <p>
            Toda a produção gerada, deve ser vendida para poder encerrar os
            lotes e tanques. Através do módulo de vendas, o produtor cadastra os
            clientes e efetua as vendas, gerando financeiro e saldos nas contas.
            Através do módulo de relatórios, podem acompanhar os resultados das
            vendas e financeiro.
          </p>
        </div>

        <div className="vendas__image--desktop">
          <img
            src="/images/aplicativo/web/vendas-movimentação-financeira.webp"
            alt="Aquabit - Controle do manejo e compra de ração"
          />
        </div>

        <div className="vendas__image--mobile">
          <img
            src="/images/aplicativo/mobile/fluxo-de-caixa.webp"
            alt="Aquabit - Compra de ração"
          />
        </div>

        <div className="vendas__text">
          <h2>MOVIMENTAÇÃO FINANCEIRA</h2>
          <p>
            No módulo financeiro, podem ser cadastrados as contas bancárias, os
            fornecedores e as categorias financeiras. Os registros compra de
            alevinos/larvas, compra de rações e vendas da produção, geram
            movimentações financeiras, facilitando os registros dos dados. Já em
            movimentação financeira o produtor pode registras as Despesas
            Operacionais, como também Outras Entradas de recursos que não foi
            originado de vendas da produção.
          </p>
        </div>
      </Container>
    </VendasStyle>
  );
};

export default Vendas;
