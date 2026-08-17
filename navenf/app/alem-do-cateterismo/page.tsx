import Image from "next/image";
import Divisao from "@/components/Divisao";
import References from "@/components/References";

export default function AlemDoCateterismo() {
    // Lista completa de referências
    const listaReferencias = [
        { id: 1, text: "Nono D, Ssemata AS, Bammuk Mbazzi F, Seeley J. Practice of clean intermittent catheterisation in children with spina bifida: A scoping review. Afr J Disabil. 2024 Nov 22;13:1473. doi: 10.4102/ajod.v13i0.1473. PMID: 38642375; PMCID: PMC12242843." },
        { id: 2, text: "Sarı C, Kalyoncu M, Demirbağ BC. A qualitative study on the experiences of Turkish caregivers of learning clean intermittent catheterization. J Pediatr Nurs. 2025 Jan-Feb;89:e67-e73. doi: 10.1016/j.pedn.2024.08.015." },
        { id: 3, text: "Sarı C, Demirbağ BC. Investigation of anxiety levels in caregivers who perform clean intermittent catheterization on their children and affecting factors. Neurourol Urodyn. 2024 Mar;43(3):738-747. doi: 10.1002/nau.25380. PMID: 38230908." },
        { id: 4, text: "Bauer SB, Saunders RA, Masoom SN, Choung K, Hayes LC, Price DE, et al. The art of introducing clean intermittent catheterization: How families respond and adapt: A qualitative study. Neurourol Urodyn. 2024;43(1):150-158. doi: 10.1002/nau.25085." },
        { id: 5, text: "Kawahara T, Yamazaki A. Parent-youth interactions: Transitioning to toileting self-management in spina bifida patients. Health Care Transition. 2023;1:100009. doi: 10.1016/j.hctj.2023.100009." },
        { id: 6, text: "Faleiros F, Pelosi G, Warschausky S, Tate D, Käppler C, Thomas E. Factors influencing the use of intermittent bladder catheterization by Individuals with spina bifida in Brazil and Germany. Rehabil Nurs. 2016 Jan-Feb;41(1):35-41. doi: 10.1002/rnj.302." },
        { id: 7, text: "Faleiros F, Cordeiro A, Favoretto N, Käppler C, Murray C, Tate D. Patients With Spina Bifida and Their Caregivers' Feelings About Intermittent Bladder Catheterization in Brazil and Germany: A Correlational Study. Rehabil Nurs. 2017 Jul-Aug;42(4):175-179. doi: 10.1002/rnj.223. PMID: 26516490." },
        { id: 8, text: "Freitas GL, Sena RR, Silva JCF, Castro FFS. Reabilitação de crianças e adolescentes com mielomeningocele: o cotidiano de mães cuidadoras. Rev Gaúcha Enferm. 2016;37(4):e60310. Disponível em: bvs.br. doi: 10.1590/1983-1447.2016.04.60310." },
        { id: 9, text: "Lim SW, Lee HE, Davis M, Park K. Perceived barriers and difficulties of intermittent catheterization in Korean patients with spinal dysraphism and their parents. Neurourol Urodyn. 2016 Mar;35(3):395-399. doi: 10.1002/nau.22716. PMID: 25546707." },
        { id: 10, text: "Kanaheswari Y, Razak NN, Chandran V, Ong LC. Predictors of parenting stress in mothers of children with spina bifida. Spinal Cord. 2011 Mar;49(3):376-380. doi: 10.1038/sc.2010.125. PMID: 20838494." },
        { id: 11, text: "Edwards M, Borzyskowski M, Cox A, Badcock J. Neuropathic bladder and intermittent catheterization: social and psychological impact on children and adolescents. Dev Med Child Neurol. 2004 Mar;46(3):168-177. doi: 10.1017/s0012162204000381. PMID: 14995086." }
    ];

    return (
        <div className="min-h-screen bg-[#fef5d8]">
            
            {/* HERO SECTION */}
            <section className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/hero-alemdo.png" // Foto principal (mãos dadas)
                    alt="Pessoas de mãos dadas"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-blue-900/30" aria-hidden="true" />
                <h1 className="relative z-10 text-white text-center font-['Castoro'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-md px-4 max-w-[800px] leading-tight">
                    Rotina e autonomia: Manual do cateterismo urinário intermitente fora de casa
                </h1>
            </section>

            {/* CONTEÚDO */}
            <main className="mx-auto w-full max-w-[900px] px-6 py-12 md:px-12 md:py-20 font-['Atkinson_Hyperlegible'] text-gray-900">
                
                {/* Introdução */}
                <section className="mb-12">
                    <h2 className="text-xl sm:text-2xl font-['Castoro'] text-center font-bold mb-6">
                        Como realizar o cateterismo urinário intermitente fora de casa?
                    </h2>
                    <p className="text-center md:text-lg leading-relaxed">
                        Realizar o cateterismo urinário intermitente fora de casa pode gerar medo e insegurança no início, mas com planejamento e prática é possível manter a rotina com mais tranquilidade, segurança e autonomia. <sup>1,7,11</sup>
                    </p>
                </section>

                {/* Antes de sair de casa */}
                <section className="mb-16">
                    <h3 className="text-lg sm:text-xl font-['Castoro'] text-center font-bold mb-4">
                        Antes de sair de casa
                    </h3>
                    <p className="text-center md:text-lg mb-6">
                        Organize um kit com todos os materiais necessários:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 md:pl-10 md:text-lg leading-relaxed max-w-[700px] mx-auto mb-6">
                        <li>Cateteres ou sondas. Tipos de sonda: nelaton (plástico ou PVC) e hidrofílica, que já vem com lubrificante.</li>
                        <li>Lubrificante (quando necessário)</li>
                        <li>Lenços ou materiais de higiene</li>
                        <li>Recipiente ou saco para descarte</li>
                        <li>Fraldas ou roupas extras, se necessário</li>
                        <li>Álcool em gel</li>
                    </ul>
                    <div className="text-center md:text-lg leading-relaxed max-w-[700px] mx-auto space-y-2 mb-10">
                        <p>Confira a quantidade de materiais conforme o tempo que ficará fora</p>
                        <p>Planeje os horários do cateterismo urinário intermitente para evitar atrasos ou longos intervalos</p>
                    </div>

                    {/* IMAGENS 1, 2 e 3: O Kit (As 3 fotos pequenas lado a lado) */}
                    <div className="flex flex-row justify-center items-center gap-2 md:gap-4 max-w-[700px] mx-auto">
                        <div className="w-1/3 flex justify-center">
                            <Image src="/alemdo1.png" alt="Roupas na mala" width={250} height={250} className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-1/3 flex justify-center">
                            <Image src="/alemdo2.png" alt="Álcool gel" width={250} height={250} className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-1/3 flex justify-center">
                            <Image src="/alemdo3.png" alt="Pessoa segurando sacola" width={250} height={250} className="w-full h-auto object-contain" />
                        </div>
                    </div>
                </section>

                {/* Escolhendo um local adequado */}
                <section className="mb-16">
                    <h3 className="text-lg sm:text-xl font-['Castoro'] text-center font-bold mb-4">
                        Escolhendo um local adequado
                    </h3>
                    <p className="text-center md:text-lg leading-relaxed max-w-[800px] mx-auto mb-8">
                        O ideal é utilizar um banheiro limpo, mas na ausência, escolha um local com privacidade e espaço suficiente para realizar o procedimento com segurança. <sup>7,9</sup>
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-[800px] mx-auto">
                        {/* IMAGEM 4: Banheiro */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <Image src="/alemdo4.png" alt="Banheiro limpo" width={400} height={300} className="w-full max-w-[350px] h-auto object-contain" />
                        </div>
                        <div className="w-full md:w-1/2 md:text-lg leading-relaxed">
                            <p className="mb-4">Dê preferência para locais que tenham:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Banheiro acessível</li>
                                <li>Pia próxima para higiene das mãos</li>
                                <li>Privacidade</li>
                                <li>Boa iluminação</li>
                                <li>Local para descarte adequado</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Na escola ou trabalho */}
                <section className="mb-16">
                    <h3 className="text-lg sm:text-xl font-['Castoro'] text-center font-bold mb-6">
                        Na escola ou trabalho
                    </h3>
                    <ul className="list-disc space-y-3 pl-5 md:pl-10 md:text-lg leading-relaxed max-w-[750px] mx-auto mb-10">
                        <li>Converse com a escola ou ambiente de trabalho sobre a necessidade de um espaço adequado e privado.</li>
                        <li>Sempre que possível, mantenha materiais extras disponíveis no local.</li>
                        <li>Caso exista insegurança, um profissional de saúde pode auxiliar na orientação da instituição</li>
                    </ul>

                    {/* IMAGEM 5: Escola / Livros e Maçã */}
                    <div className="flex justify-center">
                        <Image src="/alemdo5.png" alt="Materiais escolares" width={600} height={300} className="w-full max-w-[600px] h-auto object-contain" />
                    </div>
                </section>

                {/* Durante viagens e passeios */}
                <section className="mb-16">
                    <h3 className="text-lg sm:text-xl font-['Castoro'] text-center font-bold mb-8">
                        Durante viagens e passeios
                    </h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-[800px] mx-auto mb-10">
                        {/* IMAGEM 6: Porta malas do carro */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <Image src="/alemdo6.png" alt="Porta-malas do carro com malas" width={400} height={300} className="w-full max-w-[400px] h-auto object-contain" />
                        </div>
                        <div className="w-full md:w-1/2 md:text-lg leading-relaxed">
                            <ul className="list-disc pl-5 space-y-3">
                                <li>Leve materiais extras para imprevistos</li>
                                <li>Procure previamente locais acessíveis</li>
                                <li>Organize os horários das paradas durante viagens longas</li>
                                <li>Mantenha os materiais protegidos do calor e da umidade</li>
                            </ul>
                        </div>
                    </div>
                    
                    <p className="text-center md:text-lg leading-relaxed max-w-[850px] mx-auto">
                        É comum sentir medo, vergonha ou preocupação ao realizar o cateterismo urinário intermitente fora de casa, principalmente no início. <sup>7,9</sup> Com o tempo, prática e apoio, muitas pessoas passam a realizar o procedimento com mais confiança e autonomia. Buscar apoio da família, profissionais de saúde e grupos de suporte pode ajudar no enfrentamento dessas dificuldades. <sup>1,7</sup>
                    </p>
                </section>

                <Divisao className="my-16" />

                {/* Participar também é cuidado */}
                <section className="mb-16">
                    <h2 className="text-xl sm:text-2xl font-['Castoro'] text-center font-bold mb-6">
                        Participar também é cuidado.
                    </h2>
                    <p className="text-center md:text-lg leading-relaxed max-w-[850px] mx-auto mb-12">
                        Viver com espinha bífida e realizar o cateterismo urinário intermitente não deve impedir crianças, adolescentes e famílias de participarem da vida social, escolar e das atividades do cotidiano. Participar de momentos de lazer, convivência e aprendizado também faz parte do cuidado e contribui para a saúde física, emocional e social. <sup>5,7</sup>
                    </p>

                    <h3 className="text-lg sm:text-xl font-['Castoro'] text-center font-bold mb-8">
                        O que pode ajudar?
                    </h3>

{/* IMAGENS 7, 8, 9 e 10: O Grid de 4 Imagens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 max-w-[850px] mx-auto text-center md:text-lg">
                        
                        {/* IMAGEM 7: Criança andando */}
                        <div className="flex flex-col items-center">
                            <Image src="/alemdo7.png" alt="Criança andando" width={300} height={200} className="w-full max-w-[300px] h-auto mb-4 object-contain" />
                            <h4 className="font-['Castoro'] font-bold mb-2">Incentivar a autonomia</h4>
                            <p className="text-sm md:text-base leading-relaxed">Permitir que a criança ou adolescente participe gradualmente do próprio cuidado ajuda no desenvolvimento da independência e da segurança.</p>
                        </div>

                        {/* IMAGEM 8: Sinalização de banheiro */}
                        <div className="flex flex-col items-center">
                            <Image src="/alemdo8.png" alt="Sinalização de banheiro" width={300} height={200} className="w-full max-w-[300px] h-auto mb-4 object-contain" />
                            <h4 className="font-['Castoro'] font-bold mb-2">Adaptar os ambientes</h4>
                            <p className="text-sm md:text-base leading-relaxed">Banheiros acessíveis, locais privados e espaços acolhedores facilitam a realização do cateterismo urinário intermitente fora de casa.</p>
                        </div>

                        {/* IMAGEM 9: Família conversando */}
                        <div className="flex flex-col items-center mt-6">
                            <Image src="/alemdo9.png" alt="Família conversando à mesa" width={300} height={200} className="w-full max-w-[300px] h-auto mb-4 object-contain" />
                            <h4 className="font-['Castoro'] font-bold mb-2">Conversar sobre o tema</h4>
                            <p className="text-sm md:text-base leading-relaxed">O diálogo aberto com familiares, escola e profissionais reduz medos e ajuda a combater preconceitos.</p>
                        </div>

                        {/* IMAGEM 10: Relógio digital */}
                        <div className="flex flex-col items-center mt-6">
                            <Image src="/alemdo10.png" alt="Relógio digital" width={300} height={200} className="w-full max-w-[300px] h-auto mb-4 object-contain" />
                            <h4 className="font-['Castoro'] font-bold mb-2">Planejar a rotina</h4>
                            <p className="text-sm md:text-base leading-relaxed">Organizar horários, materiais e locais adequados permite maior tranquilidade durante passeios, viagens e atividades sociais.</p>
                        </div>
                    </div>
                </section>

                <Divisao className="my-16" />

                {/* Cuidado também é sobre manejar nossos sentimentos */}
                <section className="mb-16">
                    <h2 className="text-xl sm:text-2xl font-['Castoro'] text-center font-bold mb-6">
                        Cuidado também é sobre manejar nossos sentimentos.
                    </h2>
                    <p className="text-center md:text-lg leading-relaxed max-w-[850px] mx-auto mb-10">
                        Sabemos que cuidar de uma criança com espinha bífida que realiza o cateterismo urinário intermitente diariamente vai muito além do procedimento técnico. O impacto emocional sobre os cuidadores, quase sempre as mães, é profundo e começa desde o momento do diagnóstico. Reconhecer esses sentimentos é o primeiro passo para superá-los. 2,8
                    </p>

                    <h3 className="text-lg sm:text-xl font-['Castoro'] text-center mb-6">
                        O que posso sentir durante meu processo de cuidado?
                    </h3>
                    <ul className="list-disc space-y-4 pl-5 md:pl-10 md:text-lg leading-relaxed max-w-[800px] mx-auto mb-10">
                        <li><strong>Medo e culpa:</strong> Presentes desde o diagnóstico; medo de errar o procedimento e causar dano ao filho.</li>
                        <li><strong>Ansiedade:</strong> Intensificada pelo medo de complicações, especialmente durante a aplicação da técnica.</li>
                        <li><strong>Solidão:</strong> Mesmo casadas, a maioria sente que ninguém, incluindo o cônjuge, a apoia no processo.</li>
                        <li><strong>Sobrecarga:</strong> Alta demanda de cuidados que compromete a vida pessoal, conjugal e profissional.</li>
                    </ul>

                    <h3 className="text-lg sm:text-xl font-['Castoro'] text-center mb-6">
                        O que agrava o sofrimento emocional:
                    </h3>
                    <ul className="list-disc space-y-4 pl-5 md:pl-10 md:text-lg leading-relaxed max-w-[800px] mx-auto mb-10">
                        <li>Cuidadoras com doenças crônicas próprias apresentam ansiedade significativamente mais alta por terem mais uma doença crônica além da sua para manejar.</li>
                        <li>Baixa renda familiar combinada com Infecção do Trato Urinário frequentes (3 a 4 nos últimos 3 meses) aumentam a preocupação aos cuidadores.</li>
                        <li>Falta de treinamento adequado intensifica o medo de errar e causar complicações.</li>
                        <li>Famílias monoparentais estão associadas a níveis de estresse mais altos.</li>
                    </ul>

                    <h3 className="text-lg sm:text-xl font-['Castoro'] text-center font-bold mb-6">
                        Como superar (estratégias baseadas em evidências)
                    </h3>
                    <ul className="list-disc space-y-4 pl-5 md:pl-10 md:text-lg leading-relaxed max-w-[800px] mx-auto mb-10">
                        <li>Oferecer treinamento de qualidade com equipe acolhedora, realizar a primeira cateterização junto com o profissional aumenta a confiança e reduz o medo inicial.</li>
                        <li>Promover contato com outros cuidadores, estar no mesmo ambiente que famílias que vivem a mesma situação é fonte de motivação, troca de informações e apoio mútuo.</li>
                        <li>Ensinar outros familiares a realizarem a técnica, reduz a sobrecarga exclusiva da mãe e garante suporte em situações de doença ou ausência.</li>
                        <li>Incentivar grupos de apoio presenciais e virtuais, associações de pessoas com Espinha Bífida facilitam interações, ajuda mútua e enfrentamento de questões emocionais e práticas.</li>
                        <li>Disponibilizar programas de aconselhamento psicoemocional, especialmente para cuidadores com maior carga emocional identificada durante o acompanhamento.</li>
                    </ul>

                    {/* IMAGEM 11: Roda de Conversa / Grupo de apoio */}
                    <div className="flex justify-center mt-10">
                        <Image src="/alemdo11.png" alt="Roda de conversa com profissionais de saúde" width={600} height={400} className="w-full max-w-[600px] h-auto object-contain" />
                    </div>
                </section>

                <Divisao className="my-16" />

                {/* Referências */}
                <References references={listaReferencias} />

            </main>
        </div>
    );
}