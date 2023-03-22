import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import ScrollToTop from "./ScrollToTop";

// Modals
import StoreModal from "components/Modals/StoreModal/StoreModal";
import FormModal from "components/Modals/FormModal/FormModal";

// Styles
import Layout from "components/Layout";

// Pages
const Home = loadable(() => import("pages/Home/Home"));
const Sobre = loadable(() => import("pages/Sobre/Sobre"));
const CentralDeAjuda = loadable(() => import("pages/CentralDeAjuda/CentralDeAjuda"));
const Aplicativo = loadable(() => import("pages/Aplicativo/Aplicativo"));
const Termos = loadable(() => import("pages/Termos/Termos"));
const PoliticaPrivacidade = loadable(() => import("pages/PoliticaPrivacidade/PoliticaPrivacidade"));
const PoliticaCookies = loadable(() => import("pages/PoliticaCookies/PoliticaCookies"));
const Feedback = loadable(() => import("pages/Feedback/Feedback"));

// Pages - Captação
const ReduzirCustoRacao = loadable(() => import("pages/PaginasDeCaptacao/ReduzirCursoRacao/ReduzirCustoRacao"));
const AumenteOsLucros = loadable(() => import("pages/PaginasDeCaptacao/AumenteOsLucros/AumenteOsLucros"));

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />

        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<Sobre />} />
          <Route path="/central-de-ajuda" element={<CentralDeAjuda />} />
          <Route path="/aplicativo" element={<Aplicativo />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
          <Route path="/feedback" element={<Feedback />} />

          {/* Páginas de captação */}
          <Route path="/reduzir-custo-racao" element={<ReduzirCustoRacao />} />
          <Route path="/aumente-os-lucros" element={<AumenteOsLucros />} />
        </Switch>
      </Layout>

      <StoreModal />
      <FormModal />
    </BrowserRouter>
  );
};

export default Routes;
