import CardAbout from "components/Cards/CardAbout/CardAbout";

// Styles
import { AquabitStyle } from "./styles";
import { Container } from "styles/Global";

const Aquabit: React.FC = () => {
  return (
    <AquabitStyle>
      <Container className="aquabit__container">
        <div className="aquabit__text">
          <div className="aquabit__title">
            <h2>A Aquabit</h2>
          </div>

          <div className="aquabit__description">
            <p>
              A Aquabit é uma empresa especializada na gestão da aquicultura, e
              está presente em formato de aplicativos para smartphone e versão
              Web para computadores, pensados juntos com o produtor e para o
              produtor.
            </p>
            <p>
              Surgiu em 2017 quando fomos campeões do Hackthon Aquitech que foi
              Organizado pelo SEBRAE e EMBRAPA no Piauí, em 2018 veio a chamar
              AQBITS. Só em dezembro do mesmo ano houve uma mudança da marca
              para AQUABIT. No segundo semestre de 2020 migramos para o Oeste do
              Paraná (Cascavel-PR), onde estamos sendo incubados e acelerados na
              FUNDETEC.
            </p>
          </div>
        </div>

        <div className="aquabit__cards">
          <CardAbout
            title="Nosso propósito"
            text="Para melhorar a gestão na aquicultura, organização dos dados e tomada de decisão, contribuindo para o sucesso da produção e desenvolvimento da cadeia produtiva."
            colorSecondary={true}
            proposito={true}
          />

          <CardAbout
            title="Nossa visão"
            text="Tornar a marca referência na América Latina, em soluções tecnológicas e inovadoras para o desenvolvimento da cadeia da piscicultura e carcinicultura até 2027."
          />

          <CardAbout
            title="Nossa missão"
            text="Trazer simplicidade e segurança na gestão de dados com tecnologias inovadoras, proporcionando sucesso aos produtores e fortalecendo a cadeia aquícola."
          />

          <CardAbout
            title="Quem faz a Aquabit"
            text="Nossas soluções são desenvolvidas pelos produtores, pois eles são quem definem as funcionalidades e melhorias necessárias. Nosso time é composto por especialistas em tecnologia, gestão, marketing e aquicultura."
            colorSecondary={true}
          />
        </div>
      </Container>
    </AquabitStyle>
  );
};

export default Aquabit;
