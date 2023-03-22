import styled from "styled-components";

export const PorqueAquabitStyle = styled.section`
 background-color: ${(props) => props.theme.colors.primary};
  height: auto;
  margin-top: 0px !important;
  .home__banner__propaganda {
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
     
        h2 {
          margin: 40px 0;
          font-size: 60px;
          color: ${(props) => props.theme.colors.textWhite};
          text-align: center;
        }

        @media(max-width:1200px){
          font-size:40px
          
        }

      }
  .home__porque-aquabit__container {

    .home__default__text {
      margin: 35px;
      text-align: center;

      .home__default__title {
        width: 310px;
      }
    }

    .home__porque-aquabit__icos {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;

      .porque-aquabit__icos__container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 20px;
              @media(max-width:1200px){
                margin-bottom: 3rem;
              }
        .porque-aquabit__icos__text {
          width: 232px;
          text-align: center;

          h3 {
            margin-top: 1rem;
            color: ${(props) => props.theme.colors.textWhite};
            font-size: ${(props) => props.theme.fontSize.medium};
            font-weight: 500;

          }
        }
        .porque-aquabit__icos__ico{
          img{
            width: 128px;
            height: 128px;
          }
        }
      }
    }

    .home__porque-aquabit__button {
      margin: 0px 0px 60px 0px;
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    margin-top: 80px;

    .home__porque-aquabit__container {
      display: flex;
      justify-content: center;
      flex-direction: column;

      .home__default__text {
        .home__default__title {
          width: 100%;
        }
      }

      .home__porque-aquabit__icos {
        flex-direction: row;
        column-gap: 60px;
        margin: 25px 0px;

        .porque-aquabit__icos__container {
          
          .porque-aquabit__icos__text {
            width: 240px;

            h3 {
              font-size: ${(props) => props.theme.fontSize.medium};

              @media(max-width:1200px){
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }
`;
