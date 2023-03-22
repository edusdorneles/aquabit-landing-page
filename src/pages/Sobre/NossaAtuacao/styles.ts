import styled from "styled-components";

export const NossaAtuacaoStyle = styled.section`
  .atuacao__container {
    margin-bottom: 80px;

    .atuacao__text {
      .atuacao__title h2 {
        font-size: ${(props) => props.theme.fontSize.title};
        color: ${(props) => props.theme.colors.primary};
        margin-bottom: 16px;
        text-align: center;
      }

      .atuacao__description {
        display: flex;
        justify-content: center;

        p {
          font-size: ${(props) => props.theme.fontSize.small};
          width: 310px;
          text-align: center;
        }
      }
    }

    .atuacao__image {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 0px;
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    .atuacao__container {
      display: flex;
      justify-content: space-between;

      .atuacao__text {
        .atuacao__title h2 {
          font-size: 36px;
          text-align: left;
        }

        .atuacao__description p {
          font-size: ${(props) => props.theme.fontSize.medium};
          width: 488px;
          text-align: left;
        }
      }

      .atuacao__image {
        transform: scale(1.8);
      }
    }
  }
`;
