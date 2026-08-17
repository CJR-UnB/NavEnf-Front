import FotoEstilizada from '@/components/FotoEstilizada';

export default function MinhaPagina() {
  return (
    <div className="flex flex-col gap-16 p-10 items-center">
      
      {/* Exemplo 1: Arredondada na Diagonal */}
      <FotoEstilizada 
        src="/caminho-da-foto.jpg" 
        alt="Foto com corte diagonal"
        variante="diagonal"
        corSombra="bg-blue-900"
        posicaoSombra="inferior-esquerda"
        className="w-64 h-64 md:w-80 md:h-80" 
      />

      {/* Exemplo 2: Arredondada na Superior */}
      <FotoEstilizada 
        src="/bebe-medico.jpg" 
        alt="Foto com borda superior arredondada"
        variante="superior"
        corSombra="bg-[#0b5433]"
        posicaoSombra="inferior-esquerda"
        className="w-full max-w-md aspect-square" 
      />

      {/* Exemplo 3: Arredondada na Superior Direita (Bandeira) */}
      <FotoEstilizada 
        src="/bandeira.jpg" 
        alt="Bandeira do Brasil"
        variante="superior-direita"
        corSombra="bg-green-800"
        posicaoSombra="inferior-esquerda"
        className="w-full max-w-lg aspect-[16/9]"
      />

    </div>
  );
}