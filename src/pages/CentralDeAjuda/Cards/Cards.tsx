import CardDropdown from "components/Cards/CardDropdown/CardDropdown";

// Styles
import { CardsStyle } from "./styles";
import { Container } from "styles/Global";

const Cards: React.FC = () => {
  return (
    <CardsStyle>
      <Container>
        <CardDropdown
          title="Qual é o valor de investimento para ter a Aquabit?"
          description="Os planos são definidos conforme a necessidade dos clientes, podendo ser a partir de R$ 197,00 mensais, podendo optar também pelo pagamento semestral ou anual (pagos à vista em 1X), que garantem descontos especiais."
        />

        <CardDropdown
          title="Como faço para contratar uma assinatura do Aquabit?"
          description="A contratação é bem simples, basta você entrar em contato conosco através do formulário do nosso site ou pelo whatsapp, como também iniciar o uso ao instalar nosso aplicativo. Nosso departamento comercial irá auxiliar durante o processo de contratação e você já poderá iniciar o uso de imediato."
        />

        <CardDropdown
          title="A Aquabit disponibiliza implantação após a contratação?"
          description="Sim. Disponibilizamos implantação assistida gratuita, porém não é obrigatória."
        />

        <CardDropdown
          title="A Aquabit trabalha com vendas de equipamentos, insumos, peixes, camarões, alevinos/larvas?"
          description="Não. Vendemos apenas nosso sistema de gestão."
        />

        <CardDropdown
          title="Como faço para aprender a usar o Aquabit?"
          description="Disponibilizamos vídeos demonstrativos no nosso canal do YouTube (https://www.youtube.com/channel/UCWPP_Sh758REEgn4WP1o9yg) e também temos o processo de implantação para auxiliar na aprendizagem."
        />

        <CardDropdown
          title="A Aquabit disponibiliza suporte após a contratação?"
          description="Sim. Disponibilizamos suporte via whatsapp, ligação e chamada de vídeo em horário comercial de Segunda a sexta-feira, das 08:00h às 12:00h e das 14:00h às 18:00h."
        />

        <CardDropdown
          title="Como faço para cancelar uma assinatura do Aquabit?"
          description="O cancelamento da assinatura é bem prático, você pode solicitar através do nosso contato de suporte."
        />

        <CardDropdown
          title="O Aquabit está adequado conforme a LGPD (Lei Geral de Proteção de Dados)?"
          description="Sim. A Aquabit recebeu uma assessoria jurídica especializada para as adequações à LGPD - Lei Geral de Proteção de Dados (Lei n° 13.709/2018). A LGPD define como tratamento de dados pessoais toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração (art. 5º, inciso X). Como constatou-se que a Aquabit não trabalha com dados sensíveis, a adequação se concentrou no tratamento de dados pessoais não sensíveis. Consultem nossa política de privacidade, termos de uso e política de cookies disponíveis através do nosso site e nossas plataformas."
        />

        <CardDropdown
          title="É possível personalizar o sistema para a minha necessidade?"
          description="O sistema foi criado para atender a diversos tipos de produção, levando em conta a diversidade de espécies e manejos. Estamos sempre abertos a sugestões, as demandas dos clientes são analisadas e se forem também demandas de outros produtores,  elas serão colocadas para implementação, seguindo uma ordem de prioridade e serão aplicadas a todos os usuários. Não trabalhamos com a criação de sistemas personalizados."
        />

        <CardDropdown
          title="Posso usar o sistema em mais de uma propriedade?"
          description="Sim, a contratação da assinatura é individual por propriedade e você pode assinar quantos planos forem necessários. "
        />
      </Container>
    </CardsStyle>
  );
};

export default Cards;
