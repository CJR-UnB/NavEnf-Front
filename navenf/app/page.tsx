'use client';

import HeaderHome from "@/components/headerHome";
import Divisao from "@/components/Divisao";
import FotoEstilizada from "@/components/FotoEstilizada";
import Image from "next/image";
import { sobreNosContent } from '@/app/content'; 
import BotaoSaibaMais from "@/components/Botao";
import BarraFundo from "@/components/BarraFundo";
import CardIcone from "@/components/cardIcone";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          
            <HeaderHome 
                imageSrc={"/assets/home/bemVindo.png"} 
            />

            {/* Container Global usando o exato padrão de fundo e padding */}
            <div className="w-full bg-[#FFFFFF] px-5 py-10 text-black sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 flex flex-col items-center">
                
                {/* --- SEÇÃO 1: SOBRE NÓS --- */}
                <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-6 md:gap-8 items-center">
                    
                    <h2 className="text-center font-['Cal Sans'] text-[30px] font-bold leading-[1.15] tracking-normal sm:text-[36px] md:text-[42px] lg:text-[55px]">
                        {sobreNosContent.title[1]}
                    </h2>

                    <h3 className="text-center font-[] text-[20px] font-normal italic leading-[1.15] tracking-normal text-[#003366] sm:text-[22px] md:text-[24px] lg:text-[28px]">
                        {sobreNosContent.subtitle}
                    </h3>

                    <Divisao className="relative w-full max-w-[450px] h-6 md:h-10 mt-2 mb-4"/>

                    <div className="w-full flex flex-col gap-5 md:gap-6">
                        <p className="text-justify --font-atkinson text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
                            {sobreNosContent.texts[1]}
                        </p>
                        <p className="text-justify --font-atkinson text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
                            {sobreNosContent.texts[2]}
                        </p>
                        <p className="text-justify --font-atkinson text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
                            {sobreNosContent.texts[3]}
                        </p>
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
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black mt-6 md:mt-8">
                        <video 
                            className="w-full h-full object-cover"
                            controls 
                            preload="metadata" 
                        >
                            <source src={sobreNosContent.videoSources.mp4} type="video/mp4" />
                            <p className="text-white text-center p-4 --font-atkinson">
                                {sobreNosContent.videoSources.fallbackMessage}
                            </p>
                        </video>
                    </div>
                </div>

                {/* --- SEÇÃO 2: CONHECENDO MIELO E CATETERISMO --- */}
                <div className="mx-auto mt-16 flex w-full max-w-[1000px] flex-col gap-6 md:mt-20 md:gap-8 items-center">

                    <Divisao className="relative w-full max-w-[450px] h-6 md:h-10"/>

                    <h2 className="text-center font-['Cal Sans'] text-[30px] font-bold leading-[1.15] tracking-normal sm:text-[36px] md:text-[42px] lg:text-[48px] max-w-[950px]">
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
                <div className="mx-auto mt-16 flex w-full max-w-[1000px] flex-col gap-6 md:mt-20 md:gap-8 items-center">

                    <h2 className="text-center font-['Cal Sans'] text-[30px] font-bold leading-[1.15] tracking-normal sm:text-[36px] md:text-[42px] lg:text-[48px]">
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
            <BarraFundo titulo={sobreNosContent.title[4]}>
                
                <div className="flex flex-col items-center w-full pt-0">
                    
                    {/* Adicionado text-black aqui */}
                    <p className="text-black text-center --font-atkinson text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px] max-w-[800px] mb-8 md:mb-10">
                        {sobreNosContent.texts[10]}
                    </p>

                    <FotoEstilizada 
                        src={sobreNosContent.images[7]}
                        alt="Ilustração Cuidador e Paciente"
                        variante="diagonal"
                        corSombra="bg-[#0F5A3E]" 
                        posicaoSombra="inferior-direita"
                        className="w-full max-w-[800px] aspect-[4/3] md:aspect-[16/9] mb-12 md:mb-16 shrink-0" 
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
                                className="w-full max-w-[300px] aspect-[4/3] mb-6 md:mb-8 shrink-0"
                            />
                            
                            {/* Adicionado text-black aqui */}
                            <p className="text-black text-center --font-atkinson text-[18px] font-normal italic leading-[1.25] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px] max-w-[250px] mb-4 md:mb-5">
                                {sobreNosContent.texts[11]}
                            </p>
                            
                            <div className="mt-auto w-full flex justify-center">
                                <BotaoSaibaMais link="/direitos-da-pesssoa-com-mielo" />
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
                                className="w-full max-w-[300px] aspect-[4/3] mb-6 md:mb-8 shrink-0"
                            />
                            
                            {/* Adicionado text-black aqui */}
                            <p className="text-black text-center --font-atkinson text-[18px] font-normal italic leading-[1.25] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px] max-w-[250px] mb-4 md:mb-5">
                                {sobreNosContent.texts[12]}
                            </p>
                            
                            <div className="mt-auto w-full flex justify-center">
                                <BotaoSaibaMais link="/relatos" />
                            </div>
                        </div>

                    </div>

                    <Divisao className="relative w-full max-w-[450px] h-6 md:h-10 mt-12 mb-4" />

                </div>
            </BarraFundo>
        </div>
    );
}