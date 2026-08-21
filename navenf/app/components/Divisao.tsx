import { HTMLAttributes } from 'react';

interface DivisaoProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export default function Divisao({ className = '', ...props }: DivisaoProps) {
    return (
        <div 
            className={`flex items-center justify-center w-full max-w-[250px] mx-auto my-4 gap-3 ${className}`} 
            {...props}
        >
            {/* Linha Esquerda */}
            <div className="h-[2px] flex-1 bg-slate-500 rounded-full opacity-60" />

            {/* Bolinhas Centrais */}
            <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0f5a3e]" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#fbbc04]" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#0f5a3e]" aria-hidden="true" />
            </div>

            {/* Linha Direita */}
            <div className="h-[2px] flex-1 bg-slate-500 rounded-full opacity-60" />
        </div>
    );
}