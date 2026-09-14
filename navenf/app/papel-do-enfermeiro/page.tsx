import Image from "next/image";
import Link from "next/link"; 
import Divider from "@/components/Divider";
import References from "@/components/References";

export default function PapelDoEnfermeiro() {
    // Array de referências exato do design
    const listaReferencias = [
        { id: 1, text: "Costa GG, Santos CLO, Silva MR. Conhecimento, atitude e prática de cuidadores de crianças com mielomeningocele sobre o cateterismo intermitente limpo. Rev Bras Enferm. 2023;76(4):e20220315." },
        { id: 2, text: "Gomes BL, Silva PC, Santos DM, Alencar EN, Lima CR. Educação em saúde no cateterismo vesical intermitente pediátrico. Rev Enferm UFPE on line. 2021;15(1):e247120." },
        { id: 3, text: "International Children's Continence Society (ICCS). Standardization document on pediatric intermittent catheterization. Louvain-la-Neuve: ICCS; 2020." },
        { id: 4, text: "Santos JA, Ramos MC, Oliveira PT, Martins FA. Redes de apoio social e fontes de informação utilizadas por famílias de crianças com necessidades especiais de saúde. Esc Anna Nery Rev Enferm. 2024;28(1):e20230114." },
        { id: 5, text: "Silva MR, Santos EL. O papel da enfermeira na orientação do cateterismo intermitente limpo às famílias de crianças com bexiga neurogênica. Rev Contribuciones a las Ciencias Sociales. 2024;17(8):e9991." },
        { id: 6, text: "Silva RA, Torres MV, Ferreira LN, Castro SB. Cuidados de enfermagem no cateterismo intermitente limpo em crianças. Rev Bras Enferm. 2022;75(2):e20210415." },
    ];

    return (
        <div className="w-full">
            
            {/* 1. CABEÇALHO (Gradiente Verde para Azul) */}
            <section className="w-full bg-gradient-to-b from-[#006633] to-[#003366] py-16 sm:py-24 px-6 md:px-12 flex items-center justify-center">
                <div className="max-w-225 mx-auto">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-calsans text-center leading-tight">
                        Papel do enfermeiro no<br className="hidden sm:block" /> cuidado urológico
                    </h1>
                </div>
            </section>

            {/* 2. CONTEXTO E INFORMAÇÕES (Fundo Azul Escuro) */}
            <section className="w-full bg-[#003366] text-white py-12 px-6 md:px-12">
                <div className="max-w-225 mx-auto space-y-8 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify">
                    
                    <p>
                        Uma equipe de Enfermagem irá trabalhar junto com o urologista nas investigações para buscar a melhor solução para o seu filho. O enfermeiro irá monitorar as funções urinárias e intestinais durante o desenvolvimento do seu filho.
                    </p>
                    
                    <p>
                        Na busca por informações e orientação do procedimento do cateterismo urinário intermitente os profissionais citados como responsáveis foram o enfermeiro e o médico em igualdade de porcentagem. Na educação em saúde, o enfermeiro, por meio das suas atividades educativas, facilita a compreensão sobre o tema bexiga neurogênica e a técnica do cateterismo urinário intermitente. Somado a relação entre o enfermeiro, o paciente e seus familiares colaboram para a adesão à técnica do cateterismo urinário intermitente.<sup>1,3</sup>
                    </p>

                    {/* IMAGEM 1: Grupo */}
                    <div className="flex justify-center relative py-6">
                        <Image 
                            src="/enfermeiro1.png" 
                            alt="Equipe médica com crianças e cadeirante" 
                            width={700} height={500} 
                            className="w-full max-w-162.5 h-auto object-contain"
                        />
                        <span className="absolute top-6 right-[15%] text-xl">*</span>
                    </div>

                    <p>
                        Assim, é importante reconhecer que, durante a reabilitação do paciente que necessita de cateterismo urinário intermitente, os enfermeiros são essenciais para preparar o paciente e/ou cuidador em relação à capacitação, à gestão e à aquisição de material, pois quando estes desenvolvem autoconfiança para a realização do procedimento, o desempenho é mais eficiente e favorece o processo de reabilitação.<sup>4</sup>
                    </p>

                    {/* IMAGENS 2 e 3: Gestante e Médico */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 py-6 relative">
                        <div className="relative">
                            <Image 
                                src="/enfermeiro2.png" 
                                alt="Gestante conversando com enfermeira" 
                                width={350} height={350} 
                                className="w-full max-w-75 h-auto object-contain"
                            />
                            <span className="absolute top-1/2 -right-4 text-xl">*</span>
                        </div>
                        
                        <div className="relative">
                            <Image 
                                src="/enfermeiro.png" 
                                alt="Médico lendo livro sobre Espinha Bífida" 
                                width={350} height={350} 
                                className="w-full max-w-75 h-auto object-contain"
                            />
                            <span className="absolute top-10 right-4 text-xl">*</span>
                        </div>
                    </div>

                    <p>
                        Os grupos de apoio, organizações de pacientes, médicos/enfermeiros especializados e mídias sociais são considerados as fontes de informação mais úteis pelos pais/cuidadores. É primordial que o profissional consiga aproximar-se desse familiar para entender os principais anseios e dúvidas desses cuidadores, utilizando uma linguagem clara e objetiva, permitindo-lhes uma melhor compreensão dos fatos de maneira que esses sentimentos não interfiram de maneira negativa no cuidado da criança/adolescente com mielo e usuárias de cateterismo urinário intermitente.<sup>5,6</sup>
                    </p>

                    <p>
                        O Cateterismo Intermitente Limpo é o tratamento mais indicado para esvaziar a bexiga. Ele protege os rins e evita infecções graves.<sup>6</sup>
                    </p>
                    
                </div>
            </section>

            {/* 3. TREINAMENTO E EDUCAÇÃO (Fundo Branco com blocos coloridos) */}
            <section className="w-full bg-white text-gray-900 py-16 overflow-hidden">
                <div className="max-w-225 mx-auto px-6 md:px-12 mb-10">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-6">
                        1. Treinamento e educação em saúde
                    </h2>
                    <p className="text-justify font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                        O enfermeiro ensina o passo a passo do cateterismo urinário intermitente.<br className="hidden sm:block" />
                        Esse treinamento inclui:
                    </p>
                </div>

                <div className="w-full flex flex-col space-y-6 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                    {/* Bloco Azul */}
                    <div className="bg-[#59ACFF] w-[95%] md:w-[85%] lg:w-[75%] mr-auto py-6 px-6 md:px-16 flex items-center justify-end">
                        <div className="max-w-175 w-full text-justify">
                            <p><strong>Higiene correta:</strong> Lavar bem as mãos e limpar a região íntima antes de usar a sonda para não levar bactérias para a bexiga.</p>
                        </div>
                    </div>

                    {/* Bloco Amarelo */}
                    <div className="bg-[#FFC94B] w-[95%] md:w-[85%] lg:w-[75%] ml-auto py-6 px-6 md:px-16 flex items-center justify-start">
                        <div className="max-w-175 w-full text-justify">
                            <p>
                                <strong>Uso dos materiais:</strong> Explicar a diferença e o uso correto de sondas comuns (de PVC) ou{" "}
                                <Link href="https://mieloblog.com.br/wp-content/uploads/2016/01/APOSTILA_MAOS_UNIDAS.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity cursor-pointer">
                                    sondas hidrofílicas
                                </Link>
                                , que já vêm lubrificadas e agridem menos o canal da urina.
                            </p>
                        </div>
                    </div>

                    {/* Bloco Verde */}
                    <div className="bg-[#80D960] w-[95%] md:w-[85%] lg:w-[75%] mr-auto py-6 px-6 md:px-16 flex items-center justify-end">
                        <div className="max-w-175 w-full text-justify">
                            <p><strong>Técnica de inserção:</strong> Ensinar como colocar a sonda de forma suave até a urina começar a sair.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ESTÍMULO À AUTONOMIA E INDEPENDÊNCIA (Fundo Azul Escuro) */}
            <section className="w-full bg-[#003366] text-white py-16 px-6 md:px-12">
                <div className="max-w-225 mx-auto">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-10">
                        2. Estímulo à autonomia e independência
                    </h2>
                    
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="w-full md:w-1/2 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify">
                            <p>
                                À medida que a criança com mielo cresce, o enfermeiro trabalha para que ela faça o autocateterismo e quando não é possível, ensina o cuidador. O objetivo é fazer o paciente entender sua rotina e conseguir esvaziar a própria bexiga sozinho na escola ou em passeios, ganhando liberdade e melhorando sua autoestima.
                            </p>
                        </div>
                        {/* IMAGEM 4 */}
                        <div className="w-full md:w-1/2 flex justify-center relative">
                            <Image 
                                src="/enfermeiro4.png" 
                                alt="Menino com capa de super-herói" 
                                width={250} height={350} 
                                className="w-full max-w-62.5 h-auto object-contain"
                            />
                            <span className="absolute top-0 right-[20%] md:right-[30%] text-white text-xl">*</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PREVENÇÃO E MONITORAMENTO DE COMPLICAÇÕES (Fundo Branco) */}
            <section className="w-full bg-white text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-225 mx-auto">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-8">
                        3. Prevenção e monitoramento de complicações
                    </h2>
                    <p className="text-justify font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-6">
                        O enfermeiro acompanha o paciente de perto para evitar problemas de saúde comuns. Ele orienta a família a:
                    </p>

                    <ul className="list-disc pl-5 md:pl-8 space-y-3 text-justify font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-10">
                        <li>Seguir os horários certos (geralmente a cada 4 ou 6 horas) para a bexiga não encher demais.</li>
                        <li>Ficar atento a sinais de infecção urinária, como urina com cheiro forte, cor escura, febre ou dor nas costas.</li>
                        <li>Observar sangramentos ou feridas causadas pela passagem da sonda.</li>
                    </ul>

                    {/* IMAGEM 5 */}
                    <div className="flex justify-center relative">
                        <Image 
                            src="/enfermeiro5.png" 
                            alt="Família em consulta com enfermeiro" 
                            width={600} height={400} 
                            className="w-full max-w-150 h-auto object-contain"
                        />
                        <span className="absolute top-10 right-[15%] text-gray-900 text-xl">*</span>
                    </div>
                </div>
            </section>

            {/* 6. APOIO EMOCIONAL E REDE DE CUIDADOS (Fundo Amarelo) */}
            <section className="w-full bg-[#FFC94B] text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-225 mx-auto text-center">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] mb-6">
                        4. Apoio emocional e rede de cuidados
                    </h2>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify">
                        Adaptar-se à rotina de passar uma sonda várias vezes ao dia pode ser difícil e cansativo para a família. O enfermeiro serve como uma ponte de apoio, ajudando a amenizar medos, esclarecer dúvidas e incentivar a continuidade do tratamento. Além disso, ele ajuda a organizar a quantidade de materiais necessários que a família deve receber da Unidade Básica de Saúde.<sup>4,5</sup>
                    </p>
                </div>
            </section>

            {/* 7. REFERÊNCIAS (Fundo Branco) */}
            <section className="w-full bg-white py-16 px-6 md:px-12 text-black">
                <div className="max-w-225 mx-auto">
                    {/* Componente de Divisão (Bolinhas) */}
                    <Divider className="mb-12" />
                    
                    {/* Componente de Referências */}
                    <References references={listaReferencias} />

                    {/* Nota de rodapé */}
                    <div className="mt-8 text-sm md:text-base text-gray-800">
                        <p>*Fonte: gerada por Chat GPT em 31 de agosto de 2026.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}