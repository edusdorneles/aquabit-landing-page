import styled from "styled-components";

export const WebEAppStyle = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 80px 0px;

  .web-e-app__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .web-e-app__image img {
      width: 280px;
      margin-bottom: 60px;
    }

    .web-e-app__text {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h2 {
        color: ${(props) => props.theme.colors.textWhite};
        font-size: ${(props) => props.theme.fontSize.extraLarge};
        text-align: center;
        margin-bottom: 20px;
      }

      p {
        color: ${(props) => props.theme.colors.textWhite};
        font-size: ${(props) => props.theme.fontSize.small};
        text-align: center;
        width: 280px;
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    .web-e-app__container {
      justify-content: space-between;
      flex-direction: row-reverse;

      .web-e-app__image img {
        width: 480px;
        margin-bottom: 0px;
      }

      .web-e-app__text {
        align-items: flex-start;

        h2 {
          text-align: left;
          width: 410px;
        }

        p {
          text-align: justify;
          width: 455px;
        }
      }
    }
  }
`;
