<<<<<<< HEAD:navenf/components/References.tsx

const References = ({ references }) => {
	return (
		<div className="mx-auto w-full max-w-[1000px] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
			<div>
				<h2 className="mb-12 text-center font-['Castoro'] text-[30px] font-normal leading-[1.15] tracking-normal sm:mb-14 sm:text-[36px] md:mb-16 md:text-[42px] lg:text-[48px]">
					REFERÊNCIAS:
				</h2>
=======
import Divider from './Divider';
interface Reference {
    id: number;
    text: string;
}
>>>>>>> origin/feature/references:navenf/app/components/References.tsx

interface ReferencesProps {
    references: Reference[];
}

const References = ({ references }: ReferencesProps) => {
    return (
        <div className="mx-auto w-full max-w-[1000px] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
			<div>
                <h2 className="mb-12 text-center font-cal text-[30px] font-normal leading-none tracking-normal sm:mb-14 sm:text-[34px] md:mb-16 md:text-[38px] lg:text-[40px]">
                    REFERÊNCIAS:
                </h2>

                <ol className="list-decimal space-y-5 pl-7 sm:space-y-6 sm:pl-8 md:space-y-7 lg:space-y-8">
                    {references.map((reference) => (
                        <li
                            key={reference.id}
                            className="break-words pl-2 font-atkinson text-[20px] font-normal leading-none tracking-normal text-justify sm:pl-3"
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