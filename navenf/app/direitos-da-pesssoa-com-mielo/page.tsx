import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/Divider";
import References from "@/components/References";

export default function DireitosPessoaComMielo() {
    const listaReferencias = [
        { id: 1, text: "Brasil. Lei nº 13.146, de 6 de julho de 2015. Institui a Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência) [Internet]. Brasília: Presidência da República; 2015 [acesso em 2026 jun 16]. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm." },
        { id: 2, text: "Brasil. [Constituição (1988)]. Artigo 196. Constituição da República Federativa do Brasil [Internet]. Planalto.gov.br." },
        { id: 3, text: "Brasil. Lei nº 8.080, de 19 de setembro de 1990. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes e dá outras providências [Internet]. Brasília: Presidência da República; 1990 [acesso em 2026 jun 16]. Disponível em: planalto.gov.br." },
        { id: 4, text: "Brasil. Ministério da Saúde, Secretaria de Ciência, Tecnologia e Insumos Estratégicos. Portaria nº 37, de 24 de julho de 2019. Torna pública a decisão de incorporar o cateter hidrofílico para cateterismo vesical intermitente em indivíduos com lesão medular e bexiga neurogênica, no âmbito do Sistema Único de Saúde - SUS [Internet]. Brasília: Ministério da Saúde; 2019 [acesso em 2026 jun 16]. Disponível em: https://www.gov.br/conitec/pt-br/midias/relatorios/portaria/2019/portariasctie_37_38_39_2019.pdf/view" },
        { id: 5, text: "Agência Nacional de Aviação Civil (Brasil). Resolução nº 280, de 11 de julho de 2013. Dispõe sobre os procedimentos relativos à acessibilidade de passageiros com necessidade de assistência especial no transporte aéreo. Diário Oficial da União. 12 jul 2013; Seção 1:47-51." },
        { id: 6, text: "Agência Nacional de Aviação Civil (Brasil). Passageiros com Necessidade de Assistência Especial (PNAE) [Internet]. Brasília: ANAC; 2024 [acesso em 18 jun 2026]. Disponível em: www.gov.br" },
        { id: 7, text: "Vahr S, Cobussen-Boekhorst H, Eikenboom J, Geng V, Kapasi S, Kulée M, et al. Catheterisation: Indwelling catheters in adults - Urethral and suprapubic [Internet]. Arnhem: European Association of Urology Nurses (EAUN); 2023 [acesso em 18 jun 2026]. Disponível em: uroweb.org" },
        { id: 8, text: "Sociedade Brasileira de Urologia. Recomendações em Bexiga Neurogênica. Diretrizes Clínicas da SBU. Rio de Janeiro: SBU; 2019." }
    ];

    return (
        <div className="w-full">

            {/* 1. CABEÇALHO */}
            <section className="w-full bg-gradient-to-b from-[#006633] to-[#003366] py-16 sm:py-24 px-6 md:px-12 flex items-center justify-center">
                <div className="max-w-[1000px] mx-auto text-center">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-calsans leading-tight">
                        Direitos da pessoa com<br />Mielo
                    </h1>
                </div>
            </section>

            {/* 2. INTRODUÇÃO E PRINCIPAIS DIREITOS (Fundo Branco) */}
            <section className="w-full bg-white text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto">
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify md:text-left mb-8">
                        Pacientes com mielo (especialmente a forma mielomeningocele) são amparados pela Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência),{" "}
                        <Link 
                            href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#003366] font-bold underline hover:opacity-80 transition-opacity"
                        >
                            Lei 13.146
                        </Link>{" "}
                        de 2015. Eles têm direitos fundamentais garantidos no acesso à saúde, assistência social e mobilidade.<sup>1</sup>
                    </p>

                    {/* IMAGEM 1: Equipe médica e crianças */}
                    <div className="flex justify-center mb-12 relative">
                        <Image 
                            src="/direitos1.png" 
                            alt="Equipe médica com crianças cadeirantes" 
                            width={650} 
                            height={400} 
                            className="w-full max-w-[600px] h-auto object-contain" 
                        />
                        <span className="absolute top-4 right-[15%] text-xl">*</span>
                    </div>

                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-8">
                        Os principais direitos incluem:<sup>1</sup>
                    </h2>

                    <div className="space-y-6 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify md:text-left">
                        <p>
                            <strong>Saúde Integral e Tratamento:</strong> Acesso a cirurgias, terapias de reabilitação, sondas, medicamentos e acompanhamento multidisciplinar pelo SUS, incluindo centros de referência.
                        </p>
                        <p>
                            <strong>Benefício de Prestação Continuada (BPC)/ Lei Orgânica da Assistência Social (LOAS):</strong> Benefício assistencial de um salário mínimo mensal para pessoas com deficiência de qualquer idade que comprovem renda familiar per capita de até um quarto do salário mínimo.
                        </p>
                        <p>
                            <strong>Direitos Educacionais:</strong> Direito ao atendimento educacional especializado (AEE) e inclusão em escolas regulares ou instituições especializadas, com direito a profissional de apoio escolar, se necessário.
                        </p>
                        <p>
                            <strong>Isenções de Impostos:</strong> Direito à isenção de IPI, ICMS, IPVA e rodízio para veículos adaptados utilizados no transporte da pessoa com deficiência.
                        </p>
                        <p>
                            <strong>Aposentadoria Especial:</strong> Aposentadoria por idade ou tempo de contribuição diferenciados para a Pessoa com Deficiência (PcD).
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. OUTRAS LEIS (Fundo Branco com blocos coloridos) */}
            <section className="w-full bg-white text-gray-900 py-12 overflow-hidden">
                <div className="max-w-[900px] mx-auto px-6 md:px-12 mb-8">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center">
                        Outras leis garantem o direito a pacientes com mielo:
                    </h2>
                </div>

                <div className="w-full flex flex-col space-y-6 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                    {/* Bloco Amarelo */}
                    <div className="bg-[#FFC94B] w-[95%] md:w-[85%] mr-auto py-6 px-6 md:px-16 flex items-center justify-end">
                        <div className="max-w-[750px] w-full text-left">
                            <p>
                                <strong>Constituição Federal Art. 196.:</strong> A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação.<sup>2</sup>
                            </p>
                        </div>
                    </div>

                    {/* Bloco Verde */}
                    <div className="bg-[#80D960] w-[95%] md:w-[85%] ml-auto py-6 px-6 md:px-16 flex items-center justify-start">
                        <div className="max-w-[750px] w-full text-left">
                            <p>
                                <strong>Lei Orgânica da Saúde (Lei 8.080/1990):</strong> Garante a integralidade da assistência e o acesso universal aos tratamentos e insumos necessários para a promoção, proteção e recuperação da saúde.<sup>3</sup>
                            </p>
                        </div>
                    </div>

                    {/* Bloco Azul */}
                    <div className="bg-[#59ACFF] w-[95%] md:w-[85%] mr-auto py-6 px-6 md:px-16 flex items-center justify-end">
                        <div className="max-w-[750px] w-full text-left">
                            <p>
                                <strong>Portaria nº 37 de 24 de julho de 2019:</strong> Torna pública a decisão de incorporar o cateter (já lubrificado) para cateterismo urinário intermitente em indivíduos com lesão medular e bexiga neurogênica, conforme estabelecido pelo Ministério da Saúde, no âmbito do Sistema Único de Saúde - SUS. Devido à sua eficácia em reduzir infecções urinárias e melhorar a qualidade de vida.<sup>4</sup>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. AQUISIÇÃO DE MATERIAL E DOCUMENTAÇÃO (Fundo Branco com blocos) */}
            <section className="w-full bg-white text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto mb-10 text-center md:text-left">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-6">
                        Aquisição de material para cateterismo<br className="hidden sm:block" /> urinário intermitente
                    </h2>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify md:text-left mb-12">
                        Pacientes com mielomeningocele (espinha bífida) e bexiga neurogênica têm o direito legal garantido de receber cateteres urinários e insumos gratuitamente. A dispensação é respaldada pela Lei Orgânica da Saúde (Lei 8.080/90) e pela Lei Brasileira de Inclusão (Lei 13.146/15), com o cateter hidrofílico incorporado pelo Ministério da Saúde.<sup>1,3</sup>
                    </p>

                    <h3 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-10">
                        Documentação necessária:
                    </h3>

                    {/* Lista com ícones e caixas coloridas */}
                    <div className="space-y-6 max-w-[850px] mx-auto">
                        {/* Laudo Médico (Amarelo) */}
                        <div className="bg-[#FFC94B] p-6 rounded-lg flex flex-col md:flex-row items-center gap-6">
                            <div className="bg-white p-3 rounded shadow-sm shrink-0">
                                <Image src="/direitos2.png" alt="Ícone de Laudo Médico" width={60} height={70} className="w-[50px] h-auto" />
                            </div>
                            <p className="text-gray-900 text-sm sm:text-base font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify md:text-left">
                                <strong>Laudo Médico:</strong> Um relatório atualizado emitido por um médico urologista ou neurologista da rede pública ou conveniada ao SUS. O laudo deve conter o diagnóstico (Espinha Bífida/Mielomeningocele e Bexiga Neurogênica), o CID-10, o material prescrito (tipo de cateter e quantidade exata diária) e a justificativa da necessidade.
                            </p>
                        </div>

                        {/* Receituário (Azul) */}
                        <div className="bg-[#59ACFF] p-6 rounded-lg flex flex-col md:flex-row items-center gap-6">
                            <div className="shrink-0">
                                <Image src="/direitos3.png" alt="Ícone de Receituário" width={60} height={70} className="w-[50px] h-auto" />
                            </div>
                            <p className="text-gray-900 text-sm sm:text-base font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify md:text-left">
                                <strong>Receituário:</strong> Com a prescrição dos materiais.
                            </p>
                        </div>

                        {/* Documentação Pessoal (Verde) */}
                        <div className="bg-[#80D960] p-6 rounded-lg flex flex-col md:flex-row items-center gap-6">
                            <div className="shrink-0">
                                <Image src="/direitos4.png" alt="Ícone de Documentação" width={60} height={70} className="w-[50px] h-auto" />
                            </div>
                            <p className="text-gray-900 text-sm sm:text-base font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify md:text-left">
                                <strong>Documentação Pessoal:</strong> Identidade, CPF, cartão do SUS e comprovante de residência atualizado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. ONDE SOLICITAR (Fundo Amarelo) */}
            <section className="w-full bg-[#FFC94B] text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto text-center">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] mb-6">
                        Onde solicitar:
                    </h2>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] max-w-[800px] mx-auto">
                        UBS (Unidade Básica de Saúde): Dirija-se à UBS mais próxima de sua residência para dar entrada no processo de solicitação de materiais e insumos.
                    </p>
                </div>
            </section>

            {/* 6. CENTROS DE REFERÊNCIA (Fundo Branco com botões arredondados e sombra dura) */}
            <section className="w-full bg-white text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-[850px] mx-auto">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-12">
                        Centro de referência para pessoas com<br />Mielo no Brasil
                    </h2>

                    <div className="space-y-6">
                        {/* Sarah */}
                        <div className="bg-[#003366] text-white p-6 rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[50px] shadow-[8px_8px_0px_#006633] text-center font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                            <p>
                                <em>Rede Sarah de Hospitais de Reabilitação</em> - Brasília/DF; Salvador/BA; Fortaleza/CE; São Luiz/MA; Rio de Janeiro/RJ; Belo Horizonte/MG; Belém/PA; Macapá/AP -{" "}
                                <Link href="https://www.sarah.br/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">
                                    https://www.sarah.br/
                                </Link>
                            </p>
                        </div>

                        {/* AACD */}
                        <div className="bg-[#FFC94B] text-gray-900 font-medium p-6 rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[50px] shadow-[8px_8px_0px_#003366] text-center font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                            <p>
                                <em>Hospital Ortopédico AACD</em> (São Paulo - SP) -{" "}
                                <Link href="https://hospitalortopedicoaacd.org.br/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">
                                    https://hospitalortopedicoaacd.org.br/
                                </Link>
                            </p>
                        </div>

                        {/* ABRASSE */}
                        <div className="bg-[#003366] text-white p-6 rounded-tl-[20px] rounded-tr-[50px] rounded-br-[20px] rounded-bl-[50px] shadow-[8px_8px_0px_#006633] text-center font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                            <p>
                                <em>ABRASSE</em> (Associação Brasileira de Espinha Bífida) -{" "}
                                <Link href="https://www.abrasse.com.br/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">
                                    https://www.abrasse.com.br/
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. DURANTE VIAGENS AÉREAS (Fundo Azul Escuro) */}
            <section className="w-full bg-[#003366] text-white py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto text-center">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] mb-8">
                        Durante viagens aéreas
                    </h2>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify md:text-left">
                        Quem faz cateterismo urinário intermitente tem direito à assistência especial gratuita nos aeroportos e voos. No Brasil, as regras da{" "}
                        <Link 
                            href="https://www.gov.br/anac" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="underline hover:opacity-80 font-medium"
                        >
                            Agência Nacional de Aviação Civil (ANAC)
                        </Link>{" "}
                        garantem que pessoas com essa necessidade sejam atendidas como PNAE (Passageiro com Necessidade de Assistência Especial). O serviço ajuda desde a hora do check-in até o desembarque, garantindo apoio no raio-X, prioridade na entrada do avião e ajuda com a bagagem de mão médica.<sup>5,6</sup>
                    </p>
                </div>
            </section>

            {/* 8. COMO PEDIR ASSISTÊNCIA E BAGAGEM DE MÃO (Fundo Branco com blocos) */}
            <section className="w-full bg-white text-gray-900 py-16 overflow-hidden">
                <div className="max-w-[900px] mx-auto px-6 md:px-12 mb-12">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-6">
                        Como pedir a assistência especial
                    </h2>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-6">
                        Para garantir o suporte, você deve avisar a companhia aérea com antecedência.
                    </p>
                    <ul className="list-disc pl-5 space-y-4 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify md:text-left mb-16">
                        <li><strong>Avise com antecedência:</strong> O prazo oficial para pedir a assistência é de no mínimo 48 horas antes do voo.</li>
                        <li><strong>Como solicitar:</strong> Você pode fazer o pedido pelo site da empresa na hora de comprar a passagem. Também pode ligar para o atendimento ao cliente da companhia aérea</li>
                        <li><strong>Apoio no avião:</strong> As empresas aéreas têm comissários de bordo treinados para ajudar você a se deslocar até o banheiro usando uma cadeira de rodas especial de bordo (chamada de cadeira de corredor). No entanto, os comissários não fazem o procedimento do cateterismo urinário intermitente por você.</li>
                    </ul>

                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-6">
                        O que levar na bagagem de mão
                    </h2>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-center mb-10">
                        Você deve levar todo o seu material médico na cabine com você. Se a mala despachada sumir, você não ficará sem as sondas.
                    </p>
                </div>

                {/* Blocos escalonados */}
                <div className="w-full flex flex-col space-y-6 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                    {/* Bloco 1: Amarelo (Sondas extras) */}
                    <div className="bg-[#FFC94B] w-[95%] md:w-[85%] mr-auto py-6 px-6 md:px-16 flex items-center justify-end">
                        <div className="max-w-[750px] w-full flex flex-col md:flex-row items-center gap-6">
                            <Image src="/direitos5.png" alt="Mala de mão" width={80} height={60} className="w-[70px] h-auto shrink-0" />
                            <p>
                                <strong>Sondas extras:</strong> Calcule a quantidade necessária para as horas de voo e leve algumas a mais para o caso de atrasos.
                            </p>
                        </div>
                    </div>

                    {/* Bloco 2: Verde (Lenços e álcool) */}
                    <div className="bg-[#80D960] w-[95%] md:w-[85%] ml-auto py-6 px-6 md:px-16 flex items-center justify-start">
                        <div className="max-w-[750px] w-full flex flex-col md:flex-row-reverse items-center justify-end gap-6">
                            <Image src="/direitos3.png" alt="Lenços e álcool em gel" width={80} height={60} className="w-[70px] h-auto shrink-0" />
                            <p className="text-right md:text-left">
                                <strong>Lenços umedecidos e álcool em gel:</strong> Essenciais para higienizar as mãos e a região íntima antes do procedimento dentro do banheiro do avião.
                            </p>
                        </div>
                    </div>

                    {/* Bloco 3: Azul (Receita e laudo) */}
                    <div className="bg-[#59ACFF] w-[95%] md:w-[85%] mr-auto py-6 px-6 md:px-16 flex items-center justify-end">
                        <div className="max-w-[750px] w-full flex flex-col md:flex-row items-center gap-6">
                            <Image src="/direitos2.png" alt="Papéis do laudo" width={80} height={60} className="w-[60px] h-auto shrink-0" />
                            <p>
                                <strong>Receita e laudo médico:</strong> Peça para o seu médico um laudo atualizado explicando que você faz cateterismo intermitente. O documento deve listar os materiais que você carrega (sondas, gel lubrificante, antissépticos). Se o voo for internacional, peça o laudo em inglês.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. CUIDADOS IMPORTANTES COM A SEGURANÇA (RAIO-X) (Fundo Verde Escuro) */}
            <section className="w-full bg-[#006633] text-white py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-8">
                        Cuidados Importantes com a Segurança (Raio-X)
                    </h2>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-8 text-justify md:text-left">
                        Passar pelo raio-X com materiais médicos é simples, mas exige atenção para evitar contaminação.
                    </p>
                    <ul className="list-disc pl-5 space-y-4 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify md:text-left">
                        <li>
                            <strong>Líquidos e géis:</strong> O gel lubrificante (como xilocaína) entra na regra de líquidos em voos. Em voos internacionais, os tubos devem ter no máximo 100 ml cada e estar dentro de um saquinho plástico transparente.
                        </li>
                        <li>
                            <strong>Mostre o laudo:</strong> Deixe o laudo médico fácil de pegar. Se os agentes de segurança do aeroporto tiverem dúvidas sobre as sondas ou os géis, basta mostrar o papel do médico.
                        </li>
                        <li>
                            <strong>Cuidado com a higiene:</strong> Nunca abra a embalagem estéril das sondas para mostrar aos agentes. Se eles precisarem revistar o material, explique que as sondas são estéreis.
                        </li>
                    </ul>
                </div>
            </section>

            {/* 10. REFERÊNCIAS */}
            <section className="w-full bg-white text-black py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto">
                    <Divider className="mb-12" />
                    
                    <References references={listaReferencias} />

                    <div className="mt-8 text-sm md:text-base text-black">
                        <p>*Fonte: gerada por Chat GPT em 31 de agosto de 2026.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}