import Image from "next/image";
import BotaoSaibaMais from "./Botao"; // Verifique se o caminho do seu botão está correto

interface CardIconeProps {
  texto: string;
  imagem: string;
  link: string;
}

export default function CardIcone({ texto, imagem, link }: CardIconeProps) {
  return (
    <div className="flex flex-col items-center h-full w-full">
      
      {/* 1. TEXTO */}
      <div className="flex-1 flex items-end justify-center pb-4 w-full max-w-[260px]">
        <p className="text-center --font-atkinson [font-style:oblique_8deg] text-[18px] font-medium leading-[1.25] tracking-normal text-black sm:text-[20px] md:text-[22px] lg:text-[22px] w-full">
          {texto}
        </p>
      </div>

      {/* 2. IMAGEM: Removido o scale. Agora ela respeita rigorosamente a caixa de 260px */}
<div className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px] mb-6 md:mb-8 shrink-0 flex items-center justify-center">
        <Image 
          src={imagem} 
          alt={texto} 
          fill 
          className="object-contain mix-blend-multiply" 
        />
      </div>

      {/* 3. BOTÃO */}
      <div className="w-full flex justify-center mt-auto">
        <BotaoSaibaMais link={link} />
      </div>

    </div>
  );
}