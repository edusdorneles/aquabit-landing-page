import styled from "styled-components";

export const HomeStyle = styled.main`
  .home__default__text {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    .home__default__title h2 {
      color: ${(props) => props.theme.colors.textBlack};
      font-size: ${(props) => props.theme.fontSize.title};
    }

    .home__default__description {
      width: 310px;

      p {
        font-size: ${(props) => props.theme.fontSize.small};
        margin: 6px 0px 45px 0px;
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    .home__default__text {
      text-align: start;

      .home__default__title {
        width: 100%;
        h2 {
          font-size: ${(props) => props.theme.fontSize.extraTitle};
        }
      }

      .home__default__description {
        width: 480px;

        p {
          font-size: ${(props) => props.theme.fontSize.large};
          margin: 8px 0px 35px 0px;
        }
      }
    }
  }
`;
