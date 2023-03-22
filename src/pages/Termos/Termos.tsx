import { Link } from "react-router-dom";

// Styles
import { TermosStyle } from "./styles";
import { Container } from "styles/Global";

const Termos = () => {
  return (
    <TermosStyle>
      <Container className="termos__container">
        <div className="termos__title">
          <h2>TERMOS E CONDIÇÕES DE USO - AQUABIT</h2>
        </div>

        <div className="termos__text">
          <p>
            O presente documento tem por objeto estabelecer os Termos e
            Condições de Uso da plataforma e serviços da AQUABIT, detido pela
            AQBITS SISTEMAS PARA AQUICULTURA LTDA, pessoa jurídica de direito
            privado, inscrita no CNPJ sob n. 30.031.453/0001-46, com sede na BR
            277 Km 573, s/n - Trevo São João, localizada no centro de incubação
            de startups, CEP 85.818-560, Cascavel, Paraná – Brasil, mantenedora
            e única titular do software, plataforma – site e app.{" "}
            <span>
              Por favor, revise os termos de uso cuidadosamente antes de
              utilizar nossos serviços.
            </span>{" "}
            Ao acessar todos os usuários declaram aceitar os termos e condições
            aqui estabelecidos tal como nossa política de privacidade e política
            de cookies. Caso você não concorde com os termos e condições
            contidos neste Termo de Uso, nossa Política de Privacidade e
            Política de Cookies não utilize a nossa plataforma. A AQUABIT se
            reserva o direito de atualizar os Termo de Uso periodicamente, à
            exclusivo critério nosso, e você deve revisá-lo periodicamente para
            eventuais modificações e atualizações.
          </p>
        </div>

        <div className="termos__lists">
          <ol>
            <li className="termo__lists__title">
              <h3>CONSIDERAÇÕES INICIAIS.</h3>
            </li>
            <ol type="i">
              <li>
                A AQUABIT é uma plataforma digital especializada na gestão da
                aquicultura, e está presente em formato de App para smartphone e
                versão Web pensados para você, produtor – USUÁRIO - CLIENTE.
              </li>
              <li>
                Para utilizar os serviços da AQUABIT os usuários devem aceitar,
                expressamente, estes termos e condições de uso, política de
                privacidade e política de cookies, que contém informações claras
                e completas sobre coleta, uso, armazenamento, tratamento e
                proteção dos dados pessoais dos usuários e visitantes da
                plataforma.
              </li>
              <li>
                Os usuários se comprometem a notificar a AQUABIT imediatamente,
                a respeito de qualquer uso não autorizado de sua conta, bem como
                seu acesso não autorizado por terceiros.
              </li>
              <li>
                A AQUABIT, em razão de violação à legislação em vigor ou aos
                termos e condições gerais de uso da plataforma, conforme a
                situação, poderá, sem prejuízo de outras medidas, recusar
                qualquer solicitação de cadastro, advertir, suspender,
                desabilitar a conta de um usuário, seus anúncios ou aplicar uma
                sanção que impacte negativamente sua reputação.
              </li>
              <li>
                Os serviços da AQUABIT estão disponíveis apenas para usuários
                compradores (pessoas físicas ou jurídicas) que tenham capacidade
                legal para contratá-los. É proibido o cadastro de usuários
                compradores que não tenham capacidade civil (com relação a
                pessoas físicas) ou não sejam representantes legais (com relação
                a pessoas jurídicas).
              </li>
              <li>
                Para realizar uma compra na AQUABIT serão exigidos dados
                cadastrais que devem ser corretamente preenchidos para a geração
                de uma conta com login e senha de acesso.
              </li>
              <li>
                A cessão de uso do software é realizada de forma irrevogável,
                não exclusiva e intransferível por meio da internet, na
                modalidade de Software as a Service (SaaS), incluindo os
                serviços de hospedagem do software e banco de dados.
              </li>
              <li>
                Inclui-se no serviço a manutenção de cópias de segurança
                (backups). As cópias de segurança (backups) são realizadas
                automaticamente e mantidas em locais físicos diferentes,
                assegurando a salvaguarda dos dados carregados pelo usuário ao
                software. O usuário poderá requerer cópias de segurança,
                mediante solicitação, considerando a programação e os prazos
                estabelecidos pela AQUABIT.
              </li>
              <li>
                Durante o cadastro, o cliente determinará sua senha de acesso,
                sendo de sua exclusiva responsabilidade a manutenção do sigilo
                dessa informação.
              </li>
              <li>
                Em caso de perda, divulgação, roubo ou identificação de uso não
                autorizado da senha e/ou da conta de acesso, se verificado pelo
                usuário, este deverá informar imediatamente a AQUABIT.
              </li>
            </ol>

            <li className="termo__lists__title">
              <h3>DOS SERVIÇOS - PLANOS.</h3>
            </li>
            <ol type="i">
              <li>
                O serviço fornecido pela AQUABIT consiste em um software para
                gestão e controle para aquicultura de peixes e camarões, não se
                limitando à gestão da qualidade.
              </li>
              <li>
                A AQUABIT disponibiliza a você, USUÁRIO – CLIENTE, duas opções
                de planos: o gratuito (com funcionalidades reduzidas) e a versão
                web e mobile.
              </li>
              <li>
                Para utilizar o software o cliente deverá pagar à AQUABIT os
                valores estabelecidos na Proposta Comercial aprovada.
              </li>
              <li>
                Os preços e formas de pagamento são variáveis de acordo com as
                condições e serviços contratados, como os módulos selecionados e
                a quantidade de usuários ou licenças de uso, que serão
                informados através da proposta comercial no momento da
                contratação.
              </li>
              <li>
                A falta de pagamento de quaisquer valores nas respectivas datas
                de vencimento não acarretará na rescisão automática do contrato.
                A AQUABIT se reserva no direito de bloquear o acesso ao
                software, caso a pendência não seja regularizada em até 30
                (trinta) dias contados a partir da data de vencimento da fatura.
              </li>
              <li>
                Caso o cliente não resolva a pendência financeira no prazo de 60
                (sessenta) dias, contados da data de vencimento da fatura, a
                AQUABIT se reserva o direito de rescindir o contrato entre as
                partes e de excluir de forma definitiva os dados do usuário que
                por ventura estejam armazenados no software.
              </li>
              <li>
                O atraso ou a falta de pagamento, pelo USUÁRIO, de quaisquer
                valores devidos à AQUABIT nas suas respectivas datas de
                vencimento, ensejará a cobrança de multa de 2% (dois por cento)
                sobre o valor devido, mais juros de mora de 1% (um por cento) ao
                mês, pro rata die, e correção monetária (IGP-M - FGV), desde o
                vencimento até a data do efetivo pagamento. Sendo necessária a
                intervenção de advogado para fins de cobrança dos valores
                devidos, na via judicial ou administrativa, serão cobrados,
                ainda, honorários de 10% (dez por cento) sobre o valor devido.
              </li>
            </ol>

            <li className="termo__lists__title">
              <h3>DA PROPRIEDADE INTELECTUAL.</h3>
            </li>
            <ol type="i">
              <li>
                O software tem seu uso licenciado por modalidade de serviço
                “Software as a Service” (SaaS) e não venda. A titularidade e os
                direitos relativos ao software pertencem exclusivamente à
                AQUABIT.
              </li>
              <li>
                O usuário não está autorizado a utilizar, sob qualquer forma ou
                pretexto, as marcas, suas variações, domínios e sinais que sejam
                da AQUABIT ou que estiverem expostas no software, sob pena de
                infração à legislação aplicável.
              </li>
              <li>
                Todo o conteúdo do software, incluindo programas, bases de
                dados, arquivos, textos, desenhos, fotos, layouts, cabeçalhos e
                demais elementos, foi criado, desenvolvido pela AQUABIT, sendo,
                portanto, de sua propriedade exclusiva e encontra-se protegido
                pelas leis brasileiras e tratados internacionais que versam
                sobre direitos de propriedade intelectual.
              </li>
              <li>
                São proibidas: a exploração, cessão, imitação, cópia, plágio,
                aplicação de engenharia reversa, armazenamento, alteração,
                modificação de características, ampliação, sub licenciamento,
                venda, locação, doação, alienação, transferência, reprodução,
                integral ou parcial, de qualquer conteúdo do site ou do
                software.
              </li>
              <li>
                O usuário que violar as proibições contidas na legislação sobre
                propriedade intelectual e nestes Termos e Condições de Uso será
                responsabilizado, civil e criminalmente, pelas infrações
                cometidas, além de ser excluído da base de dados do software.
              </li>
            </ol>

            <li className="termo__lists__title">
              <h3>OBRIGAÇÕES DAS PARTES.</h3>

              <ol>
                <li className="termo__lists__title">
                  <h4>SÃO OBRIGAÇÕES DA AQUABIT:</h4>
                </li>
                <ol type="i">
                  <li>
                    Realizar os serviços conforme as condições contratadas pelo
                    usuário, responsabilizando-se pelo funcionamento do
                    software, pelas correções que eventualmente sejam
                    necessárias e disponibilizando acesso aos serviços de
                    suporte para esclarecimento de dúvidas em relação ao uso do
                    software.
                  </li>
                  <li>
                    A AQUABIT garante a disponibilidade do software em no mínimo
                    99% (noventa e nove por cento), considerando o tempo em cada
                    mês civil.
                  </li>
                  <li>
                    O compromisso de Nível de Serviço de 99% (noventa e nove por
                    cento) não se aplica, caso as circunstâncias de
                    indisponibilidade resultem de: a) interrupções planejadas,
                    que serão informadas pela AQUABIT por meio de mensagem por
                    e-mail ou aviso no software e que serão programadas, na
                    medida do possível, em horários noturnos, entre 22h00 e
                    06h00 (horário de Brasília);b) casos fortuitos ou de força
                    maior, nos termos do artigo 393 do Código Civil; c)
                    quaisquer atos ou omissões do usuário ou de terceiros.
                  </li>
                  <li>
                    Comunicar qualquer alteração dos serviços aos usuários.
                  </li>
                  <li>
                    Fornecer o backup de sua base de dados conforme cláusula 1
                    do presente documento.
                  </li>
                  <li>
                    Efetuar alterações no software, decorrentes de ordem legal,
                    sem qualquer custo para o cliente, de acordo com a política
                    de atualização do software.
                  </li>
                  <li>
                    Tratar os dados pessoais coletados e utilizados para a
                    comunicação comercial dos produtos, serviços e promoções da
                    AQUABIT em conformidade com a Lei Geral de Proteção de Dados
                    (Lei nº 13.709/18) e em conformidade ao descrito no
                    documento Política de Privacidade AQUABIT.
                  </li>
                </ol>
              </ol>

              <ol>
                <li className="termo__lists__title">
                  <h4>SÃO OBRIGAÇÕES DO USUÁRIO - CLIENTE:</h4>
                </li>
                <ol type="i">
                  <li>
                    Utilizar o software conforme os critérios de utilização
                    definidos pela AQUABIT, sem alterar a sua programação,
                    quebrar senhas ou realizar procedimentos que venham causar
                    prejuízos aos demais usuários ou a empresa.
                  </li>
                  <li>
                    Responsabilizar-se pelo teor das informações e documentos
                    que introduzir no software, uma vez que essas informações
                    ficam apenas armazenadas nos servidores da AQUABIT.
                  </li>
                  <li>
                    Efetuar os pagamentos dos valores devidos, nos prazos e
                    formas contratados.
                  </li>
                  <li>
                    Os tributos que sejam devidos em decorrência direta ou
                    indireta do presente termo, ou de sua execução, serão de
                    exclusiva responsabilidade do contribuinte, assim definido
                    na norma tributária, sem direito a reembolso. O cliente,
                    quando fonte retentora, descontará e recolherá, nos prazos
                    da lei, os tributos a que esteja obrigado pela legislação
                    vigente.
                  </li>
                </ol>
              </ol>
            </li>

            <li className="termo__lists__title">
              <h3>
                POLÍTICA DE CONFIDENCIALIDADE E SIGILO DE INFORMAÇÕES E DA
                PROTEÇÃO E PRIVACIDADE DOS DADOS PESSOAIS TRATADOS.
              </h3>
            </li>
            <ol type="i">
              <li>
                Todas as informações obtidas de nossos clientes serão tratadas
                como confidenciais e sigilosas por parte da AQUABIT e seus
                colaboradores.
              </li>
              <li>
                Serão consideradas como informação confidencial e sigilosa toda
                e qualquer informação, patenteada ou não, de natureza técnica,
                operacional, comercial, jurídica, know-how, invenções,
                processos, fórmulas e designs, patenteáveis ou não, planos de
                negócios, métodos de contabilidade, técnicas e experiências
                acumuladas, documentos, registros, contratos, papéis, estudos,
                pareceres e pesquisas, pertencentes ao cliente e que a AQUABIT e
                seus colaboradores.
              </li>
              <li>
                A AQUABIT e seus colaboradores se comprometem a manter sigilo
                absoluto sobre qualquer tipo de informação confidencial e
                sigilosa de nossos clientes, não utilizando tais informações
                para gerar benefício próprio ou alheio, presente ou futuro.
              </li>
              <li>
                As informações confidenciais e sigilosas de nossos clientes,
                confiadas aos colaboradores da AQUABIT, somente poderão ser
                comunicadas à terceiros ou outrem, mediante consentimento prévio
                e por escrito da empresa cliente e titular das informações.
              </li>
              <li>
                Não configuram informações confidenciais e sigilosas aquelas já
                disponíveis ao público em geral e as que não são mais tratadas
                como confidenciais pela empresa cliente.
              </li>
              <li>
                A AQUABIT e seus Colaboradores usarão as informações
                confidenciais e sigilosas de nossos clientes apenas com o
                propósito relacionado ao objeto contratual.
              </li>
              <li>
                A AQUABIT e seus Colaboradores manterão o controle das
                informações confidenciais e sigilosas de nossos clientes, as
                revelando apenas aos colaboradores que tiverem necessidade de
                ter conhecimento sobre elas.
              </li>
              <li>
                A AQUABIT e seus Colaboradores protegerão as informações
                confidenciais e sigilosas de seus clientes, através de
                criptografia em banco de dados e acessos restritos através de
                login e senha específicos.
              </li>
              <li>
                A AQUABIT e seus Colaboradores comunicarão imediatamente à
                empresa cliente, a ocorrência de qualquer incidente relacionado
                às informações confidenciais e sigilosas, não se eximindo de
                suas responsabilidades.
              </li>
              <li>
                A manutenção da confidencialidade e sigilo das informações
                recebidas de nossos clientes será válida por prazo
                indeterminado, permanecendo válida mesmo após o fim da relação
                comercial entre a AQUABIT e seu(s) cliente(s).
              </li>
              <li>
                A AQUABIT dispõe de uma política específica para regular a
                coleta, guarda e utilização de dados pessoais em atendimento a
                Lei Geral de Proteção de Dados (LGPD), clique{" "}
                <Link to="/politica-de-privacidade">aqui</Link> para leitura e
                aceite - Política de Privacidade.
              </li>
              <li>
                A AQUABIT obriga-se, sempre que aplicável, a atuar em
                conformidade com a legislação vigente sobre Proteção de Dados
                Pessoais e as determinações de órgãos reguladores/fiscalizadores
                sobre a matéria, em especial, a Lei nº 13.709/2018 - Lei Geral
                de Proteção de Dados Pessoais (“LGPD”).
              </li>
            </ol>

            <li className="termo__lists__title">
              <h3>ALTERAÇÕES DO PRESENTE INSTRUMENTO.</h3>
            </li>
            <ul>
              <li>
                A AQUABIT poderá revisar, modificar e/ou atualizar, a qualquer
                momento, qualquer cláusula ou disposição contidas no presente
                instrumento.
              </li>
            </ul>

            <li className="termo__lists__title">
              <h3>DA LEGISLAÇÃO APLICÁVEL E FORO DE ELEIÇÃO.</h3>
            </li>
            <ul>
              <li>
                Para dirimir quaisquer controvérsias oriundas do presente
                Instrumento, as partes elegem o Foro Central da comarca da
                cidade de Cascavel/PR, sendo aplicáveis as Leis da República
                Federativa do Brasil.
              </li>
            </ul>

            <li className="termo__lists__title">
              <h3>CANAL DE COMUNICAÇÃO.</h3>
            </li>
            <ul>
              <li>
                A AQUABIT disponibiliza canais de atendimento para receber todas
                as comunicações que o usuário desejar fazer:
              </li>
              <li>TELEFONE: (11) 93257-8701</li>
              <li>
                De segunda à sexta-feira das 08h00 às 12h00 e das 14h00 às 18h00
                (horário de Brasília), exceto sábados, domingos e feriados.
              </li>
              <li>E-MAIL: contato@aquabit.com.br</li>
            </ul>
          </ol>

          <h3>Cascavel-PR, 17 de novembro de 2021.</h3>
        </div>
      </Container>
    </TermosStyle>
  );
};

export default Termos;
