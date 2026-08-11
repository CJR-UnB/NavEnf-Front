import { References } from '../components';
import { content } from './content';

const ConhecendoPage = () => {
	return (
		<div className="w-full bg-[#FFECBE] px-5 py-10 text-black sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
			<div className="mx-auto flex w-full max-w-[1000px] flex-col gap-6 md:gap-8">
				<h2 className="text-center font-['Castoro'] text-[30px] font-normal leading-[1.15] tracking-normal sm:text-[36px] md:text-[42px] lg:text-[48px]">
					{content.session[0].title}
				</h2>

				<p className="text-center font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
					{content.session[0].text}
				</p>
			</div>

			<div className="mx-auto mt-16 flex w-full max-w-[1000px] flex-col gap-6 md:mt-20 md:gap-8">
				{/* <image /> */}

				<h2 className="text-center font-['Castoro'] text-[30px] font-normal leading-[1.15] tracking-normal sm:text-[36px] md:text-[42px] lg:text-[48px]">
					{content.session[1].title}
				</h2>

				<p className="text-center font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
					{content.session[1].text}
				</p>
			</div>

			<div className="mx-auto mt-16 flex w-full max-w-[1000px] flex-col gap-6 md:mt-20 md:gap-8">
				<h2 className="text-center font-['Castoro'] text-[30px] font-normal leading-[1.15] tracking-normal sm:text-[36px] md:text-[42px] lg:text-[48px]">
					{content.session[2].title}
				</h2>

				<p className="text-center font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
					{content.session[2].text[0]}
				</p>

				<p className="text-center font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
					{content.session[2].text[1]}
				</p>
			</div>

			<div className="mx-auto mt-16 flex w-full max-w-[1000px] flex-col gap-6 md:mt-20 md:gap-8">
				<h2 className="text-center font-['Castoro'] text-[30px] font-normal leading-[1.15] tracking-normal sm:text-[36px] md:text-[42px] lg:text-[48px]">
					{content.session[3].title}
				</h2>

				<p className="text-center font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
					{content.session[3].text}
				</p>

				<ul className="mx-auto max-w-[900px] list-disc pl-6 text-left font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
					{content.session[3].list.map((item) => (
						<li key={item.id} className="mb-4">
							<b>{item.title}:</b> {item.text}
						</li>
					))}
				</ul>
			</div>

			<div className="mx-auto mt-16 flex w-full max-w-[1000px] flex-col gap-6 md:mt-20 md:gap-8">
				<h2 className="text-center font-['Castoro'] text-[30px] font-normal leading-[1.15] tracking-normal sm:text-[36px] md:text-[42px] lg:text-[48px]">
					{content.session[4].title}
				</h2>

				<p className="text-center font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
					{content.session[4].text}
				</p>

				<p className="text-center font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
					{content.session[4].text2}
				</p>

				<ul className="mx-auto max-w-[900px] list-disc pl-6 text-left font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
					{content.session[4].list.map((item) => (
						<li key={item.id} className="mb-3">
							{item.text}
						</li>
					))}
				</ul>

				{/* <image></image> */}
			</div>

			<References references={content.references} />
		</div>
	);
};

export default ConhecendoPage;