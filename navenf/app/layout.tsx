import type { Metadata } from 'next';
import { Atkinson_Hyperlegible } from 'next/font/google';
import './globals.css';
<<<<<<< HEAD
import NavBar from '../components/Navbar';
=======
import NavBar from './components/Navbar';
import localFont from "next/font/local";

const atkinson = localFont({
  src: "./fonts/AtkinsonHyperlegible-Regular.ttf",
  variable: "--font-atkinson",
});

const calSans = localFont({
  src: "./fonts/CalSans-Regular.ttf",
  variable: "--font-cal-sans",
});
>>>>>>> origin/feature/realizando-ocateterismo-page

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
<<<<<<< HEAD
    return (
        <html
            lang="pt-BR"
            className={`${atkinson.variable} h-full antialiased`}
        >
            {/* O font-atkinson aqui aplica ela para todo o texto corrido do site */}
            <body className="min-h-full flex flex-col font-atkinson">
                <NavBar />
=======
	return (
		<html
			lang="pt-BR"
			className={`${geistSans.variable} ${geistMono.variable} ${atkinson.variable} ${calSans.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<NavBar />
>>>>>>> origin/feature/realizando-ocateterismo-page

                <main className="flex-1">
                    {children}
                </main>
            </body>
        </html>
    );
}