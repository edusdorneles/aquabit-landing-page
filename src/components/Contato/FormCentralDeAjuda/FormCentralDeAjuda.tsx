import { useState } from "react";
import Input from "react-phone-number-input/input";
import { api } from "services/API";

// Toast envio do email
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// Styles
import { FormCentralDeAjudaStyle } from "./styles";

// Icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const FormCentralDeAjuda: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarEmail = async () => {
    if (nome && email && telefone) {
      if (email.includes(".com")) {
        if (telefone.length >= 14) {
          await toast.promise(
            api.post("v1/contato/", {
              nome: nome,
              telefone: telefone,
              email: email,
              mensagem: mensagem,
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
      <FormCentralDeAjudaStyle>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e: any) => {
            setNome(e.target.value);
          }}
        />

        <div className="form__double-grid">
          <Input
            placeholder="Celular"
            defaultCountry="BR"
            value={telefone}
            onChange={(e: any) => {
              setTelefone(e);
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
        </div>

        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e: any) => {
            setMensagem(e.target.value);
          }}
        />

        <div className="form__button">
          <button
            type="button"
            onClick={() => {
              enviarEmail();
            }}
          >
            ENVIAR
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </FormCentralDeAjudaStyle>

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

export default FormCentralDeAjuda;
