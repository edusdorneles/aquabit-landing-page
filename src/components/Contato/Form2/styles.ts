import styled from "styled-components";
import { shade } from "polished";

export const FormStyle = styled.form`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 18px;
  justify-items: center;

  input,
  select {
    border-radius: ${(props) => props.theme.borderRadius};
    font-family: "Roboto";
    font-weight: 400;
    font-size: 20px;
    border: none;
    width: 100%;
    max-width: 352px;
    height: 35px;
    padding: 12px 18px;
    background-color: #F1F1F1;
    @media(max-width:1200px){
      width: 95%;
      max-width: none;
      height: 60px;
    }
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
      display: flex;
      justify-content: center;
      width: 95%;
      max-width: 660px;
    }

  button {
    color: ${(props) => props.theme.colors.textWhite};
    font-size: ${(props) => props.theme.fontSize.extraSmall};
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.borderRadius};

    font-family: "Roboto";
  
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: ${(props) => props.theme.fontSize.extraSmall};
    font-weight: 500;
    text-decoration: none;
   background-color: ${(props) => props.theme.colors.secondary};
    width: 100%;
    height: 60px;
    &:hover {
      background-color: ${(props) => shade(0.2, props.theme.colors.secondary)};
    }

    svg {
      font-size: ${(props) => props.theme.fontSize.extraSmall};
      margin-left: 6px;
    }
    @media(max-width:1200px){
      width: 100%;
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    justify-items: left;

    input,
    select {
      max-width: 660px;
      height: 45px;
      padding: 12px 18px;
    }

    button {
      font-size: ${(props) => props.theme.fontSize.extraSmall};
      font-weight: 500;
      text-decoration: none;
      background-color: ${(props) => props.theme.colors.secondary};
      width: 100%;
      height: 40px;
      svg {
        font-size: ${(props) => props.theme.fontSize.small};
      }
      transition: all 0.4s;
      &:hover {
      background-color: ${(props) => shade(0.2, props.theme.colors.secondary)};
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
