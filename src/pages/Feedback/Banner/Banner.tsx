// Styles
import { BannerStyle } from "./styles";
import { Container } from "styles/Global";

const Banner: React.FC = () => {
  return (
    <BannerStyle>
      <Container className="home__banner__container">
        <div className="home__banner__title">
          <h1>
            Confirmação de envio
            <br />
            <span>do formulário</span>
          </h1>
        </div>
      </Container>
    </BannerStyle>
  );
};

export default Banner;
