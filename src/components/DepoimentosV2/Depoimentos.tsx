import Carousel from "react-elastic-carousel";

// Styles
import { DepoimentosStyle } from "./styles";
import { Container } from "styles/Global";

const DepoimentosV2: React.FC = ({ children }) => {
  const depoimentos = require("../../services/depoimentos.json");

  const brakpoints = [
    { itemsToShow: 1, width: 1, itemsToScroll: 1 },
    { itemsToShow: 2, width: 1000, itemsToScroll: 2 },
  ];

  return (
    <DepoimentosStyle>
      <Container className="depoimentos__container">
        <div className="home__default__text">
          <div className="home__default__title">
            <h2>Depoimentos</h2>
          </div>
        </div>

        <div className="depoimentos__slider">
          <Carousel isRTL={false} breakPoints={brakpoints}>
            {depoimentos.map((depoimento: Depoimento, idx: number) => (
              <div key={idx} className="carousel-item">
                <div className="carousel-item__image">
                  <img src={depoimento.image} alt={depoimento.imageAlt} />
                </div>

                <div>
                  <div className="carousel-item__text">
                    <p>{depoimento.text}</p>
                  </div>

                  <div className="carousel-item__localization">
                    <span>
                      <p>{depoimento.name}</p>
                      <p>{depoimento.localization}</p>
                      <p>{depoimento.production}</p>
                    </span>
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

export default DepoimentosV2;
