import Button from "components/Button/Button";
import Carousel from "react-elastic-carousel";
import { useGlobal } from "providers/Global";

// Styles
import { PraticidadeStyle } from "./styles";
import { Container } from "styles/Global";

// Icons
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Praticidade: React.FC = () => {
  const { setOpenFormModal } = useGlobal();

  return (
    <PraticidadeStyle>
      <Container className="praticidade__container">
        <div className="praticidade__videos">
          <div className="home__default__text">
            <div className="home__default__title">
              <h2>A praticidade do Aquabit</h2>
            </div>

            <div className="home__default__description">
              <p>
                Faça uma gestão descomplicada de todas as fases da sua produção! Veja como é fácil usar a nossa
                ferramenta.
              </p>
            </div>
          </div>

          <Carousel className="praticidade__carousel" itemsToShow={1} isRTL={false}>
            <iframe
              loading="lazy"
              src="https://www.youtube.com/embed/iYImw0Zpm54"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />

            <iframe
              loading="lazy"
              src="https://www.youtube.com/embed/LBW7zsB0Vlg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />

            <iframe
              loading="lazy"
              src="https://www.youtube.com/embed/uj5toS9AEUQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </Carousel>

          <div className="praticidade__buttons">
            <Button title="COMECE JÁ" onClick={() => setOpenFormModal(true)} />

            <div className="praticidade__buttons--stores">
              <a
                href="https://apps.apple.com/br/app/aquabit/id1491215734?l=en"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpenFormModal(false)}
              >
                <FaApple />
                App Store
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.aquabitapp.aquabitApp.cadernoDeManejo&pli=1"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpenFormModal(false)}
              >
                <FaGooglePlay />
                Google Play
              </a>
            </div>
          </div>
        </div>

        <div className="praticidade__text">
          <div className="home__default__text">
            <div className="home__default__title">
              <h2>Quer acabar com seus prejuízos, ter mais lucro e ainda manter a qualidade da sua produção?</h2>
            </div>

            <p>
              A AQUABIT é para você. A ferramenta é a mais completa e intuitiva plataforma de gestão para a produção da
              piscicultor e carcinicultor. Seja você criador de tilápia, peixe nativo ou camarão; com o aplicativo você
              faz a gestão dos tanques/viveiros, da produção, qualidade da água, distribuição da ração, vendas,
              financeiro. Todo o processo produtivo vai estar no controle das suas mãos. Pare de perder dinheiro,
              diminua o tempo de ciclo da sua produção e aumente seus ganhos!
            </p>
          </div>
        </div>
      </Container>
    </PraticidadeStyle>
  );
};

export default Praticidade;
