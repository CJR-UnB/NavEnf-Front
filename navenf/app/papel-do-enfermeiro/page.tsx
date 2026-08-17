import Image from "next/image";
import Divisao from "@/components/Divisao";
import References from "@/components/References";

export default function PapelDoEnfermeiro() {
    // Array de referências
    const listaReferencias = [
        {
            id: 1,
            text: "Costa GG, Santos CLO, Silva MR. Conhecimento, atitude e prática de cuidadores de crianças com mielomeningocele sobre o cateterismo intermitente limpo. Rev Bras Enferm. 2023;76(4):e20220315.",
        },
        {
            id: 2,
            text: "Gomes BL, Silva PC, Santos DM, Alencar EN, Lima CR. Educação em saúde no cateterismo vesical intermitente pediátrico. Rev Enferm UFPE on line. 2021;15(1):e247128.",
        },
        {
            id: 3,
            text: "International Children's Continence Society (ICCS). Standardization document on pediatric intermittent catheterization. Louvain-la-Neuve: ICCS; 2020.",
        },
        {
            id: 4,
            text: "Santos JA, Ramos MC, Oliveira PT, Martins FA. Redes de apoio social e fontes de informação utilizadas por famílias de crianças com necessidades especiais de saúde. Esc Anna Nery Rev Enferm. 2024;28(1):e20230114.",
        },
        {
            id: 5,
            text: "Silva MR, Santos EL. O papel da enfermeira na orientação do cateterismo intermitente limpo às famílias de crianças com bexiga neurogênica. Rev Contribuciones a las Ciencias Sociales. 2024;17(8):e9991.",
        },
        {
            id: 6,
            text: "Silva RA, Torres MV, Ferreira LN, Castro SB. Cuidados de enfermagem no cateterismo intermitente limpo em crianças. Rev Bras Enferm. 2022;75(2):e20210415.",
        },
    ];

    return (
        <div className="min-h-screen bg-[#fef5d8]">
            
            {/* Hero Section com a Imagem de Fundo e Título */}
            <section className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/hero-enfermeiro.jpg" 
                    alt="Profissional de saúde segurando prancheta"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-blue-900/30" aria-hidden="true" />
                <h1 className="relative z-10 text-white text-center font-['Castoro'] text-4xl sm:text-5xl md:text-6xl drop-shadow-md px-4">
                    Papel do Enfermeiro no Cuidado Urológico
                </h1>
            </section>

            {/* Conteúdo Principal */}
            <main className="mx-auto w-full max-w-[900px] px-6 py-12 md:px-12 md:py-20 font-['Atkinson_Hyperlegible'] text-gray-900">
                
                {/* Introdução */}
                <section className="space-y-6 text-center md:text-lg leading-relaxed mb-16">
                    <p>
                        Uma equipe de enfermagem irá trabalhar com o Urologista para ajudá-lo nas investigações médicas e buscar a melhor solução para o seu filho. O enfermeiro irá monitorar as funções urinárias e intestinais durante o desenvolvimento do seu filho.
                    </p>
                    <p>
                        Na busca por informações e orientação do procedimento do cateterismo urinário intermitente os profissionais citados como responsáveis foram o enfermeiro e o médico em igualdade de porcentagem. Na educação em saúde, o enfermeiro, por meio das suas atividades educativas, facilita a compreensão sobre o tema bexiga neurogênica e a técnica do cateterismo urinário. Somado a relação entre o enfermeiro, o paciente e seus familiares colaboram para a adesão à técnica do cateterismo urinário intermitente. ¹,²
                    </p>
                    <p>
                        Assim, é importante reconhecer que, durante a reabilitação do paciente que necessita de cateterismo urinário intermitente, os enfermeiros são essenciais para preparar o paciente e/ou cuidador em relação à capacitação, à gestão e à aquisição de material, pois quando estes desenvolvem autoconfiança para a realização do procedimento, o desempenho é mais eficiente e favorece o processo de reabilitação.⁴
                    </p>
                </section>

                {/* Imagem 1: Estetoscópio */}
                <div className="flex justify-center mb-16">
                    <Image
                        src="/enfermeiro1.png" 
                        alt="Enfermeiro com estetoscópio"
                        width={600}
                        height={400}
                        className="w-full max-w-[600px] h-auto object-contain"
                    />
                </div>

                <section className="space-y-6 text-center md:text-lg leading-relaxed mb-16">
                    <p>
                        Os grupos de apoio, organizações de pacientes, médicos/enfermeiros especializados e mídias sociais são considerados as fontes de informação mais úteis pelos pais/cuidadores. É primordial que o profissional consiga aproximar-se desse familiar para entender os principais anseios e dúvidas desses cuidadores, utilizando uma linguagem clara e objetiva, permitindo-lhes uma melhor compreensão dos fatos de maneira que esses sentimentos não interfiram de maneira negativa no cuidado da criança/adolescente com espinha bífida e usuárias de cateterismo urinário intermitente. ⁵,⁶
                    </p>
                    <p>
                        O Cateterismo Intermitente Limpo é o tratamento mais indicado para esvaziar a bexiga. Ele protege os rins e evita infecções graves. ⁶
                    </p>
                </section>

                {/* Tópico 1 */}
                <section className="mb-16">
                    <h2 className="text-xl sm:text-2xl font-['Castoro'] text-center font-bold mb-6">
                        1. Treinamento e Educação em Saúde
                    </h2>
                    <p className="text-center md:text-lg leading-relaxed mb-6">
                        O enfermeiro ensina o passo a passo do cateterismo urinário intermitente. Esse treinamento inclui:
                    </p>
                    <ul className="list-disc space-y-3 pl-5 md:pl-10 md:text-lg leading-relaxed max-w-[750px] mx-auto mb-10">
                        <li><strong>Higiene correta:</strong> Lavar bem as mãos e limpar a região íntima antes de usar a sonda para não levar bactérias para a bexiga.</li>
                        <li>
    <strong>Uso dos materiais:</strong> Explicar a diferença e o uso correto de sondas 
    comuns (de PVC) ou{" "}
    <a 
        href="https://mieloblog.com.br/wp-content/uploads/2016/01/APOSTILA_MAOS_UNIDAS.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="underline hover:opacity-70 transition-opacity cursor-pointer"
    >
        sondas hidrofílicas
    </a>
    , que já vêm lubrificadas e agridem menos o canal da urina.
</li>
                        <li><strong>Técnica de inserção:</strong> Ensinar como colocar a sonda de forma suave até a urina começar a sair.</li>
                    </ul>

                    {/* Imagem 2: Lavando as mãos */}
                    <div className="flex justify-center">
                        <Image
                            src="/enfermeiro2.png" 
                            alt="Pessoa lavando as mãos"
                            width={600}
                            height={400}
                            className="w-full max-w-[600px] h-auto object-contain"
                        />
                    </div>
                </section>

                {/* Tópico 2 */}
                <section className="mb-16">
                    <h2 className="text-xl sm:text-2xl font-['Castoro'] text-center font-bold mb-8">
                        2. Estímulo à Autonomia e Independência
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Imagem 3: Criança andando */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <Image
                                src="/enfermeiro3.png" 
                                alt="Criança andando na natureza"
                                width={350}
                                height={350}
                                className="w-full max-w-[350px] h-auto object-contain"
                            />
                        </div>
                        <div className="w-full md:w-1/2 text-left md:text-lg leading-relaxed">
                            <p>
                                À medida que a criança com espinha bífida cresce o enfermeiro trabalha para que ela faça o autocateterismo e quando não é possível, ensina o cuidador. O objetivo é fazer o paciente entender sua rotina e conseguir esvaziar a própria bexiga sozinho na escola ou em passeios, ganhando liberdade e melhorando sua autoestima.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tópico 3 */}
                <section className="mb-16">
                    <h2 className="text-xl sm:text-2xl font-['Castoro'] text-center font-bold mb-6">
                        3. Prevenção e Monitoramento de Complicações
                    </h2>
                    <p className="text-center md:text-lg leading-relaxed mb-6">
                        O enfermeiro acompanha o paciente de perto para evitar problemas de saúde comuns. Ele orienta a família a:
                    </p>
                    <ul className="list-disc space-y-3 pl-5 md:pl-10 md:text-lg leading-relaxed max-w-[750px] mx-auto">
                        <li>Seguir os horários certos (geralmente a cada 4 ou 6 horas) para a bexiga não encher demais.</li>
                        <li>Ficar atento a sinais de infecção urinária, como urina com cheiro forte, cor escura, febre ou dor nas costas.</li>
                        <li>Observar sangramentos ou feridas causadas pela passagem da sonda.</li>
                    </ul>
                </section>

                {/* Tópico 4 */}
                <section className="mb-16">
                    <h2 className="text-xl sm:text-2xl font-['Castoro'] text-center font-bold mb-6">
                        4. Apoio Emocional e Rede de Cuidados
                    </h2>
                    <p className="text-center md:text-lg leading-relaxed max-w-[800px] mx-auto mb-10">
                        Adaptar-se à rotina de passar uma sonda várias vezes ao dia pode ser difícil e cansativo para a família. O enfermeiro serve como uma ponte de apoio, ajudando a amenizar medos, esclarecer dúvidas e incentivar a continuidade do tratamento. Além disso, ele ajuda a organizar a quantidade de materiais necessários que a família deve receber da Unidade Básica de Saúde. ⁴,⁵
                    </p>

                    {/* Imagem 4: Mãos dadas */}
                    <div className="flex justify-center">
                        <Image
                            src="/enfermeiro4.png" 
                            alt="Mãos dadas representando apoio"
                            width={600}
                            height={400}
                            className="w-full max-w-[600px] h-auto object-contain"
                        />
                    </div>
                </section>

                {/* Divisão Visual (Bolinhas) */}
                <Divisao className="mt-20 mb-10" />

                {/* Referências */}
                <References references={listaReferencias} />

            </main>
        </div>
    );
}