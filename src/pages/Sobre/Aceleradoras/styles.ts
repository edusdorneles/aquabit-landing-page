import styled from "styled-components";

export const AceleradorasStyle = styled.section`
  .aceleradoras__container {
    .aceleradoras__title {
      text-align: center;
      margin-bottom: 40px;

      h2 {
        color: ${(props) => props.theme.colors.textBlack};
        font-size: ${(props) => props.theme.fontSize.title};
      }
    }

    .aceleradoras__images {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 80px;
      justify-items: center;

      .aceleradoras__images--wrapper {
        display: none;
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    .aceleradoras__container {
      .aceleradoras__title {
        margin-bottom: 60px;
      }

      .aceleradoras__images {
        grid-template-columns: 1fr 0.1fr 1fr 0.1fr 1fr;
        justify-items: center;

        .aceleradoras__images--wrapper {
          display: flex;
          height: 60px;
          width: 1px;
          background-color: #626262;
        }
      }
    }
  }
`;
