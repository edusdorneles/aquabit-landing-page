import styled from "styled-components";
import { shade } from "polished";

export const ButtonStyle = styled.div`
  margin: 12px 0px 4px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    color: ${(props) => props.theme.colors.textWhite};
    font-size: ${(props) => props.theme.fontSize.extraSmall};
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.borderRadius};
    transition: ${(props) => props.theme.transition};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    text-decoration: none;
    width: auto;
    height: 48px;
    padding: 0px 34px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => shade(0.2, props.theme.colors.secondary)};
    }

    svg {
      font-size: ${(props) => props.theme.fontSize.extraSmall};
      margin-left: 6px;
    }
  }

  .oulined-button {
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      background-color: ${(props) => shade(0.2, props.theme.colors.primary)};
      color: ${(props) => props.theme.colors.textWhite};
    }
  }

  /* Adaptação Media Query */
  ${(props) => props.theme.media.desktop} {
    margin: 15px 0px 15px 0px;

    a {
      font-size: ${(props) => props.theme.fontSize.small};
      width: 228px;
      height: 48px;

      svg {
        font-size: ${(props) => props.theme.fontSize.extraLarge};
      }
    }
  }
`;
