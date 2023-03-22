import styled from "styled-components";
import { shade } from "polished";

export const FormStyle = styled.form`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 18px;
  justify-items: center;

  input,
  select {
    border-radius: ${(props) => props.theme.borderRadius};
    font-family: "Roboto";
    font-weight: 500;
    border: none;
    width: 100%;
    max-width: 312px;
    height: 40px;
    padding: 12px 18px;
    background-color: white;

    &::placeholder {
      color: ${(props) => props.theme.colors.textBlack};
    }

    &:focus {
      outline: none;
    }
  }

  select {
    cursor: pointer;
  }

  .form__input__localization {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 18px;
    width: 100%;
    max-width: 312px;
  }

  .form__button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      color: ${(props) => props.theme.colors.textWhite};
      font-size: ${(props) => props.theme.fontSize.extraSmall};
      background-color: ${(props) => props.theme.colors.secondary};
      border-radius: ${(props) => props.theme.borderRadius};
      transition: ${(props) => props.theme.transition};
      font-family: "Roboto";
      font-weight: 500;
      cursor: pointer;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      width: 100%;
      max-width: 312px;
      height: 45px;

      &:hover {
        background-color: ${(props) =>
          shade(0.2, props.theme.colors.secondary)};
      }

      svg {
        font-size: ${(props) => props.theme.fontSize.extraSmall};
        margin-left: 6px;
      }
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    justify-items: left;

    input,
    select {
      max-width: 660px;
      height: 40px;
      padding: 12px 18px;
    }

    button {
      font-size: ${(props) => props.theme.fontSize.extraSmall};
      font-weight: 500;
      text-decoration: none;
      width: 350px;
      height: 45px;
      svg {
        font-size: ${(props) => props.theme.fontSize.small};
      }
    }

    .form__input__localization {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 18px;
      max-width: 660px;
    }

    .form__button {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 660px;
    }
  }
`;
