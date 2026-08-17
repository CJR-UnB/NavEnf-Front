import React from 'react';

interface TextoDestacadoProps {
  texto: React.ReactNode; 
  corFundo: string;
  corSombra: string;
}

export default function TextoDestacado({ texto, corFundo, corSombra }: TextoDestacadoProps) {
  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4 md:px-6">
      
      <div className="relative w-full">
  
        {/* Sombra */}
        <div 
          className="absolute top-2 -left-2 md:top-3 md:-left-3 w-full h-full z-0 
                     rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]"
          style={{ backgroundColor: corSombra }}
        ></div>

        {/* Bloco Principal */}
        <div 
          className="relative z-10 px-6 py-6 md:px-12 md:py-8 flex items-center justify-center 
                     rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]"
          style={{ backgroundColor: corFundo }}
        >
          <p className="text-white text-base sm:text-lg md:text-2xl text-center leading-relaxed font-medium">
            {texto}
          </p>
        </div>

      </div>
    </div>
  );
}

// import TextoDestacado from '../components/texto_destacado';

// export default function Home() {
//   return (
//     <main className="p-4 md:p-8">

//       <TextoDestacado 
//         texto={<>“Você precisa ser realmente criativo sobre os locais onde fará a coleta quando estiver fora”<sup>3</sup></>}
//         corFundo="#006633"
//         corSombra="#003366"
//       />

//     </main>
//   );
// }