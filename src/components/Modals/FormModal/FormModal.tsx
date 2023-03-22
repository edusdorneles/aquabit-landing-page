import { useGlobal } from "providers/Global";


// Styles
import { FormModalStyle } from "./styles";

// Icons
import { AiOutlineClose } from "react-icons/ai";
import Form2 from "components/Contato/Form2/Form2";

const FormModal: React.FC = () => {
  const { openFormModal, setOpenFormModal } = useGlobal();

  return (
    <FormModalStyle
      className={openFormModal ? "form-modal__container--active" : ""}
    >
      <div className="form-modal__content">
        <div className="form-modal__title">
          <h2>
            Produtores de peixes e camarões no controle dos tanques e lotes!
          </h2>

          <h3>
            Somos uma plataforma de gestão para criação de peixes e camarões.
          </h3>
        </div>

        <Form2 />

        <div className="form-modal__close">
          <AiOutlineClose onClick={() => setOpenFormModal(false)} />
        </div>
      </div>
    </FormModalStyle>
  );
};

export default FormModal;
