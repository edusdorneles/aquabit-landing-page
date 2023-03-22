import styled from "styled-components";

export const TextStyle = styled.div`
  background-image: url("/images/aumente-os-lucros/despesca-mobile.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 350px;

  .text__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .text__container__text {
      .text__container__text__title {
        h1 {
          color: ${(props) => props.theme.colors.textWhite};
          font-size: 1.8rem;
          text-align: center;
        }
      }

      .text__container__text__description {
        p {
          color: ${(props) => props.theme.colors.textWhite};
          font-size: 1.1rem;
          text-align: center;
          margin: 25px 0px;
        }
      }

      .text__container__text__button {
        a {
          width: 80%;
          max-width: 400px;
          height: 45px;
        }
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    background-color: ${(props) => props.theme.colors.primary};
    background-image: none;

    .text__container {
      .text__container__text {
        .text__container__text__title {
          h1 {
            font-size: 2.5rem;
          }
        }

        .text__container__text__description {
          p {
            font-size: 1.3rem;
            margin: 15px 0px 65px 0px;
          }
        }
      }
    }
  }
`;
