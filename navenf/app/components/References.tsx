const References = ({ references }) => {
	return (
		<div className="mx-auto w-full max-w-[1000px] px-5 sm:px-8 md:px-12">
			{/* <image/> */}

			<div>
				<h2 className="mb-16 text-center font-['Castoro'] text-[30px] font-normal leading-[1.15] tracking-normal sm:text-[36px] md:text-[42px] lg:text-[48px]">
					REFERÊNCIAS:
				</h2>

				<ol className="list-decimal space-y-6 pl-8 sm:space-y-7 md:space-y-8">
					{references.map((reference) => (
						<li
							key={reference.id}
							className="pl-3 font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[19px] md:text-[21px] lg:text-[22px]"
						>
							{reference.text}
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default References;