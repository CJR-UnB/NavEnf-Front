import type { Metadata, Viewport } from 'next';
import { Atkinson_Hyperlegible } from 'next/font/google';
import './globals.css';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

// Configurando a Atkinson Hyperlegible
const atkinson = Atkinson_Hyperlegible({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-atkinson',
});

export const metadata: Metadata = {
    title: 'NavEnf',
    description: 'Navegação e informações sobre enfermagem',
};

export const viewport: Viewport = {
    colorScheme: 'light',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="pt-BR"
            className={`${atkinson.variable} h-full antialiased`}
        >
            {/* O font-atkinson aqui aplica ela para todo o texto corrido do site */}
            <body className="min-h-full flex flex-col font-atkinson">
                <NavBar />

                <main className="flex-1">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}