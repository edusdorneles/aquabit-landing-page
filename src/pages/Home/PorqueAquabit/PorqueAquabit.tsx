// Styles
import { PorqueAquabitStyle } from "./styles";
import { Container } from "styles/Global";

const PorqueAquabit: React.FC = () => {
  return (
    <PorqueAquabitStyle>
      <Container className="home__porque-aquabit__container">
        <div className="home__banner__propaganda">
          <h2>Por que usar Aquabit!</h2>
        </div>
        <article className="home__porque-aquabit__icos">
          <div className="porque-aquabit__icos__container">
            <div className="porque-aquabit__icos__ico">
              <img
                src="/images/home/porque-aquabit/001-money.webp"
                alt="Elimine os prejuízos na produção de peixes"
              />
            </div>

            <div className="porque-aquabit__icos__text">
              <h3>
                Elimine os prejuízos na sua produção controlando todos os
                processos durante o ciclo/safra de peixes e camarões.
              </h3>
            </div>
          </div>

          <div className="porque-aquabit__icos__container">
            <div className="porque-aquabit__icos__ico">
              <img
                src="/images/home/porque-aquabit/feeding.webp"
                alt="Reduza o custo da ração na produção de peixes"
              />
            </div>

            <div className="porque-aquabit__icos__text">
              <h3>
                Reduza até 10% dos seus custos com ração usada nos
                tanques/viveiros de peixes ou camarões.
              </h3>
            </div>
          </div>

          <div className="porque-aquabit__icos__container">
            <div className="porque-aquabit__icos__ico">
              <img
                src="/images/home/porque-aquabit/computer.webp"
                alt="Controle completo da produção de peixes de forma simplificada"
              />
            </div>

            <div className="porque-aquabit__icos__text">
              <h3>
                Tenha o controle completo da sua produção e a facilidade na
                tomada de decisões.
              </h3>
            </div>
          </div>
        </article>
      </Container>
    </PorqueAquabitStyle>
  );
};

export default PorqueAquabit;
