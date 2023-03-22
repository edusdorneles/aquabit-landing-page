// Page components
import Contato from "components/Contato/Contato";
import WebEApp from "./WebEApp/WebEApp";
import ControleManejo from "./ControleManejo/ControleManejo";
import Arracoamentos from "./Arracoamentos/Arracoamentos";
import Vendas from "./Vendas/Vendas";

// Styles
import { AplicativoStyle } from "./styles";

const Aplicativo: React.FC = () => {
  return (
    <AplicativoStyle>
      <WebEApp />
      <ControleManejo />
      <Arracoamentos />
      <Vendas />
      <Contato />
    </AplicativoStyle>
  );
};

export default Aplicativo;
