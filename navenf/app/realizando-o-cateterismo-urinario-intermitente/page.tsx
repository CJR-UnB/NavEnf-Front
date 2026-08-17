import { References } from '@/components';
import content from './content';

const CateterismoPage = () => {
    return (
        <div className="w-full bg-[#FFECBE] px-5 py-10 text-black sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-6 md:gap-8">
                <h2 className="text-center font-['Castoro'] text-[30px] font-normal leading-[1.15] tracking-normal sm:text-[36px] md:text-[42px] lg:text-[48px]">
                    {content.title}
                </h2>
            </div>

            <div className="mx-auto mt-16 flex w-full max-w-[1000px] flex-col gap-6 md:mt-20 md:gap-8">
                <p className="text-center font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
                    {content.session[0].text}
                    {content.session[0].textRef && (
                        <sup className="text-[12px] sm:text-[14px]">{content.session[0].textRef}</sup>
                    )}
                </p>    

                <p className="text-center font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
                    {content.session[0].text}
                </p>

                <p className="text-center font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
                    {content.session[0].text2}
                </p>

                <p className="text-center font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
                    {content.session[0].text3}
                </p>
            </div>

            <div className="mx-auto mt-16 flex w-full max-w-[1000px] flex-col gap-6 md:mt-20 md:gap-8">
                {/* <image /> */}

                <h2 className="text-center font-['Castoro'] text-[30px] font-normal leading-[1.15] tracking-normal sm:text-[36px] md:text-[42px] lg:text-[48px]">
                    {content.session[1].title}
                </h2>

                <ol className="list-decimal space-y-5 pl-7 marker:font-bold sm:space-y-6 sm:pl-8 md:space-y-7 lg:space-y-8">                    {content.session[1].list.map((item) => (
                        <li key={item.id} className="mb-4">
                            <b>{item.title}</b> {item.text}
                        </li>
                    ))}
                </ol>
            </div>

            <div className="mx-auto mt-16 flex w-full max-w-[1000px] flex-col gap-6 md:mt-20 md:gap-8">
                <h2 className="text-center font-['Castoro'] text-[30px] font-normal leading-[1.15] tracking-normal sm:text-[36px] md:text-[42px] lg:text-[48px]">
                    {content.session[2].title}
                </h2>

                <ol className="list-decimal space-y-5 pl-7 marker:font-bold sm:space-y-6 sm:pl-8 md:space-y-7 lg:space-y-8">
                    {content.session[2].list.map((item) => (
                        <li key={item.id} className="mb-4">
                            <b>{item.title}</b> {item.text}
                        </li>
                    ))}
                </ol>
            </div>

            <div className="mx-auto mt-16 flex w-full max-w-[1000px] flex-col gap-6 md:mt-20 md:gap-8">
                <p className="text-center font-['Atkinson_Hyperlegible'] text-[18px] font-normal leading-[1.5] tracking-normal sm:text-[20px] md:text-[22px] lg:text-[24px]">
                    {content.session[3].text}
                </p>
            </div>

            <References references={content.references} />
        </div>
    );
};

export default CateterismoPage;