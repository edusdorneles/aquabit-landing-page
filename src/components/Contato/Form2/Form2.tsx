import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Input from "react-phone-number-input/input";
import { api } from "services/API";
import { useGlobal } from "providers/Global";

// Toast envio do email
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// Styles
import { FormStyle } from "./styles";

// Icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Form2: React.FC = () => {
  const navigate = useNavigate();
  const currentPage = useLocation();
  const { setOpenFormModal } = useGlobal();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [peixeCamarao, setPeixeCamarao] = useState("");

  const enviarEmail = async () => {
    if (nome && email && telefone && peixeCamarao) {
      if (email.includes(".com")) {
        if (telefone.length >= 14) {
          const queryParamsArray: string[] = [];
          const queryParams = currentPage.search.split("&");

          // eslint-disable-next-line array-callback-return
          queryParams.map((query: any) => {
            let newQuery = query.substring(query.indexOf("=") + 1);
            newQuery = decodeURIComponent(newQuery);
            newQuery = newQuery.replaceAll("+", " ");
            queryParamsArray.push(newQuery);
          });

          await toast.promise(
            api.post("v1/contato/", {
              email: email,
              nome: nome,
              telefone: telefone,
              tipoPeixe: peixeCamarao,
              mensagem: queryParamsArray,
            }),
            {
              pending: "Enviando email, aguarde!",
              success: "Email enviado!",
              error: "Erro no envio!",
            }
          );

          // Reset dos campos
          setNome("");
          setEmail("");
          setTelefone("");
          setPeixeCamarao("");

          // Fechar modal
          setOpenFormModal(false);

          // Redirect para a página de feedback
          navigate("/feedback");
        } else {
          toast.warning("Insira um número com 11 digitos!");
        }
      } else {
        toast.warning("Insira um email válido!");
      }
    } else {
      toast.warning("Preencha todos os campos!");
    }
  };

  return (
    <>
      <FormStyle>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e: any) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <Input
          placeholder="WhatsApp"
          defaultCountry="BR"
          value={telefone}
          onChange={(e: any) => setTelefone(e)}
        />

        <select
          name="select-peixe-camarao"
          defaultValue={""}
          onChange={(e: any) => setPeixeCamarao(e.target.value)}
        >
          <option value="" disabled hidden>
            Peixe ou Camarão?
          </option>
          <option value="peixe">Peixe</option>
          <option value="camarao">Camarão</option>
        </select>

        <div className="form__button">
          <button onClick={() => enviarEmail()}>
            COMECE AGORA!
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </FormStyle>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </>
  );
};

export default Form2;
