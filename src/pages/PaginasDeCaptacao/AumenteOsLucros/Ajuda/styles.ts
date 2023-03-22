import styled from "styled-components";

export const AjudaStyle = styled.div`
  min-height: 450px;
  padding: 20px 0px;

  .ajuda__container {
    .ajuda__container__text {
      .ajuda__container__text__title {
        text-align: center;
        margin-bottom: 15px;

        h3 {
          font-size: 1.1rem;
        }
      }

      .ajuda__container__text__description {
        .ajuda__container__text__description--title {
          margin-bottom: 15px;
        }

        p {
          text-align: justify;
          margin-bottom: 15px;
        }
      }

      .ajuda__container__text__button {
        margin-top: 25px;

        a {
          height: 45px;
          width: 80%;
        }
      }
    }

    .ajuda__container__image {
      img {
        width: 100%;
        max-width: 280px;
        margin: 40px 0px;
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    background-image: url("images/aumente-os-lucros/despesca.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .ajuda__container {
      display: flex;
      align-items: center;
      justify-content: center;

      .ajuda__container__text {
        border-radius: ${(props) => props.theme.borderRadius};
        background-color: white;
        width: 40%;
        padding: 30px;
        max-height: 410px;

        .ajuda__container__text__title {
          h3 {
            font-size: 1.5rem;
          }
        }
      }

      .ajuda__container__image {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          max-width: 80%;
          padding: 40px;
        }
      }
    }
  }
`;
