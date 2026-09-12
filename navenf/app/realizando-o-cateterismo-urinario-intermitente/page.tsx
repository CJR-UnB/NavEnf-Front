import { References } from '../components';
import Image from 'next/image';
import content from './content';

export default function CateterismoPage() {
    return (
        <main className="w-full">

            <section className="w-full bg-white">
                <div className="w-[90%] max-w-[1100px] mx-auto mt-[4rem] mb-[4rem]">

                    <h1
                        id="hcndia"
                        className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center"
                    >
                        {content.title}
                    </h1>

                    <div className="mt-[3rem]">
                        {content.session[0].text.map((text, index) => (
                            <p
                                key={index}
                                className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify mb-[1.5rem]"
                            >
                                {text}
                            </p>
                        ))}
                    </div>

                </div>
            </section>


            <section className="w-full bg-white">

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
                                    <Image
                                        src={`/assets/${item.img}.svg`}
                                        alt={item.title}
                                        width={1000}
                                        height={1000}
                                        className="w-[clamp(280px,45vw,550px)] h-auto"
                                    />
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>


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
                                    <Image
                                        src={`/assets/${item.img}.svg`}
                                        alt={item.title}
                                        width={1000}
                                        height={1000}
                                        className="w-[clamp(280px,45vw,550px)] h-auto"
                                    />
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


            <section className="w-full bg-white">
                <div className="w-[90%] max-w-[1100px] mx-auto mb-[4rem]">

                    <References references={content.references} />

                </div>
            </section>

        </main>
    );
}