// Styles
import { ArracoamentosStyle } from "./styles";
import { Container } from "styles/Global";

const Arracoamentos = () => {
  return (
    <ArracoamentosStyle>
      <Container className="arracoamentos__container">
        <div className="arracoamentos__image--mobile">
          <img
            src="/images/aplicativo/mobile/arracoamento.webp"
            alt="Aquabit - Arraçoamento"
          />
        </div>

        <div className="arracoamentos__text">
          <h2>ARRAÇOAMENTOS</h2>
          <p>
            O arraçoamento corresponde a mais de 70% do custo da produção e por
            isso requer uma atenção especial. Criamos várias opções do produtor
            registrar os arraçoamentos, buscando facilitar o dia a dia das
            atividades. Arraçoamento por dia, por período, importação de CSV
            como também o uso de tabelas/programas alimentares.
          </p>
        </div>

        <div className="arracoamentos__image--desktop">
          <img
            src="/images/aplicativo/web/arracoamentos-programa-alimentar.webp"
            alt="Aquabit - Arraçoamento e programa alimentar"
          />
        </div>

        <div className="arracoamentos__image--mobile">
          <img
            src="/images/aplicativo/mobile/programa-alimentar.webp"
            alt="Aquabit - Programa alimentar"
          />
        </div>

        <div className="arracoamentos__text">
          <h2>PROGRAMA ALIMENTAR</h2>
          <p>
            Através da criação de tabelas de arraçoamento, o produtor pode ter
            um melhor acompanhamento dos resultados previstos e alcançados,
            podendo ajustar o manejo e obter os melhores resultados. As tabelas
            podem ser cadastradas por dia e por semana, pelo % da Biomassa ou
            pelo CA esperado. Após a criação das tabelas, os arraçoamento podem
            ser criados através da geração de comandos em nossa plataforma,
            dando toda autonomia para o produtor ter o controle sobre o
            processo.
          </p>
        </div>
      </Container>
    </ArracoamentosStyle>
  );
};

export default Arracoamentos;
