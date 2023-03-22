import styled from "styled-components";

export const StoreModalStyle = styled.div`
  display: none;

  &.store-modal__container--active {
    z-index: 2;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .store-modal__content {
      border-radius: ${(props) => props.theme.borderRadius};
      background-color: ${(props) => props.theme.colors.primary};
      padding: 24px;
      width: 350px;
      height: 210px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;

      .store-modal__title h2 {
        font-size: ${(props) => props.theme.fontSize.extraSmall};
        color: ${(props) => props.theme.colors.textWhite};
      }

      .store-modal__buttons {
        display: flex;
        flex-direction: column;

        svg {
          margin-right: 12px;
          font-size: 20px;
        }

        a {
          border-radius: ${(props) => props.theme.borderRadius};
          color: ${(props) => props.theme.colors.textBlack};
          font-size: ${(props) => props.theme.fontSize.extraSmall};
          display: flex;
          align-items: center;
          background-color: white;
          padding: 10px 14px;
          text-decoration: none;
          margin-top: 10px;
        }
      }

      .store-modal__close {
        position: absolute;
        top: 15px;
        right: 15px;

        svg {
          color: white;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    &.store-modal__container--active {
      .store-modal__content {
        width: 516px;
        height: 245px;

        .store-modal__title h2 {
          font-size: ${(props) => props.theme.fontSize.extraLarge};
        }

        .store-modal__buttons {
          display: flex;
          flex-direction: column;
          align-items: center;

          svg {
            font-size: 24px;
          }
          a {
            width: 265px;
          }
        }
      }
    }
  }
`;
