// Styles
import { BannerStyle } from "./styles";
import { Container } from "styles/Global";

const Banner: React.FC = () => {
  return (
    <BannerStyle>
      <Container className="home__banner__container">
        <div className="home__banner__title">
          <h1>
            Você já sabe produzir
            <br />
            <span>peixes ou camarões?</span>
          </h1>
        </div>
      </Container>
    </BannerStyle>
  );
};

export default Banner;
