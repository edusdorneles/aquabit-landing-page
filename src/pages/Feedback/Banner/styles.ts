import styled from "styled-components";

export const BannerStyle = styled.section`
  height: 283px;
  background-color: ${(props) => props.theme.colors.primary};

  .home__banner__container {
    height: 100%;
    padding: 40px;
    display: flex;
    align-items: flex-end;

    .home__banner__title h1 {
      color: ${(props) => props.theme.colors.textWhite};
      font-size: 24px;

      span {
        background-color: ${(props) => props.theme.colors.secondary};
        padding: 0px 8px 3px 8px;
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    .home__banner__container {
      .home__banner__title h1 {
        font-size: 38px;
      }
    }
  }
`;
