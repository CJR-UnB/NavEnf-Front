import Link from 'next/link';

interface BotaoSaibaMaisProps {
  link: string;
}

export default function BotaoSaibaMais({ link }: BotaoSaibaMaisProps) {
  return (
    <Link 
      href={link}
      className="flex items-center justify-center bg-[#F2A900] text-black 
                 rounded-[10px] w-[160px] h-[52px] md:w-[189px] md:h-[62px] 
                 font-['Castoro'] text-[20px] md:text-[24px] 
                 hover:brightness-95 hover:scale-105 transition-all duration-200"
    >
      Saiba mais
    </Link>
  );
}