import Button from "components/Button/Button";
import { useGlobal } from "providers/Global";

// Styles
import { AjudaStyle } from "./styles";
import { Container } from "styles/Global";

const Ajuda: React.FC = () => {
  const { setOpenFormModal } = useGlobal();

  return (
    <AjudaStyle>
      <Container className="ajuda__container">
        <div className="ajuda__container__text">
          <div className="ajuda__container__text__title">
            <h3>Melhor gestão aquícola é sinônimo de lucratividade!</h3>
          </div>

          <div className="ajuda__container__text__description">
            <p className="ajuda__container__text__description--title">
              A AQUABIT oferece uma <strong>visão detalhada</strong> sobre a
              trajetória do <strong>seu dinheiro</strong> ao longo do ciclo,
              desde a compra dos alevinos até a despesca.
            </p>

            <p>
              Tenha na palma da sua mão <strong>indicadores reais</strong> para
              avaliar a <strong>saúde do seu negócio</strong> e te ajudar na
              <strong>tomada de decisões</strong> mais assertivas para a sua
              produção.
            </p>
          </div>

          <div className="ajuda__container__text__button">
            <Button
              title="QUERO TESTAR"
              onClick={() => setOpenFormModal(true)}
            />
          </div>
        </div>

        <div className="ajuda__container__image">
          <img
            src="/images/aplicativo/web/app-e-web-produtos.webp"
            alt="Aquabit - Web e App"
          />
        </div>
      </Container>
    </AjudaStyle>
  );
};

export default Ajuda;
