import { References } from '@/components';
import Divider from '@/components/Divider';
import Image from 'next/image';
import content from './content';

const stepImageDimensions: Record<string, { width: number; height: number }> = {
    menina1: { width: 1155, height: 280 },
    menina2: { width: 1183, height: 394 },
    menina3: { width: 1214, height: 482 },
    menina4: { width: 1232, height: 423 },
    menina5: { width: 1217, height: 392 },
    menina6: { width: 1099, height: 515 },
    menina7: { width: 1183, height: 527 },
    menino1: { width: 1200, height: 347 },
    menino2: { width: 1194, height: 364 },
    menino3: { width: 1200, height: 280 },
    menino4: { width: 1200, height: 280 },
    menino5: { width: 1564, height: 240 },
    menino6: { width: 1200, height: 280 },
    menino7: { width: 1200, height: 280 },
};

export default function CateterismoPage() {
    return (
        <main className="w-full">


            <section
                id="hcndia"
                className="w-full bg-gradient-to-b from-[#006633] to-[#003366] py-16 sm:py-24 px-6 md:px-12 flex items-center justify-center"
            >
                <div className="max-w-[900px] mx-auto">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-calsans text-center leading-tight">
                        {content.title}
                    </h1>
                </div>
            </section>

            <div className="w-full bg-white h-8 md:h-12" />

            <section className="w-full bg-[#003366]">
                <div className="w-[90%] max-w-[1100px] mx-auto py-[4rem]">

                    <h2 className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center text-white mb-[1.5rem]">
                        {content.session[0].title}
                    </h2>

                    <div className="mt-[3rem]">
                        {content.session[0].text.map((text, index) => (
                            <p
                                key={index}
                                className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify text-white mb-[1.5rem]"
                            >
                                {Array.isArray(text) ? (
                                    <>
                                        {text[0]}
                                        <sup>{text[1]}</sup>
                                    </>
                                ) : (
                                    text
                                )}
                            </p>
                        ))}
                    </div>

                </div>
            </section>


            <section className="w-full bg-white pt-8 md:pt-12">

                <div className="w-full bg-[#80D960] mb-[3rem]">
                    <div className="w-[90%] max-w-[1100px] mx-auto py-[1rem]">
                        <h2
                            className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center"
                        >
                            {content.session[1].title}
                        </h2>
                    </div>
                </div>

                <div className="w-[90%] max-w-[1100px] mx-auto mb-[4rem]">

                    <div className="w-full flex flex-col gap-[4rem]">

                        {content.session[1].list.map((item) => (
                            <div
                                key={item.id}
                                className="w-full"
                            >

                                <div className="w-full">
                                    <p
                                        className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                                    >
                                        <strong
                                            className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-bold leading-[1.35] tracking-[0%]"
                                        >
                                            {item.id}. {item.title}
                                        </strong>{' '}
                                        {item.text}
                                    </p>
                                </div>

                                <div className="w-full flex justify-center items-center mt-[2rem]">
                                    <div className="relative w-full">
                                        <Image
                                            src={`/assets/${item.img}.svg`}
                                            alt={item.title}
                                            width={stepImageDimensions[item.img]?.width ?? 1000}
                                            height={stepImageDimensions[item.img]?.height ?? 1000}
                                            className="w-full h-auto"
                                        />
                                        <span className="absolute -top-2 -right-4 text-xl font-bold text-black">*</span>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            <Divider className="my-8 md:my-12" />

            <section className="w-full bg-white">

                <div className="w-full bg-[#529FED] mb-[3rem]">
                    <div className="w-[90%] max-w-[1100px] mx-auto py-[1rem]">
                        <h2
                            className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center"
                        >
                            {content.session[2].title}
                        </h2>
                    </div>
                </div>

                <div className="w-[90%] max-w-[1100px] mx-auto mb-[4rem]">

                    <div className="w-full flex flex-col gap-[4rem]">

                        {content.session[2].list.map((item) => (
                            <div
                                key={item.id}
                                className="w-full"
                            >

                                <div className="w-full">
                                    <p
                                        className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                                    >
                                        <strong
                                            className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-bold leading-[1.35] tracking-[0%]"
                                        >
                                            {item.id}. {item.title}
                                        </strong>{' '}
                                        {item.text}
                                    </p>
                                </div>

                                <div className="w-full flex justify-center items-center mt-[2rem]">
                                    <div
                                        className={
                                            item.id === 5
                                                ? 'relative w-[1400px] max-w-[90vw] shrink-0'
                                                : 'relative w-full'
                                        }
                                    >
                                        <Image
                                            src={`/assets/${item.img}.svg`}
                                            alt={item.title}
                                            width={stepImageDimensions[item.img]?.width ?? 1000}
                                            height={stepImageDimensions[item.img]?.height ?? 1000}
                                            className="w-full h-auto"
                                        />
                                        <span className="absolute -top-2 -right-4 text-xl font-bold text-black">*</span>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>


            <section className="w-full bg-white">
                <div className="w-[90%] max-w-[1100px] mx-auto mb-[4rem]">

                    <div className="w-full rounded-[1rem]">

                        <p
                            className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                        >
                            {content.session[3].text}
                        </p>

                    </div>

                </div>
            </section>

            <Divider className="my-8 md:my-12" />

            <section className="w-full bg-white">
                <div className="w-[90%] max-w-[1100px] mx-auto mb-[4rem]">

                    <References references={content.references} />

                </div>
            </section>

        </main>
    );
}