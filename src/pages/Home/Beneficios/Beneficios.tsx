import Button from "components/Button/Button";
import { useGlobal } from "providers/Global";

// Styles
import { BeneficiosStyle } from "./styles";
import { Container } from "styles/Global";

// Icons
import { BiCheck } from "react-icons/bi";

const Beneficios: React.FC = () => {
  const { setOpenFormModal } = useGlobal();

  return (
    <BeneficiosStyle>
      <div className="home__default__title home__beneficios__title">
        <h2>Principais Funções</h2>
      </div>

      <Container className="home__beneficios__container">
        <div className="home__beneficios__text">
          <div className="home__default__text">
            <div className="home__default__description home__beneficios__description">
              <h2>Controle tudo em um só lugar!</h2>
            </div>
          </div>

          <div className="home__beneficios__list">
            <div className="home__beneficios__list__container">
              <div className="beneficios__list__check">
                <BiCheck />
              </div>

              <div className="beneficios__list__text">
                <p>Históricos de Lotes e Tanques</p>
              </div>
            </div>

            <div className="home__beneficios__list__container">
              <div className="beneficios__list__check">
                <BiCheck />
              </div>

              <div className="beneficios__list__text">
                <p>Controle de Estoque de Ração</p>
              </div>
            </div>

            <div className="home__beneficios__list__container">
              <div className="beneficios__list__check">
                <BiCheck />
              </div>

              <div className="beneficios__list__text">
                <p>Fluxo de Caixa e Saldos de Contas</p>
              </div>
            </div>

            <div className="home__beneficios__list__container">
              <div className="beneficios__list__check">
                <BiCheck />
              </div>

              <div className="beneficios__list__text">
                <p>Programa Alimentar e Curva de Crescimento</p>
              </div>
            </div>

            <div className="home__beneficios__list__container">
              <div className="beneficios__list__check">
                <BiCheck />
              </div>

              <div className="beneficios__list__text">
                <p>Relatórios de desempenho zootécnicos por lotes e tanques</p>
              </div>
            </div>
          </div>
        </div>

        <div className="home__beneficios__image">
          <img
            src="/images/home/beneficios/app-e-web.webp"
            alt="Aquabit auxilia no controle da produção de peixes"
          />
        </div>
      </Container>

      <div className="home__beneficios__button">
        <Button title="TESTAR AGORA" onClick={() => setOpenFormModal(true)} />
      </div>
    </BeneficiosStyle>
  );
};

export default Beneficios;
