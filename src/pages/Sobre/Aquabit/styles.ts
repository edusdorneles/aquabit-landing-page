import styled from "styled-components";

export const AquabitStyle = styled.section`
  .aquabit__container {
    .aquabit__text {
      .aquabit__title h2 {
        font-size: ${(props) => props.theme.fontSize.title};
        color: ${(props) => props.theme.colors.primary};
        text-align: center;
        padding: 40px 0px;
      }

      .aquabit__description {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 60px;

        p {
          color: ${(props) => props.theme.colors.textBlack};
          font-size: ${(props) => props.theme.fontSize.small};
          text-align: center;
          font-weight: 500;
          width: 310px;

          &:first-child {
            margin-bottom: 18px;
          }
        }
      }
    }

    .aquabit__cards {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 10px;
      justify-items: center;
      margin-bottom: 100px;
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    .aquabit__container {
      .aquabit__text {
        .aquabit__title h2 {
          font-size: 36px;
        }

        .aquabit__description {
          margin-bottom: 140px;

          p {
            font-size: ${(props) => props.theme.fontSize.large};
            width: 780px;
          }
        }
      }

      .aquabit__cards {
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 60px;
        grid-column-gap: 90px;
        margin-bottom: 140px;
      }
    }
  }
`;
