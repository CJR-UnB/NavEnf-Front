import Image from "next/image";
import Divider from "@/components/Divider";
import References from "@/components/References";

export default function EstrategiasFacilitam() {
    const listaReferencias = [
        { id: 1, text: "Sarı C, Kalyoncu M, Demirbağ BC. A qualitative study on the experiences of Turkish caregivers of learning clean intermittent catheterization. J Pediatr Nurs. 2025 Jan-Feb;89:e67-e73. doi: 10.1016/j.pedn.2024.10.015." },
        { id: 2, text: "Sarı C, Demirbağ BC. Investigation of anxiety levels in caregivers who perform clean intermittent catheterization on their children and affecting factors. Neurourol Urodyn. 2024 Mar;43(3):738-747. doi: 10.1002/nau.25388. PMID: 38230988." },
        { id: 3, text: "Bauer SB, Saunders RA, Masoom SN, Choung K, Hayes LC, Price DE, et al. The art of introducing clean intermittent catheterization: How families respond and adapt: A qualitative study. Neurourol Urodyn. 2024 Jan;43(1):155-163. doi: 10.1002/nau.25085." },
        { id: 4, text: "Kawahara T, Yamazaki A. Parent-youth interactions: Transitioning to toileting self-management in spina bifida patients. Health Care Transition. 2023 Dec;1:100009. doi: 10.1016/j.hctj.2023.100009." },
        { id: 5, text: "Faleiros F, Pelosi G, Warschausky S, Tate D, Käppler C, Thomas E. Factors influencing the use of intermittent bladder catheterization by individuals with spina bifida in Brazil and Germany. Rehabil Nurs. 2016 Jan-Feb;41(1):1-7. doi: 10.1002/rnj.302." },
        { id: 6, text: "Faleiros F, Cordeiro A, Favoretto N, Käppler C, Murray C, Tate D. Patients With Spina Bifida and Their Caregivers' Feelings About Intermittent Bladder Catheterization in Brazil and Germany: A Correlational Study. Rehabil Nurs. 2017 Jul-Aug;42(4):175-179. doi: 10.1002/rnj.223. PMID: 26510490." },
        { id: 7, text: "Freitas GL, Sena RR, Silva JCF, Castro FFS. Reabilitação de crianças e adolescentes com mielomeningocele: o cotidiano de mães cuidadoras. Rev Gaúcha Enferm. 2016;37(4):e60310. doi: 10.1590/1983-1447.2016.04.60310." },
        { id: 8, text: "Lim SW, Lee HE, Davis M, Park K. Perceived barriers and difficulties of intermittent catheterization: In Korean patients with spinal dysraphism and their parents. Neurourol Urodyn. 2016 Mar;35(3):395-399. doi: 10.1002/nau.22716. PMID: 25546707." },
        { id: 9, text: "Kanaheswari Y, Razak NN, Chandran V, Ong LC. Predictors of parenting stress in mothers of children with spina bifida. Spinal Cord. 2011 Mar;49(3):376-380. doi: 10.1038/sc.2010.125. PMID: 20838404." },
        { id: 10, text: "Edwards M, Borzyskowski M, Cox A, Badcock J. Neuropathic bladder and intermittent catheterization: social and psychological impact on children and adolescents. Dev Med Child Neurol. 2004 Mar;46(3):168-177. doi: 10.1017/s0012162204000381. PMID: 14995086." },
        { id: 11, text: '"Birdefalik sidiklik kateteri", foto de MrArifnajafov, via Wikimedia Commons, licenciada sob CC BY 3.0. Licença: https://creativecommons.org/licenses/by/3.0/deed.en' }
    ];

    return (
        <div className="w-full">
            
            {/* 1. CABEÇALHO (Gradiente Verde para Azul) */}
            <section className="w-full bg-gradient-to-b from-[#006633] to-[#003366] py-16 sm:py-24 px-6 md:px-12 flex items-center justify-center">
                <div className="max-w-[900px] mx-auto">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-calsans text-center leading-tight">
                        Estratégias que facilitam o<br className="hidden sm:block" /> cateterismo urinário<br className="hidden sm:block" /> intermitente
                    </h1>
                </div>
            </section>

            <div className="w-full bg-white h-8 md:h-12" />

            {/* 2. DOR E MEDO (Fundo Amarelo) */}
            <section className="w-full bg-[#FFC94B] text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto text-center">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] mb-6">
                        Dor e medo: Como uma técnica adequada<br className="hidden sm:block"/> pode mudar isso?
                    </h2>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-6">
                        Um conjunto de sentimentos como dor, medo, ansiedade, vergonha e insegurança podem ser comuns e vivenciados por cuidadores e crianças com mielo usuárias de cateterismo urinário intermitente.<sup>1,2,4</sup>
                    </p>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                        Todos esses sentimentos estão relacionados ao medo de machucar a criança, inserir o cateter de forma incorreta ou causar infecções.<sup>2,4</sup> Especialmente quando se recebe pouco treinamento ou apoio profissional.<sup>1,3</sup>
                    </p>
                </div>
            </section>

            {/* 3. PASSO A PASSO (Fundo Branco) */}
            <section className="w-full bg-white text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-8">
                        Passo a passo para uma técnica adequada
                    </h2>
                    
                    <ol className="list-decimal pl-5 md:pl-8 space-y-3 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-10 max-w-[800px] mx-auto">
                        <li><strong>Higienização</strong> das mãos antes de realizar o cateterismo urinário intermitente: Lave bem as mãos com água e sabonete neutro (incluindo entre os dedos e polegares).</li>
                        <li><strong>Escolha o material adequado:</strong> Separe o cateter/sonda do tamanho adequado, um lubrificante à base de água (caso a sonda não seja hidrofílica).</li>
                        <li><strong>Realize a limpeza íntima:</strong> Antes do cateterismo, limpe a região genital para evitar a entrada de bactérias.</li>
                        <li><strong>Atente-se a anatomia na hora da inserção:</strong> Segure o pênis apontado para cima (próximo ao abdômen) ou afaste os grandes lábios para expor o meato uretral.</li>
                        <li><strong>Introduza a sonda suavemente.</strong> Nunca force a passagem; se sentir resistência, respire fundo e relaxe.</li>
                        <li><strong>Em caso de dúvidas</strong>, dificuldades ou dor durante o processo, procure um profissional de saúde.</li>
                    </ol>

                    {/* IMAGEM 1: Ilustração passo a passo */}
                    <div className="flex justify-center relative">
                        <Image 
                            src="/estrategias1.png" 
                            alt="Ilustração do passo a passo do cateterismo" 
                            width={800} height={500} 
                            className="w-full max-w-[750px] h-auto object-contain"
                        />
                        <span className="absolute top-0 right-[5%] text-xl">*</span>
                    </div>
                </div>
            </section>

            {/* 4. CATETERISMO NA INFÂNCIA (Fundo Amarelo) */}
            <section className="w-full bg-[#FFC94B] text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto">
                    <h2 className="font-cal text-[clamp(0.65rem,4vw,2.5rem)] font-normal leading-[1.1] text-center mb-8">
                        Cateterismo na infância: Como o treinamento<br /> precoce favorece a adesão e a independência
                    </h2>
                    
                    <p className="underline font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-4 text-center md:text-justify max-w-[850px] mx-auto">
                        Por que iniciar cedo faz diferença?
                    </p>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify md:text-justify max-w-[850px] mx-auto">
                        Bebês são mais tolerantes e tecnicamente mais fáceis de cateterizar do que crianças pequenas, que apresentam comportamentos mais desafiadores conforme crescem e desenvolvem autoconsciência.<sup>1,4</sup> Iniciar a prática na primeira infância facilita o aprendizado, a adaptação e a adesão ao longo da vida.<sup>1</sup>
                    </p>
                </div>
            </section>

            {/* 5. BENEFÍCIOS DO INÍCIO PRECOCE (Fundo Branco com blocos coloridos) */}
            <section className="w-full bg-white text-gray-900 py-16 overflow-hidden">
                <div className="max-w-[900px] mx-auto px-6 md:px-12 mb-8">
                    <h3 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] mb-6">
                        Benefícios do início precoce:
                    </h3>
                </div>

                <div className="w-full flex flex-col space-y-6 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                    {/* Bloco Azul */}
                    <div className="bg-[#59ACFF] w-[95%] md:w-[85%] lg:w-[80%] mr-auto py-6 px-6 md:px-16 flex items-center justify-end">
                        <div className="max-w-[800px] w-full text-justify">
                            <p><strong>Melhor adesão a longo prazo:</strong> Quanto maior a frequência diária praticada, menor a probabilidade de abandono do procedimento.<sup>1</sup></p>
                        </div>
                    </div>

                    {/* Bloco Amarelo */}
                    <div className="bg-[#FFC94B] w-[95%] md:w-[85%] lg:w-[80%] ml-auto py-6 px-6 md:px-16 flex items-center justify-start">
                        <div className="max-w-[800px] w-full text-justify">
                            <p><strong>Aprendizado facilitado:</strong> Iniciar na primeira infância foi identificado pelos cuidadores como uma facilidade de aprendizado e adaptação da técnica.<sup>1,4</sup></p>
                        </div>
                    </div>

                    {/* Bloco Azul */}
                    <div className="bg-[#59ACFF] w-[95%] md:w-[85%] lg:w-[80%] mr-auto py-6 px-6 md:px-16 flex items-center justify-end">
                        <div className="max-w-[800px] w-full text-justify">
                            <p><strong>Menor risco de complicações:</strong> A continuidade do cateterismo reduz o risco de ITU, principal complicação, e previne mortalidade por complicações renais.<sup>8</sup></p>
                        </div>
                    </div>

                    {/* Bloco Verde */}
                    <div className="bg-[#80D960] w-[95%] md:w-[85%] lg:w-[80%] ml-auto py-6 px-6 md:px-16 flex items-center justify-start">
                        <div className="max-w-[800px] w-full text-justify">
                            <p><strong>Menor ansiedade nos cuidadores:</strong> Cuidadores que recebem treinamento adequado apresentam níveis de ansiedade significativamente mais baixos.<sup>3</sup></p>
                        </div>
                    </div>
                </div>

                {/* Divisão central */}
                <div className="mt-16">
                    <Divider />
                </div>

                {/* Transição para a autonomia */}
                <div className="max-w-[900px] mx-auto px-6 md:px-12 mt-16 text-center md:text-justify">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-6">
                        Transição para a autonomia no Cateterismo
                    </h2>
                    <p className="font-bold font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-6">
                        Como pais e jovens podem compartilhar progressivamente entre si a responsabilidade do cateterismo?
                    </p>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify md:text-justify">
                        A independência na técnica não acontece de uma hora para outra, ela é construída aos poucos, juntos. Pais e filhos aprendem a dividir responsabilidades, errar, ajustar e crescer nesse processo. Entender como isso funciona ajuda toda a família a caminhar com mais segurança.<sup>5</sup>
                    </p>
                </div>
            </section>

            {/* 6. O QUE DESENCADEIA A TRANSIÇÃO (Fundo Amarelo + Cards) */}
            <section className="w-full bg-[#FFC94B] text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-10">
                        O que desencadeia a transição
                    </h2>
                    
                    {/* Grid dos Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        {/* Card Verde (Imagem 2) */}
                        <div className="bg-[#80D960] rounded-xl p-6 flex flex-col items-center text-center relative">
                            <Image src="/estrategias2.png" alt="Viagens e passeios" width={120} height={120} className="mb-4" />
                            <span className="absolute top-6 right-6 text-xl">*</span>
                            <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-center">Viagens e passeios escolares sem os pais</p>
                        </div>

                        {/* Card Azul (Imagem 3) */}
                        <div className="bg-[#59ACFF] rounded-xl p-6 flex flex-col items-center text-center relative">
                            <Image src="/estrategias3.png" alt="Escola" width={120} height={120} className="mb-4" />
                            <span className="absolute top-6 right-6 text-xl">*</span>
                            <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-center">Entrada em nova escola ou período integral</p>
                        </div>

                        {/* Card Verde (Imagem 4) */}
                        <div className="bg-[#80D960] rounded-xl p-6 flex flex-col items-center text-center relative">
                            <Image src="/estrategias4.png" alt="Dormitório" width={120} height={120} className="mb-4" />
                            <span className="absolute top-6 right-6 text-xl">*</span>
                            <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-center">Morar em dormitório ou longe da família</p>
                        </div>

                        {/* Card Azul (Imagem 5) */}
                        <div className="bg-[#59ACFF] rounded-xl p-6 flex flex-col items-center text-center relative">
                            <Image src="/estrategias5.png" alt="Membro ativo" width={120} height={120} className="mb-4" />
                            <span className="absolute top-6 right-6 text-xl">*</span>
                            <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-center">Tornar-se membro ativo da sociedade</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. COMO O PROCESSO ACONTECE (Fundo Branco com Pills CSS customizadas) */}
            <section className="w-full bg-white text-gray-900 py-16 px-6 md:px-12 overflow-hidden">
                <div className="max-w-[900px] mx-auto">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-12">
                        Como o processo acontece (passo a passo)
                    </h2>

                    <div className="space-y-12">
                        {/* Passo 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                <div className="bg-[#003366] text-white px-8 py-4 rounded-tl-lg rounded-br-lg rounded-tr-[40px] rounded-bl-[40px] shadow-[8px_8px_0px_#006633] text-center w-full max-w-[350px]">
                                    Compartilhar a consciência da independência
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-center md:text-justify">
                                Pais e jovens reconhecem juntos que a autonomia é necessária e passam a definir metas específicas para a autogestão do jovem.
                            </div>
                        </div>

                        {/* Passo 2 */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                                <div className="bg-[#006633] text-white px-8 py-4 rounded-tl-lg rounded-br-lg rounded-tr-[40px] rounded-bl-[40px] shadow-[8px_8px_0px_#FFC94B] text-center w-full max-w-[350px]">
                                    Identificar o que o jovem já consegue fazer
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-center md:text-right">
                                Juntos, identificam quais partes do cateterismo urinário intermitente o jovem pode realizar sozinho e quais ainda precisam de apoio, sem pressa, sem pressão.
                            </div>
                        </div>

                        {/* Passo 3 */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                <div className="bg-[#FFC94B] text-gray-900 font-medium px-8 py-4 rounded-tl-lg rounded-br-lg rounded-tr-[40px] rounded-bl-[40px] shadow-[8px_8px_0px_#003366] text-center w-full max-w-[350px]">
                                    Criar situações de autossuficiência
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-center md:text-justify">
                                Os pais reduzem conscientemente a ajuda e criam situações em que o jovem realiza o cateterismo urinário intermitente sozinho, mesmo que de forma imperfeita.
                            </div>
                        </div>

                        {/* Passo 4 */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                                <div className="bg-[#003366] text-white px-8 py-4 rounded-tl-lg rounded-br-lg rounded-tr-[40px] rounded-bl-[40px] shadow-[8px_8px_0px_#006633] text-center w-full max-w-[350px]">
                                    Aprender por experimentação conjunta
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-center md:text-right">
                                Pais e jovens adaptam ferramentas e métodos juntos, resolvendo problemas um por um e acumulando experiências ao longo do tempo.
                            </div>
                        </div>

                        {/* Passo 5 */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                <div className="bg-[#006633] text-white px-8 py-4 rounded-tl-lg rounded-br-lg rounded-tr-[40px] rounded-bl-[40px] shadow-[8px_8px_0px_#FFC94B] text-center w-full max-w-[350px]">
                                    Conciliar visões diferentes de independência
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-center md:text-justify">
                                Pais e jovens frequentemente têm ideias diferentes sobre o que significa "ser independente" e aprendem a alinhar essas visões passo a passo.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

{/* 8. QUANDO O PROCESSO FUNCIONA BEM (Caixas sobrepostas) */}
            <section className="w-full bg-white py-16 px-6 md:px-12">
                <div className="max-w-[1000px] mx-auto flex flex-col">
                    
                    {/* Caixa Azul Escura (Com md:pb-32 para criar espaço vazio embaixo pro amarelo não tampar o texto) */}
                    <div className="bg-[#003366] text-white p-8 md:p-12 md:pb-32 w-full md:w-[75%] relative z-10 shadow-lg md:rounded-lg">
                        <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center md:text-justify mb-6">
                            Quando o processo funciona bem
                        </h2>
                        <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-4 text-justify md:text-justify">
                            Como pais e jovens podem compartilhar progressivamente entre si a responsabilidade do cateterismo urinário intermitente?
                        </p>
                        <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify md:text-justify">
                            A independência na técnica não acontece de uma hora para outra, ela é construída aos poucos, juntos. Pais e filhos aprendem a dividir responsabilidades, errar, ajustar e crescer nesse processo. Entender como isso funciona ajuda toda a família a caminhar com mais segurança.<sup>5</sup>
                        </p>
                    </div>

                    {/* Caixa Amarela (Sobe e sobrepõe apenas a área vazia do azul) */}
                    <div className="bg-[#FFC94B] w-full md:w-[70%] relative z-20 md:-mt-24 p-8 md:p-12 flex justify-center items-center self-end shadow-xl md:rounded-lg">
                        <div className="relative">
                            <Image
                                src="/enfermeiro1.png"
                                alt="Família e médicos felizes"
                                width={500} height={350}
                                className="w-full max-w-[450px] h-auto object-contain"
                            />
                            <span className="absolute top-0 right-4 text-xl">*</span>
                        </div>
                    </div>

                </div>
            </section>
            {/* 9. REFERÊNCIAS (Fundo Branco / Texto Preto) */}
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