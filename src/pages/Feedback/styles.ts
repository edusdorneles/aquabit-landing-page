import styled from "styled-components";

export const FeedbackStyle = styled.main`
  margin-top: 60px;

  .feedback_container {
    padding-top: 80px;
    padding-bottom: 80px;

    .feedback__title {
      text-align: center;
      margin-bottom: 50px;

      h2 {
        font-size: 26px;
        color: ${(props) => props.theme.colors.primary};
      }
    }

    .feedback__description p {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    .feedback_container {
      width: 680px;
      padding-top: 100px;
      padding-bottom: 100px;
    }
  }
`;
