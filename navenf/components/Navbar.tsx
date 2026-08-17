'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NavBar = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const menuItems = [
		{ id: 1, label: 'Sobre nós', href: '/' },
		{ id: 2, label: 'Autogestão', href: '/' },
		{ id: 3, label: 'Espinha Bífida e Cateterismo', href: '/conhecendo-a-espinha-bifida' },
		{ id: 4, label: 'Dê esse passo, cuidador', href: '/' },
	]

	return (
		<header className="sticky top-0 z-50 w-full bg-[#F5AF0A]">
			<nav className="mx-auto flex min-h-[90px] max-w-[1440px] items-center justify-between px-6 md:min-h-[110px] md:px-10 lg:min-h-[135px] lg:px-12">
				<Link href="/">
					<Image
						src="/logo.png"
						alt="Logo"
						width={183}
						height={133}
						className="h-auto w-[90px] md:w-[120px] lg:w-[145px]"
					/>
				</Link>

				<ul className="hidden items-center gap-6 lg:flex xl:gap-10">
					{menuItems.map((item) => (
						<li key={item.id}>
							<Link
								href={item.href}
								className="font-['Atkinson_Hyperlegible'] text-lg font-normal text-black transition-opacity hover:opacity-70 xl:text-xl"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>

				<button
					type="button"
					aria-label={menuIsOpen ? 'Fechar menu' : 'Abrir menu'}
					aria-expanded={menuIsOpen}
					onClick={() => setMenuIsOpen((prev) => !prev)}
					className="rounded-xl bg-[#003366] p-2 transition-transform duration-200 active:scale-95 lg:hidden"
				>
					<Image
						src={menuIsOpen ? '/assets/close.svg' : '/assets/menu.svg'}
						alt=""
						width={32}
						height={32}
						className="h-8 w-8 brightness-0 invert"
					/>
				</button>
			</nav>

			<div
				className={`overflow-hidden bg-[#F5AF0A] transition-all duration-300 ease-in-out lg:hidden ${
					menuIsOpen
						? 'max-h-[300px] translate-y-0 opacity-100'
						: 'max-h-0 -translate-y-2 opacity-0'
				}`}
			>
				<ul className="flex flex-col gap-4 border-t border-black/10 px-6 py-5">
					{menuItems.map((item) => (
						<li key={item.id}>
							<Link
								href={item.href}
								onClick={() => setMenuIsOpen(false)}
								className="font-['Atkinson_Hyperlegible'] text-xl text-black transition-opacity duration-200 hover:opacity-70"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default NavBar;