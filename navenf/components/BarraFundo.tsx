'use client';

import { useState, ReactNode } from 'react';

// Tipagem para receber o título e o conteúdo que vai dentro da barra
interface BarraFundoProps {
  titulo: string;
  children: ReactNode;
}

export default function BarraFundo({ titulo, children }: BarraFundoProps) {
  // Estado que controla se a aba está aberta (true) ou fechada (false)
  const [isOpen, setIsOpen] = useState(false);

return (
    // Trocamos o bg-[#FDF1D6] pelo novo padrão bg-[#FFECBE]
    <div 
      className={`w-full transition-colors duration-500 ${
        isOpen ? 'bg-[#FFFFFF]' : 'bg-[#F2A900]'
      }`}
    >
    {/* Cabeçalho Clicável */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        // O py-10 md:py-14 foi trocado por pt e pb separados
        className="w-full max-w-6xl mx-auto flex items-center justify-center gap-6 pt-10 pb-4 md:pt-14 md:pb-6 px-4 cursor-pointer focus:outline-none"
      >
        {/* Ícone de Seta (Chevron) - Fiel ao design do Figma */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          // A seta aponta para cima por padrão. Quando abre, ela gira 180 graus (aponta para baixo)
          className={`w-8 h-8 md:w-12 md:h-12 text-black transition-transform duration-500 ease-in-out ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>

        {/* Título */}
        <h2 className="text-[28px] md:text-[45px] font-bold text-black font-['Cal Sans'] leading-none">
          {titulo}
        </h2>
      </button>

      {/* Conteúdo Expansível (Aba que abre) */}
      <div 
        // Usamos max-h para criar a animação de deslizar para baixo de forma CSS pura
        className={`w-full overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100 pb-16' : 'max-h-0 opacity-0 pb-0'
        }`}
      >
        <div className="w-full max-w-6xl mx-auto px-4 md:px-12 flex flex-col items-center">
          {children}
        </div>
      </div>
    </div>
  );
}