import Text from "./Text/Text";
import Ajuda from "./Ajuda/Ajuda";
import Depoimentos from "components/Depoimentos/Depoimentos";
import Contato from "./Contato/Contato";
import Button from "components/Button/Button";
import { useGlobal } from "providers/Global";

// Styles
import { ReduzirCustoRacaoStyle } from "./styles";

const ReduzirCustoRacao: React.FC = () => {
  const { setOpenFormModal } = useGlobal();

  return (
    <ReduzirCustoRacaoStyle>
      <Text />
      <Ajuda />

      <Depoimentos>
        <div className="depoimentos__button">
          <Button
            title="QUERO CONHECER"
            onClick={() => setOpenFormModal(true)}
          />
        </div>
      </Depoimentos>

      <Contato />
    </ReduzirCustoRacaoStyle>
  );
};

export default ReduzirCustoRacao;
