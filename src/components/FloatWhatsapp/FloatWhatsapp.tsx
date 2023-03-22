// Styles
import { FloatWhatsappStyle } from "./styles";

// Icons
import { FaWhatsapp } from "react-icons/fa";

const FloatWhatsapp = () => {
  return (
    <FloatWhatsappStyle>
      <a href="https://wa.me/+5511932578701" rel="noreferrer" target="_blank">
        <FaWhatsapp />
      </a>
    </FloatWhatsappStyle>
  );
};

export default FloatWhatsapp;
