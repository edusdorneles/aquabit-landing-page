import styled from "styled-components";

export const AjudamosProdutoresStyle = styled.section`
  padding: 45px;
  background-color: ${(props) => props.theme.colors.primary};
  .ajudamos-produtores__container {
    .ajudamos-produtores__text {
      .home__default__text {
        text-align: center;
        margin-bottom: 2rem;

        .home__default__title h3 {
          font-size: 35px;
          color: ${(props) => props.theme.colors.textWhite};
        }

        .home__default__description p {
          color: ${(props) => props.theme.colors.textWhite};
        }
      }
    }

    .ajudamos-produtores__numeros {
      margin-bottom: 30px;

      img {
        width: 128px;
        height: 128px;
      }

      div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding-bottom: 20px;

        h3 {
          color: ${(props) => props.theme.colors.textWhite};
          font-size: 30px;
        }

        p {
          color: ${(props) => props.theme.colors.textWhite};
          font-size: ${(props) => props.theme.fontSize.medium};
          width: 210px;
        }
      }
    }
    @media (max-width: 900px) {
      button {
        display: none;
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    .ajudamos-produtores__container {
      display: flex;
      justify-content: center;
      flex-direction: column;

      .ajudamos-produtores__text {
        .home__default__text {
          .home__default__title h3 {
            width: 100%;
          }
        }
      }

      .ajudamos-produtores__numeros {
        display: flex;
        align-items: flex-start;
        margin-top: 22px;

        img {
          width: 128px;
          height: 128px;
          margin-bottom: 1rem;

          @media (max-width: 900px) {
            margin-bottom: none;
          }
        }

        div {
          h3 {
            font-size: 31px;
          }
        }
      }
    }
  }
`;
