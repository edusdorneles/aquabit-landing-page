// Section components
import Banner from "./Banner/Banner";
import Beneficios from "./Beneficios/Beneficios";
import PorqueAquabit from "./PorqueAquabit/PorqueAquabit";
import FormularioV2 from "./FormularioV2/FormularioV2";
import AjudamosProdutores from "./AjudamosProdutores/AjudamosProdutores";
import Planos from "./Planos/Planos";
import Praticidade from "./Praticidade/Praticidade";
import Parceiros from "./Parceiros/Parceiros";

// Styles
import { HomeStyle } from "./styles";
import DepoimentosV2 from "components/DepoimentosV2/Depoimentos";
import FloatWhatsapp from "components/FloatWhatsapp/FloatWhatsapp";

const Home: React.FC = () => {
  return (
    <HomeStyle>
      <FloatWhatsapp />
      <Banner />
      <PorqueAquabit />
      <Beneficios />
      <FormularioV2 />
      <AjudamosProdutores />
      <DepoimentosV2 />
      <Planos />
      <Praticidade />
      <Parceiros />
    </HomeStyle>
  );
};

export default Home;
