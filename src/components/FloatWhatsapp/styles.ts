import styled from "styled-components";

export const FloatWhatsappStyle = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 15px;
  right: 15px;
  display: flex;

  a {
    transition: ${(props) => props.theme.transition};
    background-color: #4da735;
    border-radius: 100px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: white;
      font-size: 32px;
      display: flex;
    }

    &:hover {
      background-color: #3b8029;
    }
  }
`;
