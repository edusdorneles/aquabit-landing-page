import styled from "styled-components";

export const ParceirosStyle = styled.section`
  padding: 40px 0px 60px 0px;

  .parceiros__container {
    .home__default__text {
      .home__default__title {
        width: 100%;
        text-align: center;
        margin-bottom: 50px;
      }
    }

    .parceiros__images {
      display: grid;
      align-items: center;
      justify-content: center;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-columns: auto;
      grid-column-gap: 33px;
      grid-row-gap: 33px;

      img {
        max-width: 140px;
        max-height: 90px;
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    padding: 40px 0px;

    .parceiros__container {
      .parceiros__images {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

        img {
          width: 270px;
          max-height: 160px;
        }
      }
    }
  }
`;
