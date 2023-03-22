// Page components
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";
import Contato from "components/Contato/Contato";
import FloatWhatsapp from "components/FloatWhatsapp/FloatWhatsapp";

// Styles
import { CentralDeAjudaStyle } from "./styles";

const CentralDeAjuda: React.FC = () => {
  return (
    <CentralDeAjudaStyle>
      <Banner />
      <Cards />
      <Contato />
      <FloatWhatsapp />
    </CentralDeAjudaStyle>
  );
};

export default CentralDeAjuda;
