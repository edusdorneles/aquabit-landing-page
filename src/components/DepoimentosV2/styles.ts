import styled from "styled-components";

export const DepoimentosStyle = styled.section`


  .depoimentos__container {
    background-color: #F1F1F1 !important;
    padding: 2rem;
    .home__default__text {
      .home__default__title {
        width: 100%;
        text-align: center;
        margin-bottom: 50px;
        
        h2{
          font-size: 40px;
          font-weight: 900;
        }
      }
    }

    .depoimentos__slider {
      div {
        .carousel-item {
          width: 500px;
          .carousel-item__image {
            width: 100%;
            height: 80px;
            text-align: center;
            object-fit: cover;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
              width: 80px;
              height: 80px;
              border-radius: 40px;
              margin-right: 20px;
            }

            @media(max-width:900px){
              margin-right: 0px;
              margin-bottom: 2rem;
            }
          }

          * {
            text-align: center;
          }

          .carousel-item__title h3 {
            color: ${(props) => props.theme.colors.textBlack};
            font-size: ${(props) => props.theme.fontSize.extraLarge};
          }

          .carousel-item__stars svg {
            color: ${(props) => props.theme.colors.primary};
            font-size: ${(props) => props.theme.fontSize.extraSmall};
            margin: 5px 0px 20px 0px;
          }

          .carousel-item__text p {
            width: 400px;
            color: ${(props) => props.theme.colors.textBlack};
            font-size: ${(props) => props.theme.fontSize.medium};
            font-weight: 500;
            margin-bottom: 15px;

            @media(max-width:900px){
              width: 100%;
            }
          }

          .carousel-item__localization {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;

            @media(max-width:900px){
              justify-content: center;
              align-items: center;
            }
            .carousel-item__localization__title p {
              color: ${(props) => props.theme.colors.textBlack};
              font-size: ${(props) => props.theme.fontSize.small};
              font-weight: 500;
            }
            span{
              display: flex;
              flex-direction: column;
              justify-content: start;
              align-items: start;
              @media(max-width:900px){
              justify-content: center;
              align-items: center;
            }

              p{
                &:first-child{
                  color: ${(props) => props.theme.colors.primary};
                  font-size: 20px;
                }
              }
            }

            .carousel-item__localization__description p {
              font-size: ${(props) => props.theme.fontSize.extraSmall};
              padding: 2px 0px;

              &:last-child {
                margin-bottom: 35px;
              }
            }
          }
        }
      }

      /* Carousel */
      .rec-arrow {
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.textWhite};
      }
      .rec-arrow:disabled {
      opacity: 0.4;
      }

      .rec-dot {
      background-color: #b5b5b5;
      box-shadow: none;
      width: 8px;
      height: 8px;
      }
      .rec-dot_active {
      background-color: ${(props) => props.theme.colors.primary};
      }
    }

    /* Children */
    .depoimentos__children {
      padding-bottom: 45px;
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    padding-top: 100px;
    background-color: #F1F1F1 !important;
    background-size: 100% 100%;

    .depoimentos__container {
      background-color: #F1F1F1 !important;
      width: 100%;
      .depoimentos__slider {
     
        div {
          .carousel-item {
            display: flex;
            align-self: start;
            .carousel-item__title h3 {
              font-size: 30px;
   
            }

            .carousel-item__stars svg {
              font-size: ${(props) => props.theme.fontSize.small};
            }

            .carousel-item__text {
              width: 575px;
              p {
                font-size: ${(props) => props.theme.fontSize.extraLarge};
                text-align: start;
              }
            }
          }
        }
      }
    }
  }
`;
