// Section components
import Banner from "./Banner/Banner";
import Aquabit from "./Aquabit/Aquabit";
import NossaAtuacao from "./NossaAtuacao/NossaAtuacao";
import Aceleradoras from "./Aceleradoras/Aceleradoras";
import Parceiros from "../Home/Parceiros/Parceiros";

// Styles
import { SobreStyle } from "./styles";

const Sobre: React.FC = () => {
  return (
    <SobreStyle>
      <Banner />
      <Aquabit />
      <NossaAtuacao />
      <Aceleradoras />
      <Parceiros />
    </SobreStyle>
  );
};

export default Sobre;
