import styled from "styled-components";

export const PraticidadeStyle = styled.section`

  .praticidade__container {

     
      .home__img__description {
        color: ${(props) => props.theme.colors.primary} !important;
        display: block;
        width: 100%;

        h1 {
          font-size: 50px;
        }
        h2 {
          font-weight: 400;
          color: ${(props) => props.theme.colors.textBlack} !important;
          font-size: 20px;
        }
      }
      @media(max-width:1200px){
        display: flex !important;
        width: 100%;
        flex-direction: column;
        justify-content: center !important;
        align-items: center;
        padding: 2rem;

        .home__img__description{
          h1{
            font-size: 30px;
          }
          h2{
            display: block;
            font-size: 15px;
            font-weight: bold;
            width: 100%;
            margin-bottom: 2rem;
            br{
              display: none;
            }
          }
        }
        .home__banner__form{
          width:100%
        }
      }

    .home__default__text {
      .home__default__description {
        width: 100%;
        text-align: justify;

        @media(max-width:1200px){
          h1{
            span{
              color: ${(props) => props.theme.colors.primary};
            }
          }
          }
      }
    }
  }

  /* Adaptaçao Media Query */
  ${(props) => props.theme.media.desktop} {
    padding: 55px 0px;
    margin-bottom: 50px;
    background-color: #fff !important;

    .praticidade__container {
      
      display: grid;
      grid-template-columns: 1fr 1fr;

     
      .home__default__text {
        margin-right: 20px;
      }
      
      .home__beneficios__image{
        display: flex;
        justify-content: center !important;
        
        img{
          height: 550px;
          margin: 0 auto;
        }
       
      }
      .praticidade__videos {
        margin-left: 20px;

        iframe {
          width: 100%;
          height: 320px;
        }
      }
    }

    /* Carousel */
    .rec-slider-container {
      margin: 0;
    }
  }

  /* Carousel */
  .rec-arrow {
    display: none;
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
`;
