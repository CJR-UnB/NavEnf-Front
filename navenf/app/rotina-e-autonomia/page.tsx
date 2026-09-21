import Image from "next/image";
import Divider from "@/components/Divider";
import References from "@/components/References";

export default function RotinaEAutonomia() {
    const listaReferencias = [
        { id: 1, text: "Nono D, Ssemata AS, Bannink Mbazzi F, Seeley J. Practice of clean intermittent catheterisation in children with spina bifida: A scoping review. Afr J Disabil. 2024 Nov 22;13:1473. doi: 10.4102/ajod.v13i0.1473. PMID: 40642375; PMCID: PMC12242043." },
        { id: 2, text: "Sarı C, Kalyoncu M, Demirbağ BC. A qualitative study on the experiences of Turkish caregivers of learning clean intermittent catheterization. J Pediatr Nurs. 2025 Jan-Feb;89:e67-e73. doi: 10.1016/j.pedn.2024.10.015." },
        { id: 3, text: "Sarı C, Demirbağ BC. Investigation of anxiety levels in caregivers who perform clean intermittent catheterization on their children and affecting factors. Neurourol Urodyn. 2024 Mar;43(3):738-747. doi: 10.1002/nau.25388. PMID: 38230988." },
        { id: 4, text: "Bauer SB, Saunders RA, Masoom SN, Choung K, Hayes LC, Price DE, et al. The art of introducing clean intermittent catheterization: How families respond and adapt: A qualitative study. Neurourol Urodyn. 2024 Jan;43(1):155-163. doi: 10.1002/nau.25085." },
        { id: 5, text: "Kawahara T, Yamazaki A. Parent-youth interactions: Transitioning to toileting self-management in spina bifida patients. Health Care Transition. 2023 Dec;1:100009. doi: 10.1016/j.hctj.2023.100009." },
        { id: 6, text: "Faleiros F, Pelosi G, Warschausky S, Tate D, Käppler C, Thomas E. Factors influencing the use of intermittent bladder catheterization by individuals with spina bifida in Brazil and Germany. Rehabil Nurs. 2016 Jan-Feb;41(1):1-7. doi: 10.1002/rnj.302." },
        { id: 7, text: "Faleiros F, Cordeiro A, Favoretto N, Käppler C, Murray C, Tate D. Patients With Spina Bifida and Their Caregivers' Feelings About Intermittent Bladder Catheterization in Brazil and Germany: A Correlational Study. Rehabil Nurs. 2017 Jul-Aug;42(4):175-179. doi: 10.1002/rnj.223. PMID: 26510490." },
        { id: 8, text: "Freitas GL, Sena RR, Silva JCF, Castro FFS. Reabilitação de crianças e adolescentes com mielomeningocele: o cotidiano de mães cuidadoras. Rev Gaúcha Enferm. 2016;37(4):e60310. Disponível em: bvs.br. doi: 10.1590/1983-1447.2016.04.60310." },
        { id: 9, text: "Lim SW, Lee HE, Davis M, Park K. Perceived barriers and difficulties of intermittent catheterization: In Korean patients with spinal dysraphism and their parents. Neurourol Urodyn. 2016 Mar;35(3):395-399. doi: 10.1002/nau.22716. PMID: 25546707." },
        { id: 10, text: "Kanaheswari Y, Razak NN, Chandran V, Ong LC. Predictors of parenting stress in mothers of children with spina bifida. Spinal Cord. 2011 Mar;49(3):376-380. doi: 10.1038/sc.2010.125. PMID: 20838404." },
        { id: 11, text: "Edwards M, Borzyskowski M, Cox A, Badcock J. Neuropathic bladder and intermittent catheterization: social and psychological impact on children and adolescents. Dev Med Child Neurol. 2004 Mar;46(3):168-177. doi: 10.1017/s0012162204000301. PMID: 14995086." }
    ];

    return (
        <div className="w-full">
            
            {/* 1. CABEÇALHO (Gradiente Verde para Azul) */}
            <section className="w-full bg-gradient-to-b from-[#006633] to-[#003366] py-16 sm:py-24 px-6 md:px-12 flex items-center justify-center">
                <div className="max-w-[1000px] mx-auto">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-calsans text-center leading-tight">
                        Rotina e autonomia: Manual do<br className="hidden sm:block" /> cateterismo urinário intermitente<br className="hidden sm:block" /> fora de casa
                    </h1>
                </div>
            </section>

            <div className="w-full bg-white h-8 md:h-12" />

            {/* 2. INTRODUÇÃO (Fundo Azul Escuro) */}
            <section className="w-full bg-[#003366] text-white py-12 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto text-center">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] mb-6">
                        Como realizar o cateterismo urinário<br className="hidden sm:block" /> intermitente fora de casa?
                    </h2>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify max-w-[800px] mx-auto">
                        Realizar o cateterismo urinário intermitente fora de casa pode gerar medo e insegurança no início, mas com planejamento e prática é possível manter a rotina com mais tranquilidade, segurança e autonomia.<sup>1,7,11</sup>
                    </p>
                </div>
            </section>

            {/* 3. ANTES DE SAIR DE CASA (Fundo Branco) */}
            <section className="w-full bg-white text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-6">Antes de sair de casa</h2>
                    <p className="font-bold text-center font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] leading-[1.35] mb-8">Organize um kit com todos os materiais necessários:</p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        <div className="w-full md:w-1/2">
                            <ul className="list-disc pl-5 space-y-2 text-justify font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                                <li>Cateteres ou sondas. Tipos de sonda: nelaton (plástico ou PVC) e hidrofílica, que já vem com lubrificante.</li>
                                <li>Lubrificante (quando necessário)</li>
                                <li>Lenços ou materiais de higiene</li>
                                <li>Recipiente ou saco para descarte</li>
                                <li>Fraldas ou roupas extras, se necessário</li>
                                <li>Álcool em gel</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center relative">
                            <Image src="/manual1.png" alt="Mochila com kit" width={250} height={250} className="w-full max-w-[200px] h-auto object-contain" />
                            <span className="absolute top-0 right-[25%] text-xl">*</span>
                        </div>
                    </div>

                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mt-8 text-justify">
                        Confira a quantidade de materiais conforme o tempo que ficará fora e planeje os horários do cateterismo urinário intermitente para evitar atrasos ou longos intervalos
                    </p>
                </div>
            </section>

            {/* 4. ESCOLHENDO LOCAL ADEQUADO (Fundo Azul Claro) */}
            <section className="w-full bg-[#59ACFF] text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-8">Escolhendo um local adequado</h2>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-8 text-justify">
                        O ideal é utilizar um banheiro limpo, mas na ausência, escolha um local com privacidade e espaço suficiente para realizar o procedimento com segurança.<sup>7,9</sup>
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="w-full md:w-1/2">
                            <p className="font-bold text-justify font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-4">Dê preferência para locais que tenham:</p>
                            <ul className="list-disc pl-5 space-y-2 text-justify font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                                <li>Banheiro acessível</li>
                                <li>Pia próxima para higiene das mãos</li>
                                <li>Privacidade</li>
                                <li>Boa iluminação</li>
                                <li>Local para descarte adequado</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center relative">
                            <Image src="/manual2.png" alt="Banheiro acessível" width={300} height={300} className="w-full max-w-[280px] h-auto object-contain" />
                            <span className="absolute top-4 right-[15%] text-xl">*</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. NA ESCOLA OU TRABALHO (Fundo Branco) */}
            <section className="w-full bg-white text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-8">Na escola ou trabalho</h2>
                    
                    <ul className="list-disc pl-5 space-y-3 text-justify font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-10 max-w-[800px] mx-auto">
                        <li>Converse com a escola ou ambiente de trabalho sobre a necessidade de um espaço adequado e privado;</li>
                        <li>Sempre que possível, mantenha materiais extras disponíveis no local;</li>
                        <li>Caso exista insegurança, um profissional de saúde pode auxiliar na orientação da instituição.</li>
                    </ul>

                    <div className="flex justify-center relative">
                        <Image src="/manual3.png" alt="Família conversando com médico" width={450} height={300} className="w-full max-w-[400px] h-auto object-contain" />
                        <span className="absolute top-10 right-[25%] text-xl">*</span>
                    </div>
                </div>
            </section>

            {/* 6. DURANTE VIAGENS E PASSEIOS (Fundo Amarelo) */}
            <section className="w-full bg-[#FFC94B] text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-10">Durante viagens e passeios</h2>
                    
                    <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
                        <div className="w-full md:w-3/5">
                            <ul className="list-disc pl-5 space-y-3 text-justify font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                                <li>Leve <strong>materiais extras</strong> para imprevistos;</li>
                                <li>Procure previamente <strong>locais acessíveis;</strong></li>
                                <li>Organize os <strong>horários das paradas</strong> durante viagens longas;</li>
                                <li>Mantenha os <strong>materiais protegidos do calor e da umidade.</strong></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-2/5 flex justify-center relative">
                            <Image src="/manual4.png" alt="Avião, ônibus e malas" width={250} height={250} className="w-full max-w-[220px] h-auto object-contain" />
                            <span className="absolute top-4 right-[10%] text-xl">*</span>
                        </div>
                    </div>

                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify leading-relaxed">
                        É comum sentir medo, vergonha ou preocupação ao realizar o cateterismo urinário intermitente fora de casa, principalmente no início.<sup>7,9</sup> Com o tempo, prática e apoio, muitas pessoas passam a realizar o procedimento com mais confiança e autonomia. Buscar apoio da família, profissionais de saúde e grupos de suporte pode ajudar no enfrentamento dessas dificuldades.<sup>1,7</sup>
                    </p>
                </div>
            </section>

            {/* 7. PARTICIPAR TAMBÉM É CUIDADO + CARDS (Fundo Branco) */}
            <section className="w-full bg-white text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-[1000px] mx-auto">
                    <Divider className="mb-10" />
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-6">Participar também é cuidado.</h2>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify leading-relaxed mb-16 max-w-[850px] mx-auto">
                        Viver com mielo e realizar o cateterismo urinário intermitente não deve impedir crianças, adolescentes e famílias de participarem da vida social, escolar e das atividades do cotidiano. Participar de momentos de lazer, convivência e aprendizado também faz parte do cuidado e contribui para a saúde física, emocional e social.<sup>5,7</sup>
                    </p>

                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-10">O que pode ajudar?</h2>

                    {/* Grid de Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
                        
                        {/* Card 1 */}
                        <div className="bg-[#80D960] rounded-2xl p-8 flex flex-col items-center text-center relative">
                            <span className="absolute top-8 right-10 text-xl">*</span>
                            <Image src="/manual5.png" alt="Criança super-herói" width={120} height={120} className="mb-4" />
                            <h3 className="font-bold underline font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] leading-[1.35] mb-2">Incentivar a autonomia</h3>
                            <p className="text-justify">Permitir que a criança ou adolescente participe gradualmente do próprio cuidado ajuda no desenvolvimento da independência e da segurança.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#59ACFF] rounded-2xl p-8 flex flex-col items-center text-center relative">
                            <Image src="/manual2.png" alt="Banheiro adaptado" width={120} height={120} className="mb-4" />
                            <span className="absolute top-8 right-10 text-xl">*</span>
                            <h3 className="font-bold underline font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] leading-[1.35] mb-2">Adaptar os ambientes</h3>
                            <p className="text-justify">Banheiros acessíveis, locais privados e espaços acolhedores facilitam a realização do cateterismo urinário intermitente fora de casa.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#FFC94B] rounded-2xl p-8 flex flex-col items-center text-center relative">
                            <Image src="/manual7.png" alt="Conversa" width={120} height={120} className="mb-4" />
                            <span className="absolute top-8 right-10 text-xl">*</span>
                            <h3 className="font-bold underline font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] leading-[1.35] mb-2">Conversar sobre o tema</h3>
                            <p className="text-justify">O diálogo aberto com familiares, escola e profissionais reduz medos e ajuda a combater preconceitos.</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#80D960] rounded-2xl p-8 flex flex-col items-center text-center relative">
                            <span className="absolute top-8 right-10 text-xl">*</span>
                            <Image src="/manual8.png" alt="Rotina e planejamento" width={120} height={120} className="mb-4" />
                            <h3 className="font-bold underline font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] leading-[1.35] mb-2">Planejar a rotina</h3>
                            <p className="text-justify">Organizar horários, materiais e locais adequados permite maior tranquilidade durante passeios, viagens e atividades sociais.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 8. SENTIMENTOS (Fundo Branco) */}
            <section className="w-full bg-white text-gray-900 pb-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto">
                    <Divider className="mb-10" />
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-6">Cuidado também é sobre manejar nossos<br className="hidden sm:block"/> sentimentos</h2>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-10 text-justify">
                        Sabemos que cuidar de uma criança com mielo que realiza o cateterismo urinário intermitente diariamente vai muito além do procedimento técnico. O impacto emocional sobre os cuidadores, quase sempre as mães, é profundo e começa desde o momento do diagnóstico. Reconhecer esses sentimentos é o primeiro passo para superá-los.<sup>2,8</sup>
                    </p>

                    <h3 className="font-bold font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-8">O que posso sentir durante meu processo de cuidado?</h3>

                    <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
                        <div className="w-full md:w-3/5 space-y-4 text-justify font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                            <p><strong>Medo e culpa:</strong> Presentes desde o diagnóstico; medo de errar o procedimento e causar dano ao filho.</p>
                            <p><strong>Ansiedade:</strong> Intensificada pelo medo de complicações, especialmente durante a aplicação da técnica.</p>
                            <p><strong>Solidão:</strong> Mesmo casadas, a maioria sente que ninguém, incluindo o cônjuge, a apoia no processo.</p>
                            <p><strong>Sobrecarga:</strong> Alta demanda de cuidados que compromete a vida pessoal, conjugal e profissional</p>
                        </div>
                        <div className="w-full md:w-2/5 flex justify-center relative">
                            <Image src="/manual9.png" alt="Mãe segurando bebê" width={300} height={300} className="w-full max-w-[280px] h-auto object-contain" />
                            <span className="absolute top-0 right-[15%] text-xl">*</span>
                        </div>
                    </div>

                    <h3 className="font-bold font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-6">O que agrava o sofrimento emocional:</h3>
                    <ul className="space-y-4 text-justify font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                        <li><strong>Cuidadoras com doenças crônicas próprias</strong> apresentam ansiedade significativamente mais alta por terem mais uma doença crônica além da sua para manejar.</li>
                        <li><strong>Baixa renda familiar combinada com Infecção do Trato Urinário frequentes</strong> (3 a 4 nos últimos 3 meses) aumentam a preocupação aos cuidadores</li>
                        <li><strong>Falta de treinamento adequado</strong> intensifica o medo de errar e causar complicações</li>
                        <li><strong>Famílias monoparentais</strong> estão associadas a níveis de estresse mais altos.</li>
                    </ul>
                </div>
            </section>

            {/* 9. COMO SUPERAR (Fundo Branco + Imagem topo + Blocos coloridos) */}
            <section className="w-full bg-white text-gray-900 py-16 overflow-hidden">
                <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col items-center mb-10">
                    <div className="relative">
                        <Image src="/manual10.png" alt="Cuidadores estressados" width={400} height={250} className="w-full max-w-[350px] h-auto object-contain mb-8" />
                        <span className="absolute top-0 right-[10%] text-xl">*</span>
                    </div>
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center">Como superar (estratégias baseadas em evidências)</h2>
                </div>

                {/* Blocos em formato de "escada" */}
                <div className="w-full flex flex-col space-y-6 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                    
                    {/* 1. Verde */}
                    <div className="bg-[#80D960] w-[95%] md:w-[80%] self-start py-6 px-6 md:px-16 flex items-center">
                        <div className="max-w-[700px] w-full mx-auto text-justify">
                            <p>Oferecer treinamento de qualidade com equipe acolhedora, realizar o primeiro cateterismo junto com o profissional aumenta a confiança e reduz o medo inicial.</p>
                        </div>
                    </div>

                    {/* 2. Amarelo */}
                    <div className="bg-[#FFC94B] w-[95%] md:w-[85%] self-end py-6 px-6 md:px-16 flex items-center">
                        <div className="max-w-[700px] w-full mx-auto text-justify">
                            <p>Promover contato com outros cuidadores, estar no mesmo ambiente que famílias que vivem a mesma situação é fonte de motivação, troca de informações e apoio mútuo.</p>
                        </div>
                    </div>

                    {/* 3. Azul */}
                    <div className="bg-[#59ACFF] w-[95%] md:w-[80%] self-start py-6 px-6 md:px-16 flex items-center">
                        <div className="max-w-[700px] w-full mx-auto text-justify">
                            <p>Ensinar outros familiares a realizarem a técnica, reduz a sobrecarga exclusiva da mãe e garante suporte em situações de doença ou ausência.</p>
                        </div>
                    </div>

                    {/* 4. Verde */}
                    <div className="bg-[#80D960] w-[95%] md:w-[85%] self-end py-6 px-6 md:px-16 flex items-center">
                        <div className="max-w-[700px] w-full mx-auto text-justify">
                            <p>Incentivar grupos de apoio presenciais e virtuais, associações de pessoas com mielo facilitam interações, ajuda mútua e enfrentamento de questões emocionais e práticas.</p>
                        </div>
                    </div>

                    {/* 5. Amarelo */}
                    <div className="bg-[#FFC94B] w-[95%] md:w-[80%] self-start py-6 px-6 md:px-16 flex items-center">
                        <div className="max-w-[700px] w-full mx-auto text-justify">
                            <p>Disponibilizar programas de aconselhamento psicoemocional, especialmente para cuidadores com maior carga emocional identificada durante o acompanhamento.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* 10. REFERÊNCIAS */}
            <section className="w-full bg-white text-black py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto">
                    <Divider className="mb-12" />
                    
                    <References references={listaReferencias} />

                    <div className="mt-8 text-sm md:text-base text-black">
                        <p>*Fonte: gerada por Chat GPT em 9 de setembro de 2026.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}