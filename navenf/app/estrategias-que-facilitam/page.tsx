import Image from "next/image";
import Divisao from "@/components/Divisao";
import References from "@/components/References";
import TextoDestacado from "@/components/texto_destacado";

export default function EstrategiasFacilitam() {
    // Lista completa de referências
    const listaReferencias = [
        { id: 1, text: "Nono D, Ssemata AS, Bammuk Mbazzi F, Seeley J. Practice of clean intermittent catheterisation in children with spina bifida: A scoping review. Afr J Disabil. 2024 Nov 22;13:1473. doi: 10.4102/ajod.v13i0.1473. PMID: 38642375; PMCID: PMC12242843." },
        { id: 2, text: "Sarı C, Kalyoncu M, Demirbağ BC. A qualitative study on the experiences of Turkish caregivers of learning clean intermittent catheterization. J Pediatr Nurs. 2025 Jan-Feb;89:e67-e73. doi: 10.1016/j.pedn.2024.08.015." },
        { id: 3, text: "Sarı C, Demirbağ BC. Investigation of anxiety levels in caregivers who perform clean intermittent catheterization on their children and affecting factors. Neurourol Urodyn. 2024 Mar;43(3):738-747. doi: 10.1002/nau.25380. PMID: 38230908." },
        { id: 4, text: "Bauer SB, Saunders RA, Masoom SN, Choung K, Hayes LC, Price DE, et al. The art of introducing clean intermittent catheterization: How families respond and adapt: A qualitative study. Neurourol Urodyn. 2024;43(1):150-158. doi: 10.1002/nau.25085." },
        { id: 5, text: "Kawahara T, Yamazaki A. Parent-youth interactions: Transitioning to toileting self-management in spina bifida patients. Health Care Transition. 2023;1:100009. doi: 10.1016/j.hctj.2023.100009." },
        { id: 6, text: "Faleiros F, Pelosi G, Warschausky S, Tate D, Käppler C, Thomas E. Factors influencing the use of intermittent bladder catheterization by Individuals with spina bifida in Brazil and Germany. Rehabil Nurs. 2016 Jan-Feb;41(1):35-41. doi: 10.1002/rnj.302." },
        { id: 7, text: "Faleiros F, Cordeiro A, Favoretto N, Käppler C, Murray C, Tate D. Patients With Spina Bifida and Their Caregivers' Feelings About Intermittent Bladder Catheterization in Brazil and Germany: A Correlational Study. Rehabil Nurs. 2017 Jul-Aug;42(4):175-179. doi: 10.1002/rnj.223. PMID: 26516490." },
        { id: 8, text: "Freitas GL, Sena RR, Silva JCF, Castro FFS. Reabilitação de crianças e adolescentes com mielomeningocele: o cotidiano de mães cuidadoras. Rev Gaúcha Enferm. 2016;37(4):e60310. doi: 10.1590/1983-1447.2016.04.60310." },
        { id: 9, text: "Lim SW, Lee HE, Davis M, Park K. Perceived barriers and difficulties of intermittent catheterization in Korean patients with spinal dysraphism and their parents. Neurourol Urodyn. 2016 Mar;35(3):395-399. doi: 10.1002/nau.22716. PMID: 25546707." },
        { id: 10, text: "Kanaheswari Y, Razak NN, Chandran V, Ong LC. Predictors of parenting stress in mothers of children with spina bifida. Spinal Cord. 2011 Mar;49(3):376-380. doi: 10.1038/sc.2010.125. PMID: 20838494." },
        { id: 11, text: "Edwards M, Borzyskowski M, Cox A, Badcock J. Neuropathic bladder and intermittent catheterization: social and psychological impact on children and adolescents. Dev Med Child Neurol. 2004 Mar;46(3):168-177. doi: 10.1017/s0012162204000381. PMID: 14995086." },
        { id: 12, text: "Mikael Häggström. Urinary catheterization 01. Wikimedia Commons. Licença: Creative Commons Attribution-ShareAlike 3.0 (CC BY-SA 3.0). Disponível em: https://commons.wikimedia.org/wiki/File:Urinary_catheterization_01.JPG. Licença: https://creativecommons.org/licenses/by-sa/3.0/" }
    ];

    return (
        <div className="min-h-screen bg-[#fef5d8]">
            
            {/* HERO SECTION */}
            <section className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/hero-estrategias.png" 
                    alt="Sondas de cateterismo"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-green-900/40" aria-hidden="true" />
                <h1 className="relative z-10 text-white text-center font-['Castoro'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-md px-4 max-w-[900px] leading-tight">
                    Estratégias que facilitam o cateterismo urinário intermitente
                </h1>
            </section>

            {/* CONTEÚDO PRINCIPAL */}
            <main className="mx-auto w-full max-w-[900px] px-6 py-12 md:px-12 md:py-20 font-['Atkinson_Hyperlegible'] text-gray-900">
                
                {/* Seção: Dor e medo */}
                <section className="mb-16">
                    <h2 className="text-xl sm:text-2xl font-['Castoro'] text-center font-bold mb-6 max-w-[600px] mx-auto">
                        Dor e medo: Como uma técnica adequada pode mudar isso?
                    </h2>
                    <p className="text-center md:text-lg leading-relaxed mb-6 max-w-[800px] mx-auto">
                        Um conjunto de sentimentos como dor, medo, ansiedade, vergonha e insegurança podem ser comuns e vivenciados por cuidadores e crianças com espinha bífida usuárias de cateterismo urinário intermitente. ¹,²,⁴
                    </p>
                    <p className="text-center md:text-lg leading-relaxed max-w-[800px] mx-auto">
                        Todos esses sentimentos estão relacionados ao medo de machucar a criança, inserir o cateter de forma incorreta ou causar infecções. ²,⁴ Especialmente quando se recebe pouco treinamento ou apoio profissional. ¹,³
                    </p>
                </section>

                {/* Seção: Passo a Passo */}
                <section className="mb-16">
                    <h3 className="text-lg sm:text-xl font-['Castoro'] text-center font-bold mb-8">
                        Passo a Passo para uma técnica adequada
                    </h3>
                    
                    <ul className="space-y-4 md:text-lg leading-relaxed max-w-[800px] mx-auto mb-10">
                        <li><strong>1. Higienização das mãos antes de realizar o CUI</strong><br/>Lave bem as mãos com água e sabonete neutro (incluindo entre os dedos e polegares).</li>
                        <li><strong>2. Escolha o material adequado</strong><br/>Separe o cateter/sonda do tamanho adequado, um lubrificante à base de água (caso a sonda não seja hidrofílica).</li>
                        <li><strong>3. Realize a limpeza íntima</strong><br/>Antes do cateterismo, limpe a região genital para evitar a entrada de bactérias.</li>
                        <li><strong>4. Atente-se a anatomia na hora da inserção</strong><br/>Segure o pênis apontado para cima (próximo ao abdômen) ou afaste os grandes lábios para expor o meato uretral.</li>
                        <li><strong>5. Introduza a sonda suavemente.</strong> Nunca force a passagem; se sentir resistência, respire fundo e relaxe.</li>
                        <li><strong>6. Em caso de dúvidas</strong>, dificuldades ou dor durante o processo, procure um profissional de saúde.</li>
                    </ul>

                    {/* IMAGEM 1: Ilustração passo a passo */}
                    <div className="flex justify-center">
                        <Image 
                            src="/estrategias1.png" 
                            alt="Ilustração do passo a passo do cateterismo" 
                            width={800} 
                            height={500} 
                            className="w-full max-w-[750px] h-auto object-contain" 
                        />
                    </div>
                </section>

                <Divisao className="my-16" />

                {/* Seção: Cateterismo na Infância */}
                <section className="mb-16">
                    <h2 className="text-xl sm:text-2xl font-['Castoro'] text-center font-bold mb-6 max-w-[700px] mx-auto">
                        Cateterismo na Infância: Como o Treinamento Precoce Favorece a Adesão e a Independência
                    </h2>
                    
                    <p className="text-center font-bold md:text-lg mb-4">
                        Por que iniciar cedo faz diferença?
                    </p>
                    <p className="text-center md:text-lg leading-relaxed max-w-[800px] mx-auto mb-8">
                        Bebês são mais tolerantes e tecnicamente mais fáceis de cateterizar do que crianças pequenas, que apresentam comportamentos mais desafiadores conforme crescem e desenvolvem autoconsciência. 1,4 Iniciar a prática na primeira infância facilita o aprendizado, a adaptação e a adesão ao longo da vida. ¹
                    </p>

                    <p className="text-center font-bold md:text-lg mb-6">
                        Benefícios do início precoce:
                    </p>
                    <ul className="list-disc space-y-4 pl-5 md:pl-10 md:text-lg leading-relaxed max-w-[800px] mx-auto">
                        <li>Melhor adesão a longo prazo. (Quanto maior a frequência diária praticada, menor a probabilidade de abandono do procedimento. ¹</li>
                        <li>Aprendizado facilitado (Iniciar na primeira infância foi identificado pelos cuidadores como uma facilidade de aprendizado e adaptação da técnica. ¹,⁴</li>
                        <li>Menor risco de complicações (A continuidade do cateterismo reduz o risco de ITU (principal complicação) e previne mortalidade por complicações renais. 8</li>
                        <li>Menor ansiedade nos cuidadores (Cuidadores que recebem treinamento adequado apresentam níveis de ansiedade significativamente mais baixos. ⁴</li>
                    </ul>
                </section>

                <Divisao className="my-16" />

                {/* Seção: Transição para a autonomia */}
                <section className="mb-16">
                    <h2 className="text-xl sm:text-2xl font-['Castoro'] text-center font-bold mb-6">
                        Transição para a autonomia no Cateterismo
                    </h2>
                    <p className="text-center md:text-lg leading-relaxed max-w-[800px] mx-auto mb-6">
                        Como pais e jovens podem compartilhar progressivamente entre si a responsabilidade do cateterismo?
                    </p>
                    <p className="text-center md:text-lg leading-relaxed max-w-[800px] mx-auto mb-12">
                        A independência na técnica não acontece de uma hora para outra, ela é construída aos poucos, juntos. Pais e filhos aprendem a dividir responsabilidades, errar, ajustar e crescer nesse processo. Entender como isso funciona ajuda toda a família a caminhar com mais segurança. 5
                    </p>

                    <h3 className="text-lg sm:text-xl font-['Castoro'] text-center font-bold mb-8">
                        O que desencadeia a transição
                    </h3>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-[800px] mx-auto mb-16">
                        {/* IMAGEM 2: Vista de cima das pessoas */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <Image 
                                src="/estrategias2.png" 
                                alt="Pessoas vistas de cima" 
                                width={400} 
                                height={250} 
                                className="w-full max-w-[350px] h-auto object-contain" 
                            />
                        </div>
                        <div className="w-full md:w-1/2 md:text-lg leading-relaxed">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Viagens e passeios escolares sem os pais</li>
                                <li>Entrada em nova escola ou período integral</li>
                                <li>Morar em dormitório ou longe da família</li>
                                <li>Tornar-se membro ativo da sociedade</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-['Castoro'] text-center font-bold mb-2">
                        Como o processo acontece (passo a passo)
                    </h3>

                    {/* Blocos Alternados com Texto Destacado */}
                    <div className="max-w-[850px] mx-auto space-y-2">
                        
                        {/* Linha 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-full md:w-1/2">
                                <TextoDestacado 
                                    texto="Compartilhar a consciência da independência" 
                                    corFundo="#003B5C" 
                                    corSombra="#0F5A3E" 
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left md:text-lg leading-relaxed px-4 md:px-0">
                                Pais e jovens reconhecem juntos que a autonomia é necessária e passam a definir metas específicas para a autogestão do jovem.
                            </div>
                        </div>

                        {/* Linha 2 (Invertida) */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                            <div className="w-full md:w-1/2">
                                <TextoDestacado 
                                    texto="Identificar o que o jovem já consegue fazer" 
                                    corFundo="#0F5A3E" 
                                    corSombra="#FBBC04" 
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-right md:text-lg leading-relaxed px-4 md:px-0">
                                Juntos, identificam quais partes do cateterismo o jovem pode realizar sozinho e quais ainda precisam de apoio, sem pressa, sem pressão.
                            </div>
                        </div>

                        {/* Linha 3 */}
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-full md:w-1/2">
                                <TextoDestacado 
                                    texto="Criar situações de autossuficiência" 
                                    corFundo="#FBBC04" 
                                    corSombra="#003B5C" 
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left md:text-lg leading-relaxed px-4 md:px-0">
                                Os pais reduzem conscientemente a ajuda e criam situações em que o jovem precisa realizar o cateterismo sozinho, mesmo que de forma imperfeita.
                            </div>
                        </div>

                        {/* Linha 4 (Invertida) */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                            <div className="w-full md:w-1/2">
                                <TextoDestacado 
                                    texto="Aprender por experimentação conjunta" 
                                    corFundo="#003B5C" 
                                    corSombra="#0F5A3E" 
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-right md:text-lg leading-relaxed px-4 md:px-0">
                                Pais e jovens adaptam ferramentas e métodos juntos, resolvendo problemas um por um e acumulando experiências ao longo do tempo.
                            </div>
                        </div>

                        {/* Linha 5 */}
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-full md:w-1/2">
                                <TextoDestacado 
                                    texto="Conciliar visões diferentes de independência" 
                                    corFundo="#0F5A3E" 
                                    corSombra="#FBBC04" 
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left md:text-lg leading-relaxed px-4 md:px-0">
                                Pais e jovens frequentemente têm ideias diferentes sobre o que significa "ser independente" e aprendem a alinhar essas visões passo a passo.
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção: Quando o processo funciona bem */}
                <section className="mb-16 mt-8">
                    <h3 className="text-lg sm:text-xl font-['Castoro'] text-center font-bold mb-6">
                        Quando o processo funciona bem
                    </h3>
                    <p className="text-center md:text-lg leading-relaxed max-w-[800px] mx-auto mb-6">
                        Como pais e jovens podem compartilhar progressivamente entre si a responsabilidade do cateterismo?
                    </p>
                    <p className="text-center md:text-lg leading-relaxed max-w-[800px] mx-auto mb-10">
                        A independência na técnica não acontece de uma hora para outra, ela é construída aos poucos, juntos. Pais e filhos aprendem a dividir responsabilidades, errar, ajustar e crescer nesse processo. Entender como isso funciona ajuda toda a família a caminhar com mais segurança. 5
                    </p>

                    {/* IMAGEM 3: Família no pôr do sol */}
                    <div className="flex justify-center">
                        <Image 
                            src="/estrategias3.png" 
                            alt="Família apontando para o horizonte" 
                            width={600} 
                            height={400} 
                            className="w-full max-w-[600px] h-auto object-contain" 
                        />
                    </div>
                </section>

                <Divisao className="my-16" />

                {/* Referências */}
                <References references={listaReferencias} />

            </main>
        </div>
    );
}