import Contato from "components/Contato/Contato";

// Styles
import { SolicitarTesteStyle } from "./styles";

const SolicitarTeste: React.FC = () => {
  return (
    <SolicitarTesteStyle>
      <Contato
        style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
      />
    </SolicitarTesteStyle>
  );
};

export default SolicitarTeste;
