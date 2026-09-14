import Image from "next/image";
import Divider from "@/components/Divider";
import References from "@/components/References";

export default function AlemDoCateterismo() {
    // Lista completa de referências
    const listaReferencias = [
        { id: 1, text: "Spina Bifida Association. Home page [Internet]. [s.d.] [citado 2026 jun 6]. Disponível em: spinabifidaassociation.org" },
        { id: 2, text: "Brasil. Ministério da Saúde. Resolução N° 344, de 13 de Dezembro de 2002. Brasília (DF): Ministério da Saúde; 2002." },
        { id: 3, text: "Coelho AMS, Alencar LAB, Alves VAR, Araujo MN, Gomes MPC, Gomes MML, et al. Internações por espinha bífida no Brasil: Perfil epidemiológico e desafios no atendimento infantil. Psicodebate [Internet]. 2025 out 24 [citado 2026 jun 6];11(2):670-9. Disponível em: dpgpsifpm.com.br" },
        { id: 4, text: "Associação Mãos Unidas. Um guia para pais - Espinha Bífida e Mielomeningocele [Internet]. [S. l.: s. n., s. d.] [citado 2026 jun 7]. Disponível em: mieloblog.com.br" }
    ];

    return (
        <div className="min-h-screen bg-white">
            
            {/* CABEÇALHO (Gradiente Verde para Azul) */}
            <section className="w-full bg-gradient-to-b from-[#006633] to-[#003366] py-16 sm:py-24 px-6 md:px-12 flex items-center justify-center">
                <div className="max-w-[900px] mx-auto">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-calsans text-center leading-tight">
                        Orientações para cuidadores
                    </h1>
                </div>
            </section>

            {/* BOAS-VINDAS (Fundo Amarelo) */}
            <section className="w-full bg-[#F2A900] py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto text-center text-black">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] mb-6">
                        Naveguem por essas orientações, cuidadores!
                    </h2>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] mb-6">
                        Parabéns pela chegada do seu filho ou filha!
                    </p>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify mb-6">
                        Você acaba de saber que seu filho tem o diagnóstico de mielomeningocele (mielo) e poderá estar vivendo inúmeros pensamentos e sentimentos como: dúvidas e medos, mas saiba que seu bebê pode ter uma vida cheia de conquistas e muita alegria. Hoje, o conhecimento em saúde avançou muito e existem tratamentos modernos, inclusive antes mesmo da criança nascer.
                    </p>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] underline">
                        Aqui trazemos algumas informações para você se preparar e cuidar do seu bebê com amor e segurança.
                    </p>
                </div>
            </section>

            {/* CONTEÚDO */}
            <main className="mx-auto w-full max-w-[900px] px-6 py-12 md:px-12 md:py-20 bg-white text-gray-900">

                {/* Tipos de mielo */}
                <section className="mb-12">
                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-8">
                        Tipos de mielo
                    </h2>

                    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 mb-6">
                        <div className="w-full md:w-2/5 flex justify-center relative">
                            <Image
                                src="/enfermeiro2.png"
                                alt="Gestante sendo acompanhada por enfermeira"
                                width={550}
                                height={620}
                                className="w-full max-w-[280px] h-auto object-contain"
                            />
                            <span className="absolute top-0 right-[12%] text-xl font-bold">*</span>
                        </div>
                        <div className="w-full md:w-3/5 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify space-y-6">
                            <p>
                                A mielo ocorre quando a <strong>coluna vertebral</strong> (tubo neural) do bebê em desenvolvimento <strong>não se fecha completamente durante as primeiras semanas de gravidez</strong>. Cada caso é diferente, e os efeitos da mielo variam de acordo com o tamanho, a localização, o tipo de abertura e os nervos afetados.<sup>1</sup>
                            </p>
                            <p>
                                <strong>O tipo mais comum de mielo detectada durante a gravidez é a mielomeningocele.</strong> Essa forma é chamada de mielo &quot;aberta&quot; porque há uma abertura na pele sobre uma bolsa de líquido que contém parte da medula espinhal e dos nervos.
                            </p>
                        </div>
                    </div>

                    <div className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify">
                        <p>
                            Essa abertura precisa ser fechada cirurgicamente para proteger a medula espinhal de infecções e danos adicionais. Quando se fala em espinha bífida, geralmente se refere à mielomeningocele.<sup>1</sup>
                        </p>
                        <p>
                            Existem também tipos menos comuns de mielo que são fechados (cobertos pela pele), mas a medula espinhal ainda é afetada. Esses casos geralmente precisam de tratamento, mas nem sempre imediato.<sup>1</sup>
                        </p>
                    </div>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify mt-6">
                        Na mielo oculta existe um pequeno espaço entre os ossos da coluna vertebral, mas este também é coberto pela pele e pela medula espinhal, geralmente não é afetado. Este tipo de anomalia é detectado no período pré-natal e, muitas vezes, não requer tratamento.<sup>1</sup>
                    </p>
                </section>

                {/* Causas da mielo */}
                <section className="mb-16">
                    <h3 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-8">
                        Causas da mielo
                    </h3>

                    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 mb-10">
                        <div className="w-full md:w-3/5 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify space-y-4">
                            <p>
                                <strong>A mielo pode ocorrer independentemente do que os pais façam antes ou durante a gravidez.</strong> O crescimento de um bebê é um processo complexo com muitas possibilidades de variação.
                            </p>
                            <p>
                                A mielo ocorre devido a uma combinação de fatores genéticos e ambientais por volta da quarta semana de gravidez — antes mesmo de a maioria das mulheres saber que está grávida.
                            </p>
                        </div>
                        <div className="w-full md:w-2/5 flex justify-center relative">
                            <Image
                                src="/assets/utero.svg"
                                alt="Útero com bebê"
                                width={400}
                                height={400}
                                className="w-full max-w-[220px] h-auto object-contain"
                            />
                            <span className="absolute top-0 right-[15%] text-xl font-bold">*</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
                        <div className="w-full md:w-2/5 flex justify-center relative">
                            <Image
                                src="/assets/medico-pensando.svg"
                                alt="Médico pensativo lendo sobre espinha bífida"
                                width={400}
                                height={400}
                                className="w-full max-w-[220px] h-auto object-contain"
                            />
                            <span className="absolute top-0 right-[15%] text-xl font-bold">*</span>
                        </div>
                        <div className="w-full md:w-3/5 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify">
                            <p>
                                Os pesquisadores ainda têm muito a aprender sobre a genética associada à mielo. Tomar ácido fólico (presente na maioria dos multivitamínicos e vitaminas pré-natais) de um a três meses antes da concepção pode ajudar a reduzir a probabilidade de mielo, mas não é totalmente evitável. Ela não foi causada por nada que você fez ou deixou de fazer.<sup>1</sup>
                            </p>
                        </div>
                    </div>
                </section>

            </main>

            {/* Prevenção: suplementação com ácido fólico (retângulos sobrepostos, encostados nas bordas) */}
            <section className="w-full py-12 md:py-16">
                <div className="relative">
                    <div className="relative z-0 bg-[#80D960] p-6 md:p-8 md:pb-16 md:pl-12 lg:pl-24 w-full md:w-[80%] font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify">
                        <p className="mb-4">
                            A suplementação com ácido fólico é a medida mais eficaz na prevenção, deve ser antes da concepção e mantida durante o primeiro trimestre.
                        </p>
                        <p className="italic">
                            No Brasil, a Agência Nacional de Vigilância Sanitária (ANVISA) instituiu a fortificação obrigatória de farinhas de trigo e milho com ferro e ácido fólico (RDC nº 344/2002), estratégia que demonstrou impacto positivo, reduzindo casos de mielo em comparação com regiões de suplementação voluntária.<sup>2</sup>
                        </p>
                    </div>
                    <div className="relative z-10 ml-[15%] md:ml-auto md:w-[70%] md:pr-12 lg:pr-24 -mt-6 md:-mt-10 bg-[#FFC94B] p-6 pt-10 md:p-8 md:pt-14 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify">
                        <p>
                            Além disso, a ampliação da cobertura da atenção primária e do pré-natal qualificado tem papel fundamental na detecção precoce e no encaminhamento adequado dos casos suspeitos.<sup>3</sup>
                        </p>
                    </div>
                </div>
            </section>

            {/* Como é diagnosticada a mielo (largura total) */}
            <section className="w-full bg-[#003366] text-white py-12 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto text-center">
                    <h3 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] mb-6">
                        Como é diagnosticada a mielo
                    </h3>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify">
                        O diagnóstico geralmente é feito durante uma ultrassonografia com marcadores da coluna vertebral, como vértebras ausentes (ossos da coluna) ou fragmentos de vértebras; e/ou marcadores cerebrais, como ventriculomegalia (ventrículos dilatados), um formato específico do crânio fetal (o &quot;sinal do limão&quot;) e compressão do cerebelo (o &quot;sinal da banana&quot;).<sup>1</sup>
                    </p>
                </div>
            </section>

            <main className="mx-auto w-full max-w-[900px] px-6 py-12 md:px-12 md:py-20 bg-white text-gray-900">

                {/* Busque profissionais especializados */}
                <section className="mb-16">
                    <h3 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-6">
                        Busque profissionais especializados e uma equipe multidisciplinar
                    </h3>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify">
                        Os cuidados em saúde começam antes mesmo do nascimento e continuam após o nascimento. Assim que souber do diagnóstico pela ultrassom, peça encaminhamento para um serviço especializado. Você precisará de uma equipe multidisciplinar como: enfermeiros, médicos obstetras de alto risco, neurocirurgiões pediátricos, urologistas e ortopedistas. Eles farão exames detalhados, como a ressonância magnética fetal, para entender exatamente a situação do bebê.
                    </p>
                </section>

            </main>

            {/* Faixas sobrepostas com ilustração (largura total) */}
            <section className="w-full relative pt-2 pb-8 md:pt-3 md:pb-12">
                <div className="w-[85%] md:w-[65%] h-[150px] md:h-[200px] bg-[#F2A900]" />
                <div className="w-[85%] md:w-[65%] h-[150px] md:h-[200px] bg-[#59ACFF] ml-auto -mt-8 md:-mt-12" />
                <div className="absolute inset-0 flex items-center justify-center px-6">
                    <div className="relative">
                        <Image
                            src="/enfermeiro5.png"
                            alt="Enfermeiro conversando com a família"
                            width={1210}
                            height={685}
                            className="w-full max-w-[440px] md:max-w-[560px] h-auto object-contain"
                        />
                        <span className="absolute top-2 right-[55px] md:right-[70px] text-xl font-bold">*</span>
                    </div>
                </div>
            </section>

            <main className="mx-auto w-full max-w-[900px] px-6 py-12 md:px-12 md:py-20 bg-white text-gray-900">

                {/* Avalie a cirurgia ainda no útero */}
                <section className="mb-16">
                    <h3 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-6">
                        Avalie a cirurgia ainda no útero
                    </h3>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify mb-6">
                        Um dos maiores avanços da saúde moderna é a cirurgia fetal. Ela é feita geralmente entre a 24ª e a 26ª semana de gestação. O objetivo é fechar a coluna do bebê enquanto ele ainda está na barriga da mãe.
                    </p>
                    <ul className="list-disc space-y-3 pl-5 md:pl-10 font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                        <li><strong>Benefícios:</strong> Estudos mostram que essa cirurgia reduz bastante a chance de o bebê precisar de uma válvula na cabeça para tratar o acúmulo de líquido (hidrocefalia) e dobra as chances de a criança conseguir andar no futuro.</li>
                        <li>Se o bebê não puder passar por esse procedimento, a cirurgia será feita logo após o nascimento, nas primeiras 48 horas de vida.</li>
                    </ul>
                </section>

            </main>

            {/* Rotina de cuidados (largura total) */}
            <section className="w-full bg-[#006633] text-white py-12 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto text-center">
                    <h3 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] mb-6">
                        Rotina de cuidados
                    </h3>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify">
                        As crianças com mielo precisam de estímulos desde muito cedo. A fisioterapia é essencial para ajudar no movimento das pernas e no equilíbrio. Além disso, muitas precisam de ajuda médica e de enfermeiros para urinar de forma correta (como o uso de pequenas sondas), protegendo os rins de infecções. Com a rotina certa, esses cuidados viram hábitos simples do dia a dia.
                    </p>
                </div>
            </section>

            <main className="mx-auto w-full max-w-[900px] px-6 py-12 md:px-12 md:py-20 bg-white text-gray-900">

                {/* Busque apoio e cuide de vocês e dos seus */}
                <section className="mb-16">
                    <h3 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-6">
                        Busque apoio e cuide de vocês e dos seus
                    </h3>
                    <p className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify mb-10">
                        É normal sentir medo, tristeza ou raiva no começo. Permita-se chorar e viver esses sentimentos, mas não tente carregar tudo sozinho. Procure grupos de apoio e associações de pais de crianças com mielo. Conversar com quem já passou por isso traz conforto e mostra que o seu filho poderá brincar, estudar e ser muito feliz.
                    </p>
                    <div className="flex justify-center">
                        <div className="relative">
                            <Image
                                src="/enfermeiro1.png"
                                alt="Equipe de saúde com crianças e familiares"
                                width={897}
                                height={641}
                                className="w-full max-w-[420px] h-auto object-contain"
                            />
                            <span className="absolute top-4 right-8 text-xl font-bold">*</span>
                        </div>
                    </div>
                </section>

                <Divider className="my-16" />

                {/* Referências */}
                <References references={listaReferencias} />

                <div className="mt-8 text-sm md:text-base text-black">
                    <p>*Fonte: gerada por Chat GPT em 31 de agosto de 2026.</p>
                </div>

            </main>
        </div>
    );
}