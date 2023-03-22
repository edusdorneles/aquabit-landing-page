import styled from "styled-components";

export const CardDropdownStyle = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 24px 14px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  cursor: pointer;
  margin-bottom: 14px;

  .card__title h2 {
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.colors.textBlack};
    padding-right: 28px;
  }

  .card__description {
    display: none;

    p {
      color: ${(props) => props.theme.colors.textBlack};
      font-size: ${(props) => props.theme.fontSize.small};
      margin-top: 24px;
    }
  }

  .card__description--active {
    display: block;
  }

  .card__button {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 26px;
    right: 14px;

    svg {
      color: ${(props) => props.theme.colors.secondary};
      width: 100%;
      height: 100%;
    }
  }
`;
