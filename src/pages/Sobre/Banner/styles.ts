import styled from "styled-components";

export const BannerStyle = styled.section`
  height: 300px;
  background-image: url("/images/sobre-nos/banner/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .home__banner__container {
    height: 100%;
    padding: 0px 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;

    .home__banner__title h1 {
      color: ${(props) => props.theme.colors.textWhite};
      font-size: 24px;

      span {
        background-color: ${(props) => props.theme.colors.secondary};
        padding: 0px 8px 3px 8px;
      }
    }

    .home__banner__description {
      width: 190px;
      margin-top: 8px;

      h2 {
        color: ${(props) => props.theme.colors.textWhite};
        font-size: 20px;
        font-weight: 500;
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    height: 458px;
    background-position: top;

    .home__banner__container {
      .home__banner__title h1 {
        font-size: 38px;
      }

      .home__banner__description {
        width: 385px;

        h2 {
          font-weight: 500;
          font-size: 26px;
        }
      }
    }
  }
`;
