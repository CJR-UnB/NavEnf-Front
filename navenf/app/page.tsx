'use client';

import HeaderHome from "@/app/components/headerHome";
import Divisao from "./components/Divisao";
import FotoEstilizada from "./components/FotoEstilizada";
import Image from "next/image";
import { sobreNosContent } from '@/app/content'; 
import BotaoSaibaMais from "./components/Botao";
import BarraFundo from "./components/BarraFundo";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          
            <HeaderHome />

            <section className="w-full bg-[#FDF1D6] py-8 px-4 md:px-4 flex flex-col items-center">
                <div className="w-full max-w-5xl flex flex-col items-center">
                    
                    <h2 className="text-[36px] md:text-[55px] font-normal leading-none text-center text-black mb-6 font-['Castoro']">
                    {sobreNosContent.title[1]}
                    </h2>

                    <h3 className="text-[22px] md:text-[36px] font-normal italic leading-none text-center text-[#003366] font-['Atkinson_Hyperlegible']">
                    {sobreNosContent.subtitle}
                    </h3>

                    {/* Divisória */}
                    <Divisao className="relative w-full max-w-[450px] h-6 md:h-10 mb-12"/>

                    <div 
                    className="w-full max-w-[900px] text-[18px] md:text-[32px] font-normal leading-snug md:leading-tight text-center text-black flex flex-col gap-4 md:gap-5 mb-16" 
                    style={{ fontFamily: '"Atkinson Hyperlegible", sans-serif' }}
                    >
                        <p>{sobreNosContent.texts[1]}</p>
                        <p>{sobreNosContent.texts[2]}</p>
                        <p>{sobreNosContent.texts[3]}</p>
                    </div>

                    {/* Logos */}
                    <div className="relative w-full max-w-[1172px] h-[120px] sm:h-[200px] md:h-[333px] mb-10">
                        <Image 
                            src={sobreNosContent.images.logos} 
                            alt="Logos" 
                            fill 
                            style={{ objectFit: 'contain' }} 
                        />
                    </div>

                    {/* Container do Vídeo */}
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
                        <video 
                            className="w-full h-full object-cover"
                            controls 
                            preload="metadata" 
                        >
                            <source src={sobreNosContent.videoSources.mp4} type="video/mp4" />
                            
                            {/* Mensagem de erro caso dê problema */}
                            <p className="text-white text-center p-4 font-['Atkinson_Hyperlegible']">
                                {sobreNosContent.videoSources.fallbackMessage}
                            </p>
                        </video>
                    </div>

                </div>
                </section>

                <section className="w-full bg-[#FDF1D6] px-4 md:px-12 pt-8 pb-10 md:pb-12 flex flex-col items-center">
                    <div className="w-full max-w-6xl flex flex-col items-center">

                        <Divisao className="relative w-full max-w-[450px] h-6 md:h-10 mb-8 md:mb-12"/>

                        <h2 className="text-[30px] md:text-[45px] font-normal leading-tight text-center text-black mb-8 md:mb-16 font-['Castoro'] max-w-[900px]">
                            {sobreNosContent.title[2]}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
                            
                            {/* Card 1 */}
                            <div className="flex flex-col items-center h-full">
                                <div className="flex-1 flex items-end justify-center pb-4 w-full max-w-[260px]">
                                    <p className="text-[20px] md:text-[24px] font-medium text-center text-black font-['Atkinson_Hyperlegible'] leading-tight w-full">
                                        {sobreNosContent.texts[4]} 
                                    </p>
                                </div>
                                <FotoEstilizada 
                                    src={sobreNosContent.images[1]}
                                    alt="Conhecendo o Mielomeningocele"
                                    variante="diagonal"
                                    corSombra="bg-[#003366]"
                                    posicaoSombra="inferior-esquerda"
                                    className="w-full max-w-[260px] aspect-square mb-5 md:mb-8"
                                />
                                <div className="w-full flex justify-center">
                                    <BotaoSaibaMais link="/sobre-a-mielo" />
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex flex-col items-center h-full">
                                <div className="flex-1 flex items-end justify-center pb-4 w-full max-w-[260px]">
                                    <p className="text-[20px] md:text-[24px] font-medium text-center text-black font-['Atkinson_Hyperlegible'] leading-tight w-full">
                                        {sobreNosContent.texts[5]}
                                    </p>
                                </div>
                                <FotoEstilizada 
                                    src={sobreNosContent.images[2]}
                                    alt="Realizando o Cateterismo"
                                    variante="superior"
                                    corSombra="bg-[#0F5A3E]"
                                    posicaoSombra="inferior-esquerda"
                                    className="w-full max-w-[260px] aspect-square mb-5 md:mb-8"
                                />
                                <div className="w-full flex justify-center">
                                    <BotaoSaibaMais link="/cateterismo" />
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="flex flex-col items-center h-full">
                                <div className="flex-1 flex items-end justify-center pb-4 w-full max-w-[260px]">
                                    <p className="text-[20px] md:text-[24px] font-medium text-center text-black font-['Atkinson_Hyperlegible'] leading-tight w-full">
                                        {sobreNosContent.texts[6]}
                                    </p>
                                </div>
                                <FotoEstilizada 
                                    src={sobreNosContent.images[3]}
                                    alt="Orientações para cuidadores"
                                    variante="diagonal"
                                    corSombra="bg-[#003366]"
                                    posicaoSombra="inferior-esquerda"
                                    className="w-full max-w-[260px] aspect-square mb-5 md:mb-8"
                                />
                                <div className="w-full flex justify-center">
                                    <BotaoSaibaMais link="/orientacoes" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="w-full bg-[#FDF1D6] px-4 md:px-12 pt-10 md:pt-16 pb-20 flex flex-col items-center">
                    <div className="w-full max-w-6xl flex flex-col items-center">

                        <h2 className="text-[30px] md:text-[45px] font-normal leading-none text-center text-black mb-10 md:mb-16 font-['Castoro']">
                            {sobreNosContent.title[3]}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
                            
                            {/* Card 4 */}
                            <div className="flex flex-col items-center h-full">
                                <div className="flex-1 flex items-end justify-center pb-4 w-full max-w-[260px]">
                                    <p className="text-[20px] md:text-[24px] font-medium text-center text-black font-['Atkinson_Hyperlegible'] leading-tight w-full">
                                        {sobreNosContent.texts[7]}
                                    </p>
                                </div>
                                <FotoEstilizada 
                                    src={sobreNosContent.images[4]} 
                                    alt="Papel do enfermeiro"
                                    variante="superior"
                                    corSombra="bg-[#0F5A3E]"
                                    posicaoSombra="inferior-esquerda"
                                    className="w-full max-w-[260px] aspect-square mb-5 md:mb-8"
                                />
                                <div className="w-full flex justify-center">
                                    <BotaoSaibaMais link="/papel-enfermeiro" />
                                </div>
                            </div>

                            {/* Card 5 */}
                            <div className="flex flex-col items-center h-full">
                                <div className="flex-1 flex items-end justify-center pb-4 w-full max-w-[260px]">
                                    <p className="text-[20px] md:text-[24px] font-medium text-center text-black font-['Atkinson_Hyperlegible'] leading-tight w-full">
                                        {sobreNosContent.texts[8]}
                                    </p>
                                </div>
                                <FotoEstilizada 
                                    src={sobreNosContent.images[5]} 
                                    alt="Rotina e autonomia"
                                    variante="diagonal"
                                    corSombra="bg-[#003366]"
                                    posicaoSombra="inferior-esquerda"
                                    className="w-full max-w-[260px] aspect-square mb-5 md:mb-8"
                                />
                                <div className="w-full flex justify-center">
                                    <BotaoSaibaMais link="/rotina" />
                                </div>
                            </div>

                            {/* Card 6 */}
                            <div className="flex flex-col items-center h-full">
                                <div className="flex-1 flex items-end justify-center pb-4 w-full max-w-[260px]">
                                    <p className="text-[20px] md:text-[24px] font-medium text-center text-black font-['Atkinson_Hyperlegible'] leading-tight w-full">
                                        {sobreNosContent.texts[9]}
                                    </p>
                                </div>
                                <FotoEstilizada 
                                    src={sobreNosContent.images[6]} 
                                    alt="Estratégias"
                                    variante="superior"
                                    corSombra="bg-[#0F5A3E]"
                                    posicaoSombra="inferior-esquerda"
                                    className="w-full max-w-[260px] aspect-square mb-5 md:mb-8"
                                />
                                <div className="w-full flex justify-center">
                                    <BotaoSaibaMais link="/estrategias" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <BarraFundo titulo={sobreNosContent.title[4]}>
                    
                    <div className="flex flex-col items-center w-full pt-0">
                        
                        {/* Texto Introdutório */}
                        <p className="text-[20px] md:text-[24px] font-normal text-center text-black font-['Atkinson_Hyperlegible'] max-w-[800px] mb-8 md:mb-10">
                            {sobreNosContent.texts[10]}
                        </p>

                        {/* Imagem Grande Principal */}
                        <FotoEstilizada 
                            src={sobreNosContent.images[7]}
                            alt="Ilustração Cuidador e Paciente"
                            variante="diagonal"
                            corSombra="bg-[#0F5A3E]" 
                            posicaoSombra="inferior-direita"
                            className="w-full max-w-[800px] aspect-[4/3] md:aspect-[16/9] mb-12 md:mb-16" 
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full max-w-[700px]">
                            
                            {/* Card Esquerda - Direitos */}
                            <div className="flex flex-col items-center h-full">
                                <FotoEstilizada 
                                    src={sobreNosContent.images[8]}
                                    alt="Direitos da pessoa com Mielo"
                                    variante="diagonal"
                                    corSombra="bg-[#003366]"
                                    posicaoSombra="inferior-esquerda"
                                    className="w-full max-w-[300px] aspect-[4/3] mb-6 md:mb-8"
                                />
                                
                                <p className="text-[20px] md:text-[22px] italic text-center text-black font-['Atkinson_Hyperlegible'] leading-tight max-w-[250px] mb-4 md:mb-5">
                                    {sobreNosContent.texts[11]}
                                </p>
                                
                                <div className="mt-auto w-full flex justify-center">
                                    <BotaoSaibaMais link="/direitos" />
                                </div>
                            </div>

                            {/* Card Direita - Relatos */}
                            <div className="flex flex-col items-center h-full">
                                <FotoEstilizada 
                                    src={sobreNosContent.images[9]}
                                    alt="Relatos dos cuidadores"
                                    variante="diagonal"
                                    corSombra="bg-[#003366]"
                                    posicaoSombra="inferior-esquerda"
                                    className="w-full max-w-[300px] aspect-[4/3] mb-6 md:mb-8"
                                />
                                
                                <p className="text-[20px] md:text-[22px] italic text-center text-black font-['Atkinson_Hyperlegible'] leading-tight max-w-[250px] mb-4 md:mb-5">
                                    {sobreNosContent.texts[12]}
                                </p>
                                
                                <div className="mt-auto w-full flex justify-center">
                                    <BotaoSaibaMais link="/relatos" />
                                </div>
                            </div>

                        </div>

                        {/* Divisória */}
                        <Divisao className="relative w-full max-w-[450px] h-6 md:h-10 mt-12 mb-4" />

                    </div>
                </BarraFundo>
        </div>
    );
}