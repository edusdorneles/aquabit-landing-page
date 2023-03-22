import styled from "styled-components";

export const FormModalStyle = styled.div`
  display: none;

  &.form-modal__container--active {
    z-index: 4;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .form-modal__content {
      border-radius: ${(props) => props.theme.borderRadius};
      background-color: ${(props) => props.theme.colors.primary};
      padding: 24px;
      width: 95%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;

      .form-modal__title {
        h2 {
          color: ${(props) => props.theme.colors.textWhite};
        }

        h3 {
          color: ${(props) => props.theme.colors.textWhite};
        }
      }

      form {
        margin-top: 22px;
      }

      .form-modal__close {
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
    &.form-modal__container--active {
      .form-modal__content {
        width: 516px;
      }
    }
  }
`;
