import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  position: sticky;
  top: 100%;

  .footer__container {
    .footer__text {
      padding: 40px 0px;

      div ul {
        padding-bottom: 40px;

        .footer__text__title {
          color: ${(props) => props.theme.colors.textWhite};
          font-size: ${(props) => props.theme.fontSize.medium};
          font-weight: 400;
          margin-bottom: 8px;
        }

        li,
        li a {
          font-size: ${(props) => props.theme.fontSize.large};
          color: ${(props) => props.theme.colors.textWhite};
          list-style: none;
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 4px;
        }
      }

      .footer__text__midia {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .footer__media__image img {
          width: 240px;
          margin-bottom: 18px;
        }

        .footer__media__social {
          width: 220px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          align-items: center;

          svg {
            color: ${(props) => props.theme.colors.textWhite};
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }

  .footer__copyright {
    background-color: #005d8a;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 12px 4px;

    p {
      color: ${(props) => props.theme.colors.textWhite};
      font-size: ${(props) => props.theme.fontSize.extraSmall};
    }
  }

  /* Adaptação Media Quer */
  ${(props) => props.theme.media.desktop} {
    .footer__container {
      .footer__text {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
      }
    }
  }
`;
