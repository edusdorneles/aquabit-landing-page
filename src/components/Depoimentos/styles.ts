import styled from "styled-components";

export const DepoimentosStyle = styled.section`
  margin-top: 40px;
  background-image: url("/images/depoimentos/background-mobile.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .depoimentos__container {
    background-color: #f1f1f1 !important;
    .home__default__text {
      .home__default__title {
        width: 100%;
        text-align: center;
        margin-bottom: 50px;
      }
    }

    .depoimentos__slider {
      div {
        .carousel-item {
          .carousel-item__image {
            width: 100%;
            height: 80px;
            text-align: center;
            object-fit: cover;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
              width: 80px;
              height: 80px;
              border-radius: 40px;
            }
          }

          * {
            text-align: center;
          }

          .carousel-item__title h3 {
            color: ${(props) => props.theme.colors.textBlack};
            font-size: ${(props) => props.theme.fontSize.extraLarge};
          }

          .carousel-item__stars svg {
            color: ${(props) => props.theme.colors.primary};
            font-size: ${(props) => props.theme.fontSize.extraSmall};
            margin: 5px 0px 20px 0px;
          }

          .carousel-item__text p {
            color: ${(props) => props.theme.colors.textBlack};
            font-size: ${(props) => props.theme.fontSize.medium};
            font-weight: 500;
            margin-bottom: 65px;
          }

          .carousel-item__localization {
            .carousel-item__localization__title p {
              color: ${(props) => props.theme.colors.textBlack};
              font-size: ${(props) => props.theme.fontSize.small};
              font-weight: 500;
            }

            .carousel-item__localization__description p {
              font-size: ${(props) => props.theme.fontSize.extraSmall};
              padding: 2px 0px;

              &:last-child {
                margin-bottom: 35px;
              }
            }
          }
        }
      }

      /* Carousel */
      .rec-arrow {
        background-color: transparent;
        border: none;
        box-shadow: none;
        height: 20px;
        width: 20px;
        font-size: 14px;
        line-height: 20px;
        min-width: 20px;
      }

      .rec-dot {
        display: none;
      }
    }

    /* Children */
    .depoimentos__children {
      padding-bottom: 45px;
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    background-image: url("/images/depoimentos/background.webp");
    background-size: 100% 100%;
    margin-top: 100px;

    .depoimentos__container {
      background-color: #f1f1f1 !important;
      .depoimentos__slider {
        div {
          .carousel-item {
            .carousel-item__title h3 {
              font-size: 30px;
            }

            .carousel-item__stars svg {
              font-size: ${(props) => props.theme.fontSize.small};
            }

            .carousel-item__text {
              width: 575px;
              p {
                font-size: ${(props) => props.theme.fontSize.extraLarge};
              }
            }
          }
        }
      }
    }
  }
`;
