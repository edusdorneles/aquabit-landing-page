import styled from "styled-components";

export const CardAboutStyle = styled.div`
  border: 1px solid #d9d9d9;
  display: flex;
  width: 312px;
  height: 247px;

  .card__image {
    width: 107px;
    background-image: url("/images/sobre-nos/cards/card-blue.png");
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 0px 10px;

    h2 {
      color: ${(props) => props.theme.colors.textWhite};
      width: 107px;
      font-size: 26px;

      &.card__image__proposito {
        word-break: break-all;
      }
    }

    &.card__image--not-default {
      background-image: url("/images/sobre-nos/cards/card-orange.png");
    }
  }

  .card__text {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px;

    p {
      font-size: ${(props) => props.theme.fontSize.small};
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    width: 560px;
    height: 196px;

    .card__image {
      width: 156px;
      padding: 0px 16px;

      h2 {
        width: 156px;
        font-size: 36px;
        font-weight: 800;
      }
    }

    .card__text {
      padding: 30px;
    }
  }
`;
