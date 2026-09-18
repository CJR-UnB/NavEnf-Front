'use client';

import HeaderHome from "@/components/headerHome";
import Divider from "@/components/Divider";
import FotoEstilizada from "@/components/FotoEstilizada";
import Image from "next/image";
import { sobreNosContent } from '@/app/content'; 
import BotaoSaibaMais from "@/components/Botao";
import BarraFundo from "@/components/BarraFundo";
import CardIcone from "@/components/cardIcone";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
          
            <HeaderHome 
                imageSrc={"/home/bemVindo.png"}
            />

            {/* Container Global usando o exato padrão de fundo e padding */}
            <div className="w-full bg-[#FFFFFF] px-5 py-10 text-black sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 flex flex-col items-center">
                
                {/* --- SEÇÃO 1: SOBRE NÓS --- */}
                <div id="sobre-nos" className="mx-auto flex w-full max-w-[1000px] flex-col gap-6 md:gap-8 items-center scroll-mt-[100px] md:scroll-mt-[120px] lg:scroll-mt-[145px]">
                    
                    <h2 className="text-center font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1]">
                        {sobreNosContent.title[1]}
                    </h2>

                    <h3 className="text-center font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal italic leading-[1.35] text-[#003366]">
                        {sobreNosContent.subtitle}
                    </h3>

                    <Divider className="relative w-full max-w-[450px] h-6 md:h-10 mt-2 mb-4"/>

                    <div className="w-full flex flex-col gap-5 md:gap-6">
                        <p className="text-justify font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                            {sobreNosContent.texts[1]}
                        </p>
                        <p className="text-justify font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                            {sobreNosContent.texts[2]}
                        </p>
                        <p className="text-justify font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35]">
                            {sobreNosContent.texts[3]}
                        </p>
                    </div>

                    {/* Equipe de pesquisadores */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4">
                        {sobreNosContent.equipe.map((pesquisador) => (
                            <div key={pesquisador.nome} className="flex flex-col items-center text-center gap-3">
                                <div className="relative w-[140px] h-[140px] rounded-full overflow-hidden bg-gray-200 shrink-0">
                                    <Image
                                        src={pesquisador.foto}
                                        alt={pesquisador.nome}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        sizes="140px"
                                    />
                                </div>
                                <p className="font-atkinson text-[clamp(1rem,1.2vw,1.25rem)] font-bold leading-[1.3]">
                                    {pesquisador.nome}
                                </p>
                                <a
                                    href={pesquisador.lattes}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-atkinson text-[clamp(0.9rem,1.1vw,1.1rem)] text-[#003366] underline hover:opacity-80 transition-opacity break-all"
                                >
                                    {pesquisador.lattes}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Logos */}
                    <div className="relative w-full max-w-[1172px] h-[120px] sm:h-[200px] md:h-[333px] mt-6 md:mt-8">
                        <Image 
                            src={sobreNosContent.images.logos} 
                            alt="Logos" 
                            fill 
                            style={{ objectFit: 'contain' }} 
                        />
                    </div>

                    {/* Container do Vídeo */}
                    <div className="w-full mt-6 md:mt-8">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
                            <video
                                className="w-full h-full object-cover"
                                controls
                                preload="metadata"
                            >
                                <source src={sobreNosContent.videoSources.mp4} type="video/mp4" />
                                <p className="text-white text-center p-4 font-atkinson">
                                    {sobreNosContent.videoSources.fallbackMessage}
                                </p>
                            </video>
                        </div>
                        <p className="w-full mt-1 text-right text-[12px] [font-style:oblique_8deg] text-gray-500 font-atkinson sm:text-[13px]">
                            *Fonte: gerada por Vidnoz IA em 12 de agosto de 2026
                        </p>
                    </div>
                </div>

                {/* --- SEÇÃO 2: CONHECENDO MIELO E CATETERISMO --- */}
                <div id="espinha-bifida" className="mx-auto mt-16 flex w-full max-w-[1000px] flex-col gap-6 md:mt-20 md:gap-8 items-center scroll-mt-[100px] md:scroll-mt-[120px] lg:scroll-mt-[145px]">

                    <Divider className="relative w-full max-w-[450px] h-6 md:h-10"/>

                    <h2 className="text-center font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] max-w-[950px]">
                        {sobreNosContent.title[2]}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 w-full mt-4">
                        
                        {/* Card 1 */}
                        < CardIcone 
                            texto={sobreNosContent.texts[4]} 
                            imagem={sobreNosContent.images[1]} 
                            link="/conhecendo-a-espinha-bifida" 
                        />

                        {/* Card 2 */}
                        < CardIcone 
                            texto={sobreNosContent.texts[5]} 
                            imagem={sobreNosContent.images[2]} 
                            link="/realizando-o-cateterismo-urinario-intermitente" 
                        />

                        {/* Card 3 */}
                        < CardIcone 
                            texto={sobreNosContent.texts[6]} 
                            imagem={sobreNosContent.images[3]} 
                            link="/alem-do-cateterismo" 
                        />
                    </div>
                </div>

                {/* --- SEÇÃO 3: AUTOGESTÃO --- */}
                <div id="autogestao" className="mx-auto mt-16 flex w-full max-w-[1000px] flex-col gap-6 md:mt-20 md:gap-8 items-center scroll-mt-[100px] md:scroll-mt-[120px] lg:scroll-mt-[145px]">

                    <h2 className="text-center font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1]">
                        {sobreNosContent.title[3]}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 w-full mt-4">
                        
                        {/* Card 4 */}
                        <CardIcone
                            texto={sobreNosContent.texts[7]}
                            imagem={sobreNosContent.images[4]}
                            link="/papel-do-enfermeiro"
                        />

                        {/* Card 5 */}
                        <CardIcone
                            texto={sobreNosContent.texts[8]}
                            imagem={sobreNosContent.images[5]}
                            link="/rotina-e-autonomia"
                        />


                        {/* Card 6 */}
                        <CardIcone
                            texto={sobreNosContent.texts[9]}
                            imagem={sobreNosContent.images[6]}
                            link="/estrategias-que-facilitam"
                        />
                    </div>
                </div>

            </div> {/* Fim do Container Global Bege */}

            {/* --- SEÇÃO 4: BARRA EXPANSÍVEL --- */}
            <BarraFundo id="cuidador" titulo={sobreNosContent.title[4]}>
                
                <div className="flex flex-col items-center w-full pt-0">
                    
                    {/* Adicionado text-black aqui */}
                    <p className="text-black text-center font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] max-w-[800px] mb-8 md:mb-10">
                        {sobreNosContent.texts[10]}
                    </p>

                    <div className="w-full max-w-[800px] mb-12 md:mb-16">
                        <FotoEstilizada
                            src={sobreNosContent.images[7]}
                            alt="Ilustração Cuidador e Paciente"
                            variante="diagonal"
                            corSombra="bg-[#003366]"
                            posicaoSombra="inferior-direita"
                            className="w-full aspect-[3/2] shrink-0"
                            sizes="(max-width: 800px) 100vw, 800px"
                        />
                        <p className="relative z-10 mt-5 w-full text-center text-[12px] text-gray-500 font-atkinson sm:text-[13px] md:mt-7">
                            *Foto gerada por Chat GPT em 31 de agosto de 2026
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full max-w-[700px]">
                        
                        {/* Card Esquerda - Direitos */}
                        <div className="flex flex-col items-center h-full">
                            <div className="w-full max-w-[300px] mb-6 md:mb-8">
                                <FotoEstilizada
                                    src={sobreNosContent.images[8]}
                                    alt="Direitos da pessoa com Mielo"
                                    variante="diagonal"
                                    corSombra="bg-[#003366]"
                                    posicaoSombra="inferior-esquerda"
                                    className="w-full aspect-[4/3] shrink-0"
                                />
                                <p className="relative z-10 mt-5 w-full text-center text-[11px] text-gray-500 font-atkinson sm:text-[11px] md:mt-7">
                                    *Foto gerada por Figma AI Agent em 9 de setembro de 2026
                                </p>
                            </div>

                            {/* Adicionado text-black aqui */}
                            <p className="text-black text-center font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal italic leading-[1.25] max-w-[250px] mb-4 md:mb-5">
                                {sobreNosContent.texts[11]}
                            </p>
                            
                            <div className="mt-auto w-full flex justify-center">
                                <BotaoSaibaMais link="/direitos-da-pesssoa-com-mielo" />
                            </div>
                        </div>

                        {/* Card Direita - Relatos */}
                        <div className="flex flex-col items-center h-full">
                            <div className="w-full max-w-[300px] mb-6 md:mb-8">
                                <FotoEstilizada
                                    src={sobreNosContent.images[9]}
                                    alt="Relatos dos cuidadores"
                                    variante="diagonal"
                                    corSombra="bg-[#003366]"
                                    posicaoSombra="inferior-esquerda"
                                    className="w-full aspect-[4/3] shrink-0"
                                />
                                <p className="relative z-10 mt-5 w-full text-center text-[11px] text-gray-500 font-atkinson sm:text-[11px] md:mt-7">
                                    *Foto gerada por Figma AI Agent em 9 de setembro de 2026
                                </p>
                            </div>

                            {/* Adicionado text-black aqui */}
                            <p className="text-black text-center font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal italic leading-[1.25] max-w-[250px] mb-4 md:mb-5">
                                {sobreNosContent.texts[12]}
                            </p>
                            
                            <div className="mt-auto w-full flex justify-center">
                                <BotaoSaibaMais link="/relatos" />
                            </div>
                        </div>

                    </div>

                    <Divider className="relative w-full max-w-[450px] h-6 md:h-10 mt-12 mb-4" />

                </div>
            </BarraFundo>
        </div>
    );
}