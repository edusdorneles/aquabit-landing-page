import styled from "styled-components";

export const TermosStyle = styled.main`
  padding: 25px 0px;

  .termos__container {
    .termos__title {
      text-align: center;
      margin-bottom: 20px;
    }

    .termos__text {
      text-align: justify;
      margin-bottom: 40px;
    }

    .termos__lists ol {
      text-align: justify;

      .termo__lists__title {
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
    }
  }
`;
