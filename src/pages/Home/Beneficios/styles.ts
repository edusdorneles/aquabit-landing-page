import styled from "styled-components";

export const BeneficiosStyle = styled.section`
  margin-top: 0 !important;
  background: linear-gradient(280.42deg, #00d2ff 13.8%, #00a0ff 89.06%);

  .home__beneficios__title {
    width: 100%;
    text-align: center;

    h2 {
      padding: 30px;
      font-size: 60px;
      color: ${(props) => props.theme.colors.textWhite} !important;
    }
  }

  .home__beneficios__container {
    height: 100%;
    padding-top: 30px;

    .home__beneficios__description {
      h2 {
        color: ${(props) => props.theme.colors.textWhite};
      }
    }

    .home__beneficios__list {
      margin: 2rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;

      .home__beneficios__list__container {
        display: flex;
        margin-bottom: 25px;

        .beneficios__list__check {
          width: 40px;

          @media (max-width: 1200px) {
            width: 30px;

            svg {
              font-size: 18px;
            }
          }

          svg {
            color: ${(props) => props.theme.colors.textWhite};
            font-size: 24px;
          }
        }

        .beneficios__list__text {
          width: 264px;

          p {
            color: ${(props) => props.theme.colors.textWhite};
            font-size: ${(props) => props.theme.fontSize.large};
            font-weight: 500;
            text-align: left;
            @media (max-width: 1200px) {
              font-size: 16px;
            }
          }
        }
      }
    }

    .home__beneficios__image {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 290px;
        padding-bottom: 20px;
      }
    }
  }

  .home__beneficios__button {
    padding-bottom: 30px;
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    .home__beneficios__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      padding-top: 55px;

      .home__beneficios__text {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        .home__beneficios__title {
          width: 100%;

          h2 {
            color: ${(props) => props.theme.colors.textWhite} !important;
          }
        }

        .home__beneficios__list {
          align-items: flex-start;

          .home__beneficios__list__container {
            .beneficios__list__check {
              width: 40px;
              svg {
                font-size: 26px;
                @media (max-width: 1200px) {
                  font-size: 18px;
                }
              }
            }

            .beneficios__list__text {
              width: 100%;

              p {
                font-size: ${(props) => props.theme.fontSize.large};
              }
            }
          }
        }
      }

      .home__beneficios__image {
        justify-content: flex-end;

        img {
          width: 75%;
        }
      }
    }

    .home__beneficios__button {
      padding-bottom: 55px;
    }
  }
`;
