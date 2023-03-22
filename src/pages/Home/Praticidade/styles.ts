import styled from "styled-components";

export const PraticidadeStyle = styled.section`
  padding: 35px 0px;
  background-color: #f0f0f0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 0px !important;

  .praticidade__container {
    display: flex;
    flex-direction: column;

    .praticidade__videos {
      width: 100%;
      height: 100%;

      .home__default__description {
        width: 100%;

        p {
          font-size: 20px;
        }
      }

      .praticidade__carousel {
        iframe {
          width: 100%;
          height: 320px;
        }
      }

      .praticidade__buttons {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin: 10px 0px 20px 0px;

        .praticidade__buttons--stores {
          display: flex;
          flex-direction: column;
          width: 100%;

          svg {
            margin-right: 12px;
            font-size: 20px;
          }

          a {
            border-radius: ${(props) => props.theme.borderRadius};
            color: ${(props) => props.theme.colors.textBlack};
            font-size: ${(props) => props.theme.fontSize.extraSmall};
            border: 2px solid ${(props) => props.theme.colors.primary};
            transition: ${(props) => props.theme.transition};
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 14px;
            text-decoration: none;
            margin-top: 10px;
            width: 100%;

            &:hover {
              background-color: white;
            }
          }
        }
      }
    }

    .praticidade__text {
      .home__default__title {
        margin-bottom: 20px;
      }

      .home__default__text {
        p {
          font-size: ${(props) => props.theme.fontSize.large};
        }
      }
    }
  }

  /* Adaptaçao Media Query */
  ${(props) => props.theme.media.desktop} {
    padding: 55px 0px;
    margin-bottom: 50px;
    background-size: 100% 100%;

    .praticidade__container {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 50px;

      .praticidade__videos {
        .praticidade__buttons {
          flex-direction: row;
          justify-content: space-between;

          .praticidade__buttons--stores {
            width: auto;
          }
        }
      }
    }

    /* Carousel */
    .rec-slider-container {
      margin: 0;
    }
  }

  /* Carousel */
  .rec-arrow {
    display: none;
  }

  .rec-dot {
    background-color: #b5b5b5;
    box-shadow: none;
    width: 8px;
    height: 8px;
  }

  .rec-dot_active {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
