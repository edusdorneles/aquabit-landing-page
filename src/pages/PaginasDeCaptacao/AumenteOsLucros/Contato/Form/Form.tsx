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

const Form: React.FC = () => {
  const navigate = useNavigate();
  const currentPage = useLocation();
  // const estadosBrasil = require("services/estados-brasil.json");
  const { setOpenFormModal } = useGlobal();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [peixeCamarao, setPeixeCamarao] = useState("");
  // const [estado, setEstado] = useState("");
  // const [cidade, setCidade] = useState("");

  const enviarEmail = async () => {
    if (
      nome &&
      email &&
      telefone &&
      capacidade &&
      peixeCamarao 
      // estado &&
      // cidade
    ) {
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
              capacidade: capacidade,
              // cidade: cidade,
              email: email,
              // estadosBrasil: estado,
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
          setCapacidade("");
          setPeixeCamarao("");
          // setCidade("");

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
          onChange={(e: any) => {
            setNome(e.target.value);
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />

        <Input
          placeholder="WhatsApp"
          defaultCountry="BR"
          value={telefone}
          onChange={(e: any) => {
            setTelefone(e);
          }}
        />

        <select
          name="select-peixe-camarao"
          defaultValue={""}
          onChange={(e: any) => {
            setPeixeCamarao(e.target.value);
          }}
        >
          <option value="" disabled hidden>
            Produz Peixe, Camarão ou Vai Produzir?
          </option>
          <option value="peixe">Peixe</option>
          <option value="camarao">Camarão</option>
          <option value="vai-produzir">Vai Produzir</option>
        </select>

        {/* <input
          type="number"
          placeholder="Capacidade de produção (ton/ano)"
          value={capacidade}
          onChange={(e: any) => {
            setCapacidade(e.target.value);
          }}
        /> */}

        {/* <div className="form__input__localization">
          <select
            className="grid-select-estado"
            name="select-estado"
            defaultValue={""}
            onChange={(e: any) => {
              setEstado(e.target.value);
            }}
          >
            <option value="" disabled hidden>
              Estado
            </option>

            {estadosBrasil.map((estado: Estado, idx: number) => (
              <option key={idx} value={estado.sigla}>
                {estado.nome}
              </option>
            ))}
          </select>

          <input
            className="grid-cidade"
            type="text"
            placeholder="Cidade"
            value={cidade}
            onChange={(e: any) => {
              setCidade(e.target.value);
            }}
          />
        </div> */}

        <div className="form__button">
          <button
            type="button"
            id="botao-form"
            onClick={() => {
              enviarEmail();
            }}
          >
            ENVIAR
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

export default Form;
