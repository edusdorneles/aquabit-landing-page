import Button from "components/Button/Button";
import { useGlobal } from "providers/Global";

// Styles
import { AjudamosProdutoresStyle } from "./styles";
import { Container } from "styles/Global";

const AjudamosProdutores: React.FC = () => {
  const { setOpenFormModal } = useGlobal();

  return (
    <AjudamosProdutoresStyle>
      <Container className="ajudamos-produtores__container">
        <article className="ajudamos-produtores__text">
          <div className="home__default__text">
            <div className="home__default__title">
              <h3>
                Ajudamos produtores de
                <br />
                todo o Brasil!
              </h3>
            </div>

            <div className="home__default__description">
              <p>
                Aquabit ajuda os produtores de peixes e camarões de todo o
                Brasil a ganhar mais em suas piscicultura e carcinicultura.
              </p>
            </div>
          </div>
        </article>

        <article className="ajudamos-produtores__numeros">
          <div>
            <img
              src="/images/home/ajudamosProtetores/fish.webp"
              alt="Aquabit auxilia no gerenciamento de produção de peixes"
            />

            <h3>+ 200 mil ton/ano</h3>
            <p>gerenciadas pela nossa plataforma</p>
          </div>

          <div>
            <img
              src="/images/home/ajudamosProtetores/maps.webp"
              alt="Aquabit está presente em todas as regiões do Brasil"
            />

            <h3>+ 16 estados</h3>
            <p>estamos em todas as regiões do brasil</p>
          </div>

          <div>
            <img
              src="/images/home/ajudamosProtetores/cloud.webp"
              alt="Mais de quatro mil downloads do aplicativo da Aquabit"
            />

            <h3>+ 4 mil</h3>
            <p>downloads na Play Store e Apple Store</p>
          </div>
        </article>

        <div className="ajudamos-produtores__button">
          <Button
            title="COMEÇAR AGORA"
            onClick={() => setOpenFormModal(true)}
          />
        </div>
      </Container>
    </AjudamosProdutoresStyle>
  );
};

export default AjudamosProdutores;
