import styled from "styled-components";
import { shade } from "polished";

export const PlanosStyle = styled.section`
  margin-top: 60px;

  .planos__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 1200px) {
      padding: 0;
    }
    .home__default__text {
      .home__default__description {
        width: 310px;

        @media (max-width: 900px) {
          width: 90%;
          p {
            width: 100%;
          }
        }
      }
      h2 {
        font-size: 40px;
        font-weight: 900;
      }
    }

    .planos__tables__container {
      .planos__table,
      .planos__table--personalizado {
        background: #f0f0f0;
        border-radius: 3rem;
        padding: 1rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 40px;
        width: 337px;
        height: 820px;

        .planos__table__header {
          border-top-right-radius: ${(props) => props.theme.borderRadius};
          border-top-left-radius: ${(props) => props.theme.borderRadius};
          color: ${(props) => props.theme.colors.textWhite};
          padding: 19px 13px;

          h3 {
            font-weight: 900;
            font-size: 40px;
          }
        }

        .planos__table__header2 {
          border-top-right-radius: ${(props) => props.theme.borderRadius};
          border-top-left-radius: ${(props) => props.theme.borderRadius};
          color: ${(props) => props.theme.colors.textBlack};
          padding: 19px 13px;

          h3 {
            font-weight: 900;
            font-size: 40px;
          }
        }

        .planos__table__content {
          padding: 14px;
          min-height: 580px !important;

          .planos__table__content__text {
            p {
              font-size: 14px;
            }

            .table__content__list {
              display: flex;
              align-items: center;
              padding-top: 18px;

              svg {
                color: #555555;
                width: 23px;
                height: 23px;
                margin-right: 6px;
              }

              p {
                color: #555555;
                font-size: 16px;
                font-weight: 500;
              }
            }

            .table__content__list--disabled {
              display: flex;
              align-items: center;
              padding-top: 18px;

              svg {
                color: white;
                width: 23px;
                height: 23px;
                margin-right: 6px;
              }

              p {
                text-decoration: line-through;
                color: #909090;
                font-size: ${(props) => props.theme.fontSize.small};
                font-weight: 500;
              }
            }
          }

          .planos__table__content__button {
            padding: 20px;
          }
        }

        .planos__table__button {
          display: flex;
          align-items: center !important;
          justify-content: center !important;

          margin-left: 0px !important;
          a {
            color: ${(props) => props.theme.colors.textWhite};
            border-radius: ${(props) => props.theme.borderRadius};
            transition: ${(props) => props.theme.transition};
            font-size: ${(props) => props.theme.fontSize.extraSmall};
            text-decoration: none;
            width: 144px;
            height: 30px;
            display: flex;
            align-items: center !important;
            justify-content: center !important;

            &:hover {
              background-color: ${(props) =>
                shade(0.2, props.theme.colors.secondary)};
            }
          }
        }

        .planos__table__button--blue {
          button {
            color: ${(props) => props.theme.colors.secondary};
            border: 2px solid #fff;
            background-color: #fff;

            &:hover {
              background-color: ${shade(0.2, "#FFFFFF")};
              border: 2px solid ${shade(0.2, "#FFFFFF")};
            }
          }
        }
      }

      .planos__table--personalizado {
        background: linear-gradient(140deg, #007ebb 13.8%, #086593 89.06%);

        .planos__table__content {
          .planos__table__content__text {
            p {
              color: ${(props) => props.theme.colors.textWhite};
            }

            .table__content__list {
              svg {
                color: ${(props) => props.theme.colors.textWhite};
              }
              p {
                color: ${(props) => props.theme.colors.textWhite};
              }
            }
          }

          .planos__table__content__button {
            padding: 20px;

            margin: 12px 0px 4px 0px;
            display: flex;
            align-items: center;
            justify-content: center;

            a {
              color: ${(props) => props.theme.colors.textWhite};
              font-size: ${(props) => props.theme.fontSize.medium};
              border: 1px solid ${(props) => props.theme.colors.textWhite};
              border-radius: ${(props) => props.theme.borderRadius};
              transition: ${(props) => props.theme.transition};
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 500;
              text-decoration: none;
              width: 145px;
              height: 30px;

              &:hover {
                background-color: ${(props) =>
                  shade(0.3, props.theme.colors.primary)};
              }

              svg {
                font-size: 16px;
                margin-left: 6px;
              }
            }
          }
        }
      }
    }
    @media (max-width: 1200px) {
      .carrosel {
        display: flex;
        flex-direction: column;
        align-self: center;
      }
      .planos {
        display: none;
      }
      .rec-arrow {
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.textWhite};
        display: none;
      }
      .rec-arrow:disabled {
        opacity: 0.4;
      }

      .rec-dot {
        background-color: #b5b5b5;
        box-shadow: none;
        width: 13px;
        height: 13px;
        margin-bottom: 2rem;
      }
      .rec-dot_active {
        background-color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    background-color: ${(props) => props.theme.colors.background};
    .planos__container {
      .home__default__text {
        width: 100%;
        text-align: center;
        .home__default__description {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          p {
            width: 520px;
          }
          @media (max-width: 900px) {
            p {
              width: 90%;
            }
          }
        }
      }

      .planos__tables__container {
        width: 100%;
        display: flex;
        justify-content: space-evenly;

        .planos__table,
        .planos__table--personalizado {
          width: 421px;

          .planos__table__button {
            margin-left: 42px;
            justify-content: flex-start;
          }

          .planos__table__content__text {
            .table__content__list--disabled {
              &:last-child {
                margin-bottom: 40px;
              }
            }
          }
        }
      }
      .carrosel {
        display: none;

        .rec-arrow {
          background-color: ${(props) => props.theme.colors.secondary};
          color: ${(props) => props.theme.colors.textWhite};
        }
        .rec-arrow:disabled {
          opacity: 0.4;
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
      }
    }
  }
`;
