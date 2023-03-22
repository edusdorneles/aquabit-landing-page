import styled from "styled-components";

export const ContatoStyle = styled.section`
  padding: 55px 0px;
  background-image: url("/images/sobre-nos/banner/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 6%;

  .contato__container {
    .home__default__text {
      text-align: left;

      .home__default__title {
        width: 300px;

        h2 {
          color: ${(props) => props.theme.colors.textWhite};
        }
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    .contato__container {
      .home__default__text {
        .home__default__title {
          width: 100%;
          h2 {
            width: 570px;
          }
        }
      }
    }
  }
`;
