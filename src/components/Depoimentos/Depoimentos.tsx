import Carousel from "react-elastic-carousel";

// Styles
import { DepoimentosStyle } from "./styles";
import { Container } from "styles/Global";

// Icons
import { AiFillStar } from "react-icons/ai";

const Depoimentos: React.FC = ({ children }) => {
  const depoimentos = require("../../services/depoimentos.json");

  return (
    <DepoimentosStyle>
      <Container className="depoimentos__container">
        <div className="home__default__text">
          <div className="home__default__title">
            <h2>Depoimentos</h2>
          </div>
        </div>

        <div className="depoimentos__slider">
          <Carousel itemsToShow={1} isRTL={false}>
            {depoimentos.map((depoimento: Depoimento, idx: number) => (
              <div key={idx} className="carousel-item">
                <div className="carousel-item__image">
                  <img src={depoimento.image} alt={depoimento.imageAlt} />
                </div>

                <div className="carousel-item__title">
                  <h3>{depoimento.title}</h3>
                </div>

                <div className="carousel-item__stars">
                  {depoimento.stars === 1 && <AiFillStar />}

                  {depoimento.stars === 2 && (
                    <>
                      <AiFillStar />
                      <AiFillStar />
                    </>
                  )}

                  {depoimento.stars === 3 && (
                    <>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </>
                  )}

                  {depoimento.stars === 4 && (
                    <>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </>
                  )}

                  {depoimento.stars === 5 && (
                    <>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </>
                  )}
                </div>

                <div className="carousel-item__text">
                  <p>{depoimento.text}</p>
                </div>

                <div className="carousel-item__localization">
                  <div className="carousel-item__localization__title">
                    <p>{depoimento.name}</p>
                  </div>

                  <div className="carousel-item__localization__description">
                    <p>{depoimento.localization}</p>
                    <p>{depoimento.production}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="depoimentos__children">{children}</div>
      </Container>
    </DepoimentosStyle>
  );
};

export default Depoimentos;
