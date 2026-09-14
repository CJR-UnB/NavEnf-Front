import React from 'react';

interface TextoDestacadoProps {
  texto: React.ReactNode;
  corFundo: string;
  corSombra: string;
  corTexto?: string;
  className?: string;
}

export default function TextoDestacado({ texto, corFundo, corSombra, corTexto = 'text-white', className = 'my-12' }: TextoDestacadoProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto px-4 md:px-6 ${className}`}>

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
          <p className={`font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] text-center leading-[1.35] font-medium ${corTexto}`}>
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