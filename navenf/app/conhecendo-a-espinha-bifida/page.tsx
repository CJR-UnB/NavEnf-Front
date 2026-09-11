import { References } from '../components';
import Image from 'next/image';
import { content } from './content';
// import Divider from '../components/index';

const ConhecendoPage = () => {
	return (
		<div>
			{/* <h1>{content.title}</h1> */}

			{/* SESSÃO 1 */}
			<section className="w-[90%] max-w-[1100px] mx-auto mb-[4rem]">
				<h2
					className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mt-[4rem] mb-[1.5rem]"
				>
					{content.session[0].title}
				</h2>

				<div>
					<p
						className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify mb-[2rem]"
					>
						{content.session[0].text[0]}
					</p>

					<div className="flex flex-col lg:flex-row items-center gap-[4%]">
						<div className="w-full lg:w-[40%] flex justify-center">
							<Image
								src={`/assets/${content.session[0].image}.svg`}
								alt="Ultrassom"
								width={500}
								height={500}
								className="w-[65%] lg:w-full h-auto"
							/>
						</div>

						<div className="w-full lg:w-[56%] flex flex-col gap-[1.5rem]">
							<p
								className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify"
							>
								{content.session[0].text[1]}
							</p>

							<p
								className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify"
							>
								{content.session[0].text[2]}
							</p>

							<p
								className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify"
							>
								{content.session[0].text[3][0]}
								<strong>
									{content.session[0].text[3][1]}
								</strong>
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* SESSÃO 2 */}
			<section className="w-full bg-[#003366] flex justify-center items-center mb-[4rem]">
				<div className="w-[90%] max-w-[1100px]">
					<h2
						className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center text-white mt-[4rem] mb-[1.5rem]"
					>
						{content.session[1].title}
					</h2>

					<p
						className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify text-white mb-[4rem]"
					>
						{content.session[1].text}
					</p>
				</div>
			</section>

			{/* SESSÃO 3 */}
			<section className="w-[90%] max-w-[1100px] mx-auto mt-[4rem] mb-[4rem]">
				<div className="lg:flex-row items-center justify-center gap-[4%]">
					<div className="w-full flex justify-center items-center mb-[3rem]">
						<Image
							src={`/assets/${content.session[2].image}.png`}
							alt="espinha"
							width={1000}
							height={1000}
							className="w-[clamp(240px,35vw,450px)] h-auto"
						/>
					</div>

					<div className="w-full">
						<h2
							className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-[1.5rem]"
						>
							{content.session[2].title}
						</h2>

						<div className="flex flex-col gap-[1.5rem]">
							<p
								className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify"
							>
								{content.session[2].text[0]}
							</p>

							<p
								className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify"
							>
								{content.session[2].text[1]}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* SESSÃO 4 */}
			<section className="w-full bg-[#FFC94A] mx-auto mt-[4rem] pb-[4rem] flex justify-center">
				<div className="w-[90%] max-w-[1100px]">
					<h2
						className="font-cal mt-[4rem] text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-[1.5rem]"
					>
						{content.session[3].title}
					</h2>

					<p
						className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify mb-[2rem]"
					>
						{content.session[3].text}
					</p>

					<div className="flex flex-col gap-[3rem]">
						<div className="flex flex-col lg:flex-row items-center gap-[4%]">
							<div className="w-full lg:w-[40%] flex justify-center items-center">
								<Image
									src={`/assets/${content.session[3].image[0]}.svg`}
									alt="Cirurgião"
									width={1000}
									height={1000}
									className="w-[clamp(240px,35vw,450px)] h-auto"
								/>
							</div>

							<div className="w-full lg:w-[56%]">
								<ul className="list-disc pl-[2rem]">
									<li
										className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify"
									>
										<strong>
											{content.session[3].list[0].title}
										</strong>{' '}
										{content.session[3].list[0].text}
									</li>

									<li
										className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify mt-[1.5rem]"
									>
										<strong>
											{content.session[3].list[1].title}
										</strong>{' '}
										{content.session[3].list[1].text}
									</li>
								</ul>
							</div>
						</div>

						<div className="flex flex-col lg:flex-row-reverse items-center gap-[4%]">
							<div className="w-full lg:w-[40%] flex justify-center items-center">
								<Image
									src={`/assets/${content.session[3].image[1]}.svg`}
									alt="Cadeira de rodas"
									width={1000}
									height={1000}
									className="w-[clamp(240px,35vw,450px)] h-auto"
								/>
							</div>

							<div className="w-full lg:w-[56%]">
								<ul className="list-disc pl-[2rem]">
									<li
										className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify"
									>
										<strong>
											{content.session[3].list[2].title}
										</strong>{' '}
										{content.session[3].list[2].text}
									</li>

									<li
										className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify mt-[1.5rem]"
									>
										<strong>
											{content.session[3].list[3].title}
										</strong>{' '}
										{content.session[3].list[3].text}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SESSÃO 5 */}
			<section className="w-full mx-auto mt-[4rem] mb-[4rem]">
				<div className="w-[90%] max-w-[1100px] mx-auto">
					<h2
						className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-[1.5rem]"
					>
						{content.session[4].title}
					</h2>

					<div className="flex flex-col gap-[1.5rem]">
						<p
							className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify"
						>
							{content.session[4].text[0]}
						</p>

						<p
							className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify"
						>
							{content.session[4].text[1]}
						</p>
					</div>
				</div>

				<ul className="flex flex-col gap-[1.5rem] mt-[1.5rem] list-none p-0">
					<li className="w-[80%] bg-[#80D960] self-start">
						<p
							className="w-full px-[2rem] py-[1.5rem] font-atkinson font-normal text-[clamp(1.25rem,2vw,2.5rem)] leading-[1.2] tracking-[0%] text-right pr-[10%]"
						>
							{content.session[4].list[0]}
						</p>
					</li>

					<li className="w-[80%] bg-[#F9C13C] self-end">
						<p
							className="w-full px-[2rem] py-[1.5rem] font-atkinson font-normal text-[clamp(1.25rem,2vw,2.5rem)] leading-[1.2] tracking-[0%] text-left pl-[25%]"
						>
							{content.session[4].list[1]}
						</p>
					</li>

					<li className="w-[80%] bg-[#59ACFF] self-start">
						<p
							className="w-full px-[2rem] py-[1.5rem] font-atkinson font-normal text-[clamp(1.25rem,2vw,2.5rem)] leading-[1.2] tracking-[0%] text-right pr-[10%]"
						>
							{content.session[4].list[2]}
						</p>
					</li>
				</ul>

				<div className="w-[90%] max-w-[1100px] mx-auto mt-[1.5rem]">
					<p
						className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] text-justify"
					>
						{content.session[4].text[2]}
					</p>
				</div>
			</section>

			{/* <Divider /> */}

			<References references={content.references} />
		</div>
	);
};

export default ConhecendoPage;