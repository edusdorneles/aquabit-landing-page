import styled from "styled-components";
import { shade } from "polished";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0px 15px;
  position: fixed;
  top: 0;
  z-index: 4;

  .header__container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header__title {
      a {
        text-decoration: none;

        img {
          display: flex;
          height: 40px;
        }
      }
    }

    .header__menu {
      .header__menu--mobile svg {
        color: ${(props) => props.theme.colors.textWhite};
        font-size: 28px;
        display: flex;
        cursor: pointer;
      }

      .header__menu--desktop {
        display: none;
      }

      .header__mobile__menu--active {
        display: block;
        background-color: ${(props) => props.theme.colors.primary};
        z-index: 1;
        position: absolute;
        height: calc(100vh - 59px);
        width: 100%;
        top: 59px;
        right: 0px;

        nav ul {
          margin-top: 50px;

          li {
            a {
              color: ${(props) => props.theme.colors.textWhite};
              transition: ${(props) => props.theme.transition};
              font-size: ${(props) => props.theme.fontSize.small};
              width: 100%;
              text-decoration: none;
              padding: 15px 0px;
              height: 100%;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              &:hover {
                background-color: ${(props) =>
                  shade(0.3, props.theme.colors.primary)};
              }

              &.active-page {
                background-color: ${(props) =>
                  shade(0.3, props.theme.colors.primary)};
              }
            }
          }
        }
      }
    }

    .header__buttons {
      display: none;
    }

    .header__buttons--mobile {
      margin-top: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .header__buttons--login a {
        color: ${(props) => props.theme.colors.primary} !important;
        border-radius: ${(props) => props.theme.borderRadius};
        transition: ${(props) => props.theme.transition};
        background-color: white;
        margin-right: 0px;
        margin-bottom: 15px;
        padding: 12px;
        cursor: pointer;
        display: block;
        text-align: center;
        text-decoration: none;
        width: 157px !important;

        &:hover {
          background-color: ${(props) => shade(0.1, "#FFFFFF")};
        }

        svg {
          color: ${(props) => props.theme.colors.primary};
          margin-right: 9px;
          font-size: 11px;
        }
      }

      .header__buttons--teste-gratis button {
        color: ${(props) => props.theme.colors.textWhite};
        font-size: ${(props) => props.theme.fontSize.small};
        transition: ${(props) => props.theme.transition};
        border: 2px solid ${(props) => props.theme.colors.textWhite};
        border-radius: ${(props) => props.theme.borderRadius};
        background-color: transparent;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        width: 157px;

        &:hover {
          background-color: ${(props) =>
            shade(0.3, props.theme.colors.primary)};
        }

        svg {
          margin-left: 9px;
          font-size: 20px;
        }
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    .header__container {
      .header__title {
        width: 250px;
        a img {
          height: 45px;
        }
      }

      .header__menu {
        .header__menu--mobile {
          display: none;
        }

        .header__menu--desktop {
          display: block;

          nav ul {
            display: flex;

            li {
              list-style: none;
              height: 60px;
              width: 134px;

              a {
                font-size: ${(props) => props.theme.fontSize.small};
                color: ${(props) => props.theme.colors.textWhite};
                transition: ${(props) => props.theme.transition};
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;

                &:hover {
                  background-color: ${(props) =>
                    shade(0.3, props.theme.colors.primary)};
                }

                &.active-page {
                  background-color: ${(props) =>
                    shade(0.3, props.theme.colors.primary)};
                }
              }
            }
          }
        }

        .header__buttons--mobile {
          display: none;
        }
      }

      .header__buttons {
        display: flex;
        align-items: center;

        .header__buttons--login a {
          color: ${(props) => props.theme.colors.primary} !important;
          border-radius: ${(props) => props.theme.borderRadius};
          transition: ${(props) => props.theme.transition};
          background-color: white;
          margin-right: 15px;
          margin-bottom: 0px;
          padding: 12px;
          cursor: pointer;
          display: block;
          text-align: center;
          text-decoration: none;
          width: 157px;

          &:hover {
            background-color: ${(props) => shade(0.1, "#FFFFFF")};
          }

          svg {
            color: ${(props) => props.theme.colors.primary};
            margin-right: 9px;
            font-size: 11px;
          }
        }

        .header__buttons--teste-gratis button {
          color: ${(props) => props.theme.colors.textWhite};
          font-size: ${(props) => props.theme.fontSize.small};
          transition: ${(props) => props.theme.transition};
          border: 2px solid ${(props) => props.theme.colors.textWhite};
          border-radius: ${(props) => props.theme.borderRadius};
          background-color: transparent;
          padding: 10px 12px;
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          width: 157px;

          &:hover {
            background-color: ${(props) =>
              shade(0.3, props.theme.colors.primary)};
          }

          svg {
            margin-left: 9px;
            font-size: 20px;
          }
        }
      }
    }
  }
`;
