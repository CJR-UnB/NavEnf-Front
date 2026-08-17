import type { Metadata } from 'next';
import { Atkinson_Hyperlegible, Castoro } from 'next/font/google';
import './globals.css';
import NavBar from '../components/Navbar';

// 1. Configurando a Atkinson Hyperlegible
const atkinson = Atkinson_Hyperlegible({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-atkinson',
});

// 2. Configurando a Castoro (para os títulos)
const castoro = Castoro({
    weight: ['400'], 
    subsets: ['latin'],
    variable: '--font-castoro',
});

export const metadata: Metadata = {
    title: 'NavEnf',
    description: 'Navegação e informações sobre enfermagem',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="pt-BR"
            // 3. Adicionando as variáveis das fontes na tag html
            className={`${atkinson.variable} ${castoro.variable} h-full antialiased`}
        >
            {/* 4. Aplicando font-atkinson no body para ser a fonte padrão de todo o site */}
            <body className="min-h-full flex flex-col font-atkinson bg-[#fef5d8]">
                <NavBar />

                <main className="flex-1">
                    {children}
                </main>
            </body>
        </html>
    );
}