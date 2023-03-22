import Carousel from "react-elastic-carousel";
import { useGlobal } from "providers/Global";
import Button from "components/Button/Button";

// Styles
import { PlanosStyle } from "./styles";
import { Container } from "styles/Global";

// Icons
import { BiCheck } from "react-icons/bi";

const Planos: React.FC = () => {
  const { setOpenStoreModal, setOpenFormModal } = useGlobal();
  const brakpoints = [
    { itemsToShow: 1, width: 1, itemsToScroll: 1 },
    { itemsToShow: 2, width: 1000, itemsToScroll: 2 },
  ];

  return (
    <PlanosStyle>
      <Container className="planos__container">
        <div className="home__default__text">
          <div className="home__default__title">
            <h2>Planos</h2>
          </div>

          <div className="home__default__description">
            <p>
              Temos o melhor plano que se encaixa na sua produção, venha falar
              com a gente que iremos te auxiliar.
            </p>
          </div>
        </div>

        <div className="planos__tables__container planos">
          {/* Plano Personalizado */}
          <div className="planos__table--personalizado">
            <div className="planos__table__header">
              <h3>
                Plano <br /> Personalizado
              </h3>
            </div>

            <div className="planos__table__content">
              <div className="planos__table__content__text">
                <p>
                  Não há limitação da quantidade de tanques e todos os módulos
                  estão desbloqueados
                </p>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Cadastro De Tanques e Lotes</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo de Produção</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo de Vendas</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo Financeiro</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo Qualidade de Água e Sanidade</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Programa Alimentar</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo de Relatórios</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Permite cadastrar vários usuários</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Cadastro de várias propriedades</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Versão mobile (Android e IOS)</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Versão Web (Acesso pelo computador)</p>
                </div>
              </div>
            </div>

            <div className="planos__table__button">
              <Button
                title="QUERO TESTAR"
                onClick={() => setOpenFormModal(true)}
              />
            </div>
          </div>

          <div className="planos__table">
            <div className="planos__table__header2">
              <h3>
                Plano <br /> Gratuito
              </h3>
            </div>

            <div className="planos__table__content">
              <div className="planos__table__content__text">
                <p>
                  Limitação da quantidade de tanques (até 5ton) e alguns módulos
                  estão bloqueados
                </p>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Cadastro De Tanques e Lotes</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo de Produção</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo de Vendas</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo Financeiro</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Versão mobile (Android e IOS)</p>
                </div>
              </div>
            </div>

            <div className="planos__table__button--blue">
              <Button
                outline
                title="QUERO TESTAR"
                onClick={() => setOpenStoreModal(true)}
              />
            </div>
          </div>
        </div>

        <Carousel
          isRTL={false}
          breakPoints={brakpoints}
          className="planos__tables__container carrosel"
          outerSpacing={20}
          itemPadding={[0, 15]}
        >
          <div className="planos__table">
            <div className="planos__table__header2">
              <h3>
                Plano <br /> Gratuito
              </h3>
            </div>

            <div className="planos__table__content">
              <div className="planos__table__content__text">
                <p>
                  Limitação da quantidade de tanques (até 5ton) e alguns módulos
                  estão bloqueados
                </p>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Cadastro De Tanques e Lotes</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo de Produção</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo de Vendas</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo Financeiro</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Versão mobile (Android e IOS)</p>
                </div>
              </div>
            </div>

            <div className="planos__table__button--blue">
              <Button
                outline
                title="QUERO TESTAR"
                onClick={() => setOpenStoreModal(true)}
              />
            </div>
          </div>

          {/* Plano Personalizado */}
          <div className="planos__table--personalizado">
            <div className="planos__table__header">
              <h3>
                Plano <br /> Personalizado
              </h3>
            </div>

            <div className="planos__table__content">
              <div className="planos__table__content__text">
                <p>
                  Não há limitação da quantidade de tanques e todos os módulos
                  estão desbloqueados
                </p>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Cadastro De Tanques e Lotes</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo de Produção</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo de Vendas</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo Financeiro</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo Qualidade de Água e Sanidade</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Programa Alimentar</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Módulo de Relatórios</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Permite cadastrar vários usuários</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Cadastro de várias propriedades</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Versão mobile (Android e IOS)</p>
                </div>

                <div className="table__content__list">
                  <BiCheck />
                  <p>Versão Web (Acesso pelo computador)</p>
                </div>
              </div>
            </div>

            <div className="planos__table__button">
              <Button
                title="QUERO TESTAR"
                onClick={() => setOpenFormModal(true)}
              />
            </div>
          </div>
        </Carousel>
      </Container>
    </PlanosStyle>
  );
};

export default Planos;
