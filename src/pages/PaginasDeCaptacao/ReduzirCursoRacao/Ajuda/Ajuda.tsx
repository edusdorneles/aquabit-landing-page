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
            <h3>Como a Aquabit pode te ajudar?</h3>
          </div>

          <div className="ajuda__container__text__description">
            <p className="ajuda__container__text__description--title">
              O arraçoamento pode representar até <strong>80% do custo</strong>{" "}
              de uma produção, logo é possível{" "}
              <strong>economizar até 10%</strong> dos seus custos com ração.
            </p>

            <p>
              Com o auxílio da Aquabit, você irá realizar o arraçoamento de
              forma programada somente com a quantidade de ração que seus
              animais precisam, <strong>evitando desperdícios</strong>. Com o
              monitoramento dos principais indicadores como o{" "}
              <strong>ganho de peso</strong> e a{" "}
              <strong>conversão alimentar</strong> irá garantir que o resultado
              esperado seja alcançado e também tomar as{" "}
              <strong>melhores decisões</strong> sobre sua produção.
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
