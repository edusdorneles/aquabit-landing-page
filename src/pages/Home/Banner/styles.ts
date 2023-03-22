import { shade } from "polished";
import styled from "styled-components";

export const BannerStyle = styled.section`
  height: 648px;
  background-image: url("/images/home/banner/banner.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  @media (max-width: 1200px) {
    height: 500px;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    top: 0;
    left: 0;
    position: absolute;
  }

  .home__banner__container {
    height: 100%;
    padding: 0px 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 3;

    h1 {
      max-width: 705px;
      color: #fff;
      font-size: 60px;

      @media (max-width: 1200px) {
        font-size: 40px;
      }

      @media (max-width: 500px) {
        font-size: 30px;
      }
    }

    .home__banner__description {
      color: ${(props) => props.theme.colors.textBlack};
      font-size: 10px;

      h2 {
        font-weight: 300;
      }
    }

    .home__banner__propaganda {
      border-radius: ${(props) => props.theme.borderRadius};
      text-align: center;
      padding: 10px 14px;
      margin: 0px 33px;
      background-color: white;
      box-shadow: 0px 4px 4px #0003;
      position: absolute;
      bottom: -22px;
      left: 0;
      right: 0;

      h2 {
        color: ${(props) => props.theme.colors.primary};
        font-weight: 700;
        font-size: 20px;
      }
    }

    ul {
      padding: 2rem 0;

      li {
        color: ${(props) => props.theme.colors.textWhite};
        font-size: 20px;

        @media (max-width: 1200px) {
          font-size: 18px;
        }

        @media (max-width: 500px) {
          font-size: 15px;
        }
      }
    }

    button {
      display: flex;
      align-items: center;
      padding: 1rem 1.5rem;
      background-color: ${(props) => props.theme.colors.secondary};
      border: none;
      color: ${(props) => props.theme.colors.textWhite};
      border-radius: 0.25rem;
      font-weight: bold;
      font-size: 0.9rem;
      transition: all 0.4s;
      cursor: pointer;

      span {
        margin-left: 0.5rem;
        font-size: 1.1rem;
      }

      &:hover {
        background-color: ${(props) =>
          shade(0.2, props.theme.colors.secondary)};
      }

      @media (max-width: 1200px) {
        padding: 0.5rem 1.5rem;
        margin-bottom: 2rem;
      }
    }

    @media (max-width: 1200px) {
      .home__banner__description {
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
      }
      button {
        margin: 0 auto;
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    height: 680px;

    .home__banner__container {
      .home__banner__title h1 {
        color: ${(props) => props.theme.colors.textWhite};
        font-size: 38px;
        width: 580px;

        span {
          background-color: ${(props) => props.theme.colors.secondary};
          line-height: 50px;
        }
      }

      .home__banner__description {
        color: ${(props) => props.theme.colors.textWhite};
        display: block;
        width: 580px;

        h2 {
          font-weight: 300;
          font-size: 22px;
        }
      }

      .home__banner__propaganda {
        bottom: -30px;

        h2 {
          font-size: 36px;
        }
      }
    }
  }
`;
