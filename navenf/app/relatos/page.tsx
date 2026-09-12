import Image from "next/image";
import Divisao from "@/components/Divisao";
import References from "@/components/References";
import TextoDestacado from "@/components/texto_destacado";

export default function RelatosCuidadores() {
    const listaReferencias = [
        { id: 1, text: "Sarı C, Kalyoncu M, Demirbağ BC. A qualitative study on the experiences of Turkish caregivers of learning clean intermittent catheterization. J Pediatr Nurs. 2025 Jan-Feb;89:e67-e73. doi: 10.1016/j.pedn.2024.11.003. Epub 2024 Nov 8. PMID: 39516057." },
        { id: 2, text: "Freitas GL, Sena RR, Silva JC, Castro FF. Rehabilitation of children and adolescents with myelomeningocele: the daily life of mothers-caregiversRehabilitation of children and adolescents with myelomeningocele: the daily life of mothers-caregivers. Rev Gaucha Enferm. 2017 Feb 9;37(4):e60310. Portuguese, English. doi: 10.1590/1983-1447.2016.04.60310. PMID: 28198945." },
        { id: 3, text: 'Lim, Seoung-Wha, et al. "Perceived barriers and difficulties of intermittent catheterization: In Korean patients with spinal dysraphism and their parents." Neurourology and urodynamics 35.3 (2016): 395-399.' },
        { id: 4, text: "Kanaheswari Y, Razak NN, Chandran V, Ong LC. Predictors of parenting stress in mothers of children with spina bifida. Spinal Cord. 2011 Mar;49(3):376-80. doi: 10.1038/sc.2010.125. Epub 2010 Sep 14. PMID: 20838404." },
        { id: 5, text: "Bauer SB, Saunders RA, Masoom SN, Choung K, Hayes LC, Price DE, Keays M, Sable PE, Shimmel A. The art of introducing clean intermittent catheterization: How families respond and adapt: A qualitative study. Neurourol Urodyn. 2023 Jan;42(1):300-321. doi: 10.1002/nau.25085. Epub 2022 Nov 9. PMID: 36352775." },
        { id: 6, text: "Borzyskowski M, Cox A, Edwards M, Owen A. Neuropathic bladder and intermittent catheterization: social and psychological impact on families. Dev Med Child Neurol. 2004 Mar;46(3):160-7. PMID: 14995085." }
    ];

    return (
        <div className="w-full">
            
            {/* 1. CABEÇALHO */}
            <section className="w-full bg-gradient-to-b from-[#006633] to-[#003366] py-16 sm:py-24 px-6 md:px-12 flex items-center justify-center">
                <div className="max-w-[1000px] mx-auto">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-calsans text-center leading-tight">
                        Relatos de cuidadores
                    </h1>
                </div>
            </section>

            {/* 2. CONTEÚDO PRINCIPAL */}
            <section className="w-full bg-white text-gray-900 py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto">
                    
                    <h2 className="font-calsans text-2xl sm:text-3xl text-center mb-4">
                        Experiências/Perspectivas do cuidador
                    </h2>

                    {/* BLOCO 1 */}
                    <div>
                        <TextoDestacado 
                            texto={<>“Com certeza,... não tenho mais vida social. Nunca consigo ir a lugares distantes... Fiquei em casa o tempo todo depois que ele nasceu.”<sup>1</sup></>}
                            corFundo="#003366" corSombra="#006633" className="mb-8"
                        />
                        <TextoDestacado 
                            texto={<>“O cateterismo urinário intermitente se tornou parte da minha rotina. Agora penso no cateterismo urinário intermitente, como limpar a casa, cozinhar, trocar fraldas e amamentar. Organizei minha vida de acordo com isso. O cateterismo urinário intermitente agora é uma necessidade para nós.”<sup>1</sup></>}
                            corFundo="#006633" corSombra="#003366" className="mb-8"
                        />
                        <TextoDestacado 
                            texto={<>“Eu não tenho ninguém além de Deus. Meu marido disse que não aguentava e me mandou fazer, enfim, ele não queria fazer. Estou tentando fazer sozinha...”<sup>1</sup></>}
                            corFundo="#FFC94B" corSombra="#006633" corTexto="text-gray-900" className="mb-16"
                        />
                    </div>

                    <div className="flex justify-center mb-16 relative">
                        <Image src="/relatos1.png" alt="Cuidadores exaustos" width={500} height={300} className="w-full max-w-[450px] h-auto object-contain" />
                        <span className="absolute top-10 right-[15%] text-xl">*</span>
                    </div>

                    {/* BLOCO 2 */}
                    <div>
                        <TextoDestacado 
                            texto={<>“...Mostraram uma vez. Foi muito traumático... Como minha filha é menina, não consegui encontrar exatamente onde colocá-la... Fiquei com muito medo, pensando: E se eu colocar no lugar errado...”<sup>1</sup></>}
                            corFundo="#003366" corSombra="#FFC94B" className="mb-8"
                        />
                        <TextoDestacado 
                            texto={<>“É muito difícil a gente sair. Muito difícil. Só dentro de casa mesmo. Eu até gosto de ficar em casa”<sup>2</sup></>}
                            corFundo="#006633" corSombra="#003366" className="mb-8"
                        />
                        
                        {/* Caixas lado a lado (usando o className sem margem vertical para controlar via grid) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto px-4 md:px-6 mb-16">
                            <TextoDestacado 
                                texto={<>“Achar a uretra que era difícil, dava medo”<sup>2</sup></>}
                                corFundo="#FFC94B" corSombra="#006633" corTexto="text-gray-900" className="my-0 px-0 md:px-0"
                            />
                            <TextoDestacado 
                                texto={<>“Tinha medo de machucá-la no cateterismo. Tinha medo dela sentir dor”</>}
                                corFundo="#FFC94B" corSombra="#006633" corTexto="text-gray-900" className="my-0 px-0 md:px-0"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center mb-16 relative">
                        <Image src="/relatos2.png" alt="Feto e mãe segurando bebê" width={500} height={300} className="w-full max-w-[450px] h-auto object-contain" />
                        <span className="absolute top-10 right-[15%] text-xl">*</span>
                    </div>

                    {/* BLOCO 3 */}
                    <div>
                        <TextoDestacado 
                            texto={<>“Agora eu sei da responsabilidade comigo e com ela. Eu não quero que minha filha tenha problema mais tarde”<sup>2</sup></>}
                            corFundo="#006633" corSombra="#FFC94B" className="mb-8"
                        />
                        <TextoDestacado 
                            texto={<>“Como é difícil fazer com a frequência necessária”<sup>3</sup></>}
                            corFundo="#003366" corSombra="#006633" className="mb-8"
                        />
                        <TextoDestacado 
                            texto={<>“As enfermeiras ou os vídeos ou tudo era como, 'oh, o cateterismo urinário intermitente deve ser simples assim.' Não foi. Foi muito, muito, muito difícil ... Durante todo o ano do jardim de infância, a enfermeira da escola nunca conseguiu e então seu pai e eu nos revezamos...”<sup>3</sup></>}
                            corFundo="#FFC94B" corSombra="#003366" corTexto="text-gray-900" className="mb-8"
                        />
                        <TextoDestacado 
                            texto={<>"Disponibilidade de alguém que possa ajudar os pacientes a realizarem o cateterismo na escola"<sup>3</sup></>}
                            corFundo="#006633" corSombra="#FFC94B" className="mb-16"
                        />
                    </div>

                    <div className="flex justify-center mb-16">
                        <Image src="/relatos3.png" alt="Família com médico e banheiro adaptado" width={600} height={350} className="w-full max-w-[550px] h-auto object-contain" />
                    </div>

                    {/* BLOCO 4 */}
                    <div>
                        <TextoDestacado 
                            texto={<>“Ampliação das instalações higiênicas nas escolas e logradouros públicos para a realização do cateterismo urinário intermitente”<sup>3</sup></>}
                            corFundo="#FFC94B" corSombra="#006633" corTexto="text-gray-900" className="mb-8"
                        />
                        <TextoDestacado 
                            texto={<>“Você precisa ser realmente criativo sobre os locais onde fará a coleta quando estiver fora”<sup>3</sup></>}
                            corFundo="#006633" corSombra="#003366" className="mb-8"
                        />
                        <TextoDestacado 
                            texto={<>“Com o diagnóstico de espinha bífida mudou toda a minha rotina. Toda. Eu estava em tempo de dar uma depressão porque eu passava a sonda nela e ela chorava de um lado e eu do outro”<sup>4</sup></>}
                            corFundo="#003366" corSombra="#006633" className="mb-8"
                        />
                        <TextoDestacado 
                            texto={<>“Depois que ela nasceu eu não tive mais condições de trabalhar. E eu prefiro cuidar a deixar para uma outra pessoa”<sup>4</sup></>}
                            corFundo="#FFC94B" corSombra="#003366" corTexto="text-gray-900" className="mb-16"
                        />
                    </div>

                    <div className="flex justify-center mb-16 relative">
                        <Image src="/relatos4.png" alt="Mãe abraçando filho cadeirante" width={400} height={300} className="w-full max-w-[350px] h-auto object-contain" />
                        <span className="absolute top-10 right-[25%] text-xl">*</span>
                    </div>

                    {/* BLOCO 5 */}
                    <div>
                        <TextoDestacado 
                            texto={<>“Quero que ela fique mais independente, principalmente para o cateterismo”<sup>4</sup></>}
                            corFundo="#003366" corSombra="#FFC94B" className="mb-8"
                        />
                        <TextoDestacado 
                            texto={<>“Tem tantas coisas que ela precisa remédios, fraldas, alimentação especial e nem sempre dá pra adquirir tudo”<sup>5</sup></>}
                            corFundo="#006633" corSombra="#003366" className="mb-8"
                        />
                        <TextoDestacado 
                            texto={<>“Mudou toda a minha rotina. Tudo. Eu estava à beira da depressão porque tive que inserir a sonda e ela chorou, e eu chorei. Chorei muito. Eu estava sempre chorando, chorava o tempo todo”<sup>6</sup></>}
                            corFundo="#003366" corSombra="#006633" className="mb-16"
                        />
                    </div>

                </div>
            </section>

            {/* 3. REFERÊNCIAS */}
            <section className="w-full bg-white text-black py-16 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto">
                    <Divisao className="mb-12" />
                    <References references={listaReferencias} />
                    <div className="mt-8 text-sm md:text-base text-black">
                        <p>*Fonte: gerada por Chat GPT em 9 de setembro de 2026.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}