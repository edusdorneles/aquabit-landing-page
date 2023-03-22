import styled from "styled-components";

export const ControleManejoStyle = styled.div`
  padding: 80px 0px;

  .controle-manejo__container {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;

    .controle-manejo__image--mobile img {
      width: 150px;
    }

    .controle-manejo__text {
      padding: 30px 0px 60px;

      &:last-child {
        padding-bottom: 0px;
      }

      h2 {
        font-size: ${(props) => props.theme.fontSize.extraLarge};
        color: ${(props) => props.theme.colors.primary};
      }

      p {
        font-size: ${(props) => props.theme.fontSize.small};
        text-align: justify;
      }
    }

    .controle-manejo__image--desktop {
      display: none;
    }
  }

  /* Adaotação Media Query */
  ${(props) => props.theme.media.desktop} {
    .controle-manejo__container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      .controle-manejo__image--mobile {
        display: none;
      }

      .controle-manejo__image--desktop {
        display: block;

        img {
          width: 300px;
        }
      }

      .controle-manejo__text {
        padding: 0px;
        height: 100%;
        display: flex;
        flex-direction: column;

        &:last-child {
          justify-content: flex-end;
        }

        h2 {
          font-size: ${(props) => props.theme.fontSize.extraLarge};
          color: ${(props) => props.theme.colors.primary};
        }

        p {
          font-size: ${(props) => props.theme.fontSize.small};          
        }
      }
    }
  }
`;
