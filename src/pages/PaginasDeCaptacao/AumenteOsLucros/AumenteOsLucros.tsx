import Text from "./Text/Text";
import Ajuda from "./Ajuda/Ajuda";
import Depoimentos from "components/Depoimentos/Depoimentos";
import Contato from "./Contato/Contato";
import Button from "components/Button/Button";
import { useGlobal } from "providers/Global";

// Styles
import { AumenteOsLucrosStyle } from "./styles";

const AumenteOsLucros: React.FC = () => {
  const { setOpenFormModal } = useGlobal();

  return (
    <AumenteOsLucrosStyle>
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
    </AumenteOsLucrosStyle>
  );
};

export default AumenteOsLucros;
