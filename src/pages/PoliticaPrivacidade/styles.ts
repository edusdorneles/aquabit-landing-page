import styled from "styled-components";

export const PoliticaPrivacidadeStyle = styled.main`
  padding: 25px 0px;

  .politica-privacidade__container {
    .politica-privacidade__title {
      text-align: center;
      margin-bottom: 20px;
    }

    .politica-privacidade__text {
      text-align: justify;
      margin-bottom: 40px;
    }

    .politica-privacidade__lists ol {
      text-align: justify;

      .politica-privacidade__lists__title {
        font-weight: bold;
        margin-bottom: 10px;

        h3 {
          margin-bottom: 10px;
        }
        ol {
          font-weight: normal;
        }
      }

      ol {
        padding-left: 15px;

        li {
          margin-bottom: 15px;
        }
        li:last-child {
          margin-bottom: 40px;
        }
      }

      ul {
        list-style: none;
        padding-left: 15px;

        li {
          margin-bottom: 15px;
        }
        li:last-child {
          margin-bottom: 40px;
        }
      }

      p {
        margin-bottom: 20px;
      }
    }
  }
`;
