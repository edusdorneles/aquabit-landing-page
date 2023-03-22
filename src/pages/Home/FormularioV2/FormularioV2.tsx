// Styles
import { PraticidadeStyle } from "./styles";
import { Container } from "styles/Global";
import Form2 from "components/Contato/Form2/Form2";

const FormularioV2: React.FC = () => {
  return (
    <PraticidadeStyle>
      <Container className="praticidade__container">
        <div className="home__beneficios__image">
          <img
            src="/images/home/praticidade/cellphone.webp"
            alt="Aplicativo para controle na produção de peixes"
          />
        </div>

        <div className="home__img__description">
          <h1>
            <span>Produtores de peixes e camarões</span>{" "}
            <span>no controle dos tanques e lotes!</span>
          </h1>

          <h2>
            Somos uma plataforma de gestão para criação de <br /> peixes e
            camarões.
          </h2>

          <div className="home__banner__form">
            <Form2 />
          </div>
        </div>
      </Container>
    </PraticidadeStyle>
  );
};

export default FormularioV2;
