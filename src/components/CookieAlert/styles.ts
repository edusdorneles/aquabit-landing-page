import styled from "styled-components";
import { shade } from "polished";

export const CookieAlertStyle = styled.div`
  display: none;

  &.cookie-alert--active {
    display: block;
    z-index: 99;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .cookie-alert__container {
    background-color: ${(props) => props.theme.colors.primary};
    height: 343px;
    width: 100%;
    bottom: 0;
    right: 0;
    padding: 20px;

    .cookie__container {
      .cookie__text {
        color: ${(props) => props.theme.colors.textWhite};

        .cookie__title h3 {
          font-size: ${(props) => props.theme.fontSize.small};
          margin-bottom: 10px;
        }

        .cookie__description p {
          font-size: ${(props) => props.theme.fontSize.extraSmall};
          margin-bottom: 28px;
        }
      }

      .cookie__buttons button {
        border-radius: ${(props) => props.theme.borderRadius};
        font-size: ${(props) => props.theme.fontSize.extraSmall};
        transition: ${(props) => props.theme.transition};
        border: none;
        width: 100%;
        height: 39px;
        margin-bottom: 10px;
        cursor: pointer;

        &:hover {
          background-color: ${(props) =>
            shade(0.2, props.theme.colors.textWhite)};
        }

        &.cookie__button--personalizado {
          background-color: ${(props) => props.theme.colors.secondary};
          color: ${(props) => props.theme.colors.textWhite};

          &:hover {
            background-color: ${(props) =>
              shade(0.2, props.theme.colors.secondary)};
          }
        }
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    .cookie-alert__container {
      height: 102px;

      .cookie__container {
        display: flex;
        justify-content: space-between;

        .cookie__text {
          width: 55%;

          .cookie__title h3 {
            margin-bottom: 8px;
          }
          .cookie__description p {
            margin: 0px;
          }
        }

        .cookie__buttons {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          width: 45%;

          button {
            width: 160px;
          }
        }
      }
    }
  }
`;
