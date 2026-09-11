import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
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

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
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
			className={`${geistSans.variable} ${geistMono.variable} ${atkinson.variable} ${calSans.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<NavBar />

				<main className="flex-1">
					{children}
				</main>
			</body>
		</html>
	);
}