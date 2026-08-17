import Image from 'next/image';
import { HTMLAttributes } from 'react';

// Tipagem das propriedades do componente
interface FotoEstilizadaProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  /** Variante do recorte da foto */
  variante?: 'diagonal' | 'superior' | 'superior-direita';
  /** Cor da sombra (aceita classes do Tailwind como 'bg-blue-900', 'bg-[#0F5A3E]') */
  corSombra?: string;
  /** Posição da sombra */
  posicaoSombra?: 'inferior-esquerda' | 'inferior-direita' | 'superior-esquerda' | 'superior-direita';
  /** Controle de tamanho do container da imagem */
  className?: string;
}

export default function FotoEstilizada({
  src,
  alt,
  variante = 'diagonal',
  corSombra = 'bg-blue-900', // cor padrão de fallback
  posicaoSombra = 'inferior-esquerda',
  className = 'w-full max-w-sm aspect-4/3', // tamanho padrão
  ...props
}: FotoEstilizadaProps) {
  
  // 1. Define as bordas arredondadas com base na variante escolhida
  // Utilizamos valores maiores no desktop (md:) e menores no mobile
  const classesBorda = {
    'diagonal': 'rounded-tl-[2.5rem] rounded-br-[2.5rem] md:rounded-tl-[4rem] md:rounded-br-[4rem]',
    'superior': 'rounded-t-[2.5rem] md:rounded-t-[4rem]',
    'superior-direita': 'rounded-tr-[2.5rem] md:rounded-tr-[4rem]',
  }[variante];

  // 2. Define o distanciamento/posição da sombra (offset)
  // A sombra é menor no mobile e maior em telas a partir do tamanho 'md'
  const classesSombra = {
    'inferior-esquerda': '-translate-x-3 translate-y-3 md:-translate-x-5 md:translate-y-5',
    'inferior-direita': 'translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5',
    'superior-esquerda': '-translate-x-3 -translate-y-3 md:-translate-x-5 md:-translate-y-5',
    'superior-direita': 'translate-x-3 -translate-y-3 md:translate-x-5 md:-translate-y-5',
  }[posicaoSombra];

  return (
    <div className={`relative ${className}`} {...props}>
      {/* Elemento que simula a "sombra" sólida */}
      <div
        className={`absolute inset-0 z-0 ${corSombra} ${classesBorda} ${classesSombra} transition-all duration-300`}
        aria-hidden="true"
      />

      {/* Container principal da Imagem */}
      <div className={`relative z-10 w-full h-full overflow-hidden bg-gray-100 ${classesBorda}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}