import styled from "styled-components";

export const ArracoamentosStyle = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 80px 0px;

  .arracoamentos__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .arracoamentos__image--mobile img {
      width: 280px;
    }

    .arracoamentos__text {
      padding: 30px 0px 60px;

      &:last-child {
        padding-bottom: 0px;
      }

      h2 {
        font-size: ${(props) => props.theme.fontSize.extraLarge};
        color: ${(props) => props.theme.colors.textWhite};
      }

      p {
        font-size: ${(props) => props.theme.fontSize.small};
        color: ${(props) => props.theme.colors.textWhite};
        text-align: justify;
      }
    }

    .arracoamentos__image--desktop {
      display: none;
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    .arracoamentos__container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      .arracoamentos__image--mobile {
        display: none;
      }

      .arracoamentos__image--desktop {
        display: block;

        img {
          width: 560px;
          padding: 0px 20px;
        }
      }

      .arracoamentos__text {
        padding: 0px;

        h2 {
          font-size: ${(props) => props.theme.fontSize.extraLarge};
          color: ${(props) => props.theme.colors.textWhite};
        }

        p {
          font-size: ${(props) => props.theme.fontSize.small};          
        }
      }
    }
  }
`;
