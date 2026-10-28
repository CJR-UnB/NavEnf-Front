'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

type Estado = 'parado' | 'lendo' | 'pausado';

// O suporte à leitura não muda depois que a página carrega, então não há o que observar
const semInscricao = () => () => {};

// O Chrome interrompe falas muito longas (~15s), então o texto é dividido em trechos curtos
const TAMANHO_MAXIMO_TRECHO = 200;

function dividirEmTrechos(texto: string): string[] {
	const frases = texto
		.split(/(?<=[.!?:;])\s+|\n+/)
		.map((frase) => frase.trim())
		.filter(Boolean);

	const trechos: string[] = [];
	let atual = '';

	for (const frase of frases) {
		if (atual && (atual + ' ' + frase).length > TAMANHO_MAXIMO_TRECHO) {
			trechos.push(atual);
			atual = frase;
		} else {
			atual = atual ? `${atual} ${frase}` : frase;
		}
	}
	if (atual) trechos.push(atual);

	return trechos;
}

function escolherVozPortugues(): SpeechSynthesisVoice | undefined {
	const vozes = window.speechSynthesis.getVoices();
	return (
		vozes.find((voz) => voz.lang === 'pt-BR') ??
		vozes.find((voz) => voz.lang.toLowerCase().startsWith('pt'))
	);
}

const LeitorDeTexto = () => {
	// No servidor é sempre false, então o botão só aparece no navegador
	const suportado = useSyncExternalStore(
		semInscricao,
		() => 'speechSynthesis' in window,
		() => false,
	);
	const [estado, setEstado] = useState<Estado>('parado');
	// Evita que eventos de uma leitura cancelada alterem o estado de uma leitura nova
	const leituraAtual = useRef(0);
	const pathname = usePathname();
	const [pathnameAnterior, setPathnameAnterior] = useState(pathname);

	// Volta os botões ao estado inicial ao trocar de página
	if (pathname !== pathnameAnterior) {
		setPathnameAnterior(pathname);
		setEstado('parado');
	}

	useEffect(() => {
		if (!suportado) return;
		// Em alguns navegadores a lista de vozes só fica disponível depois desse evento
		window.speechSynthesis.getVoices();
		window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();

		return () => window.speechSynthesis.cancel();
	}, [suportado]);

	// Para a leitura ao trocar de página
	useEffect(() => {
		if (!suportado) return;
		leituraAtual.current++;
		window.speechSynthesis.cancel();
	}, [pathname, suportado]);

	const ler = () => {
		const texto = document.querySelector('main')?.innerText ?? '';
		const trechos = dividirEmTrechos(texto);
		if (trechos.length === 0) return;

		window.speechSynthesis.cancel();
		const idLeitura = ++leituraAtual.current;
		const voz = escolherVozPortugues();

		trechos.forEach((trecho, indice) => {
			const fala = new SpeechSynthesisUtterance(trecho);
			fala.lang = 'pt-BR';
			if (voz) fala.voice = voz;

			if (indice === trechos.length - 1) {
				fala.onend = () => {
					if (leituraAtual.current === idLeitura) setEstado('parado');
				};
			}
			window.speechSynthesis.speak(fala);
		});

		setEstado('lendo');
	};

	const pausar = () => {
		window.speechSynthesis.pause();
		setEstado('pausado');
	};

	const continuar = () => {
		window.speechSynthesis.resume();
		setEstado('lendo');
	};

	const parar = () => {
		leituraAtual.current++;
		window.speechSynthesis.cancel();
		setEstado('parado');
	};

	if (!suportado) return null;

	const estiloBotao =
		'flex h-14 w-14 items-center justify-center rounded-full bg-[#003366] text-white shadow-lg transition-all duration-200 hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2A900]';

	return (
		<div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
			{estado === 'parado' && (
				<button
					type="button"
					onClick={ler}
					aria-label="Ouvir o conteúdo desta página"
					title="Ouvir esta página"
					className={estiloBotao}
				>
					{/* Ícone de alto-falante */}
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
						<path d="M11 5 6 9H2v6h4l5 4V5z" />
						<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
						<path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
					</svg>
				</button>
			)}

			{estado === 'lendo' && (
				<button
					type="button"
					onClick={pausar}
					aria-label="Pausar a leitura"
					title="Pausar"
					className={estiloBotao}
				>
					{/* Ícone de pausa */}
					<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<rect x="6" y="4" width="4" height="16" rx="1" />
						<rect x="14" y="4" width="4" height="16" rx="1" />
					</svg>
				</button>
			)}

			{estado === 'pausado' && (
				<button
					type="button"
					onClick={continuar}
					aria-label="Continuar a leitura"
					title="Continuar"
					className={estiloBotao}
				>
					{/* Ícone de play */}
					<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path d="M7 4v16l13-8z" />
					</svg>
				</button>
			)}

			{estado !== 'parado' && (
				<button
					type="button"
					onClick={parar}
					aria-label="Parar a leitura"
					title="Parar"
					className={estiloBotao}
				>
					{/* Ícone de parar */}
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<rect x="5" y="5" width="14" height="14" rx="2" />
					</svg>
				</button>
			)}

			{/* Anuncia a mudança de estado para quem usa leitor de tela */}
			<span className="sr-only" aria-live="polite">
				{estado === 'lendo' ? 'Lendo a página' : estado === 'pausado' ? 'Leitura pausada' : ''}
			</span>
		</div>
	);
};

export default LeitorDeTexto;
