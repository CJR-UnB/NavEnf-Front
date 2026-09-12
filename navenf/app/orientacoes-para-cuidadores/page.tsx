import Image from 'next/image';
import { content } from './content';
import { References } from '../components/index';

export default function OrientacoesPage() {
    return (
        <main className="w-full">

            {/* <h1
                className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center"
            >
                {content.title}
            </h1> */}

            <section className="w-full bg-[#F5AF0A]">
                <div className="w-[90%] max-w-[1100px] mx-auto pt-[4rem] pb-[4rem]">

                    <div>

                        <h2
                            className="font-cal text-[clamp(1.7rem,2.5vw,2.75rem)] font-normal leading-[1.1] text-center mb-[2rem]"
                        >
                            {content.session[0].title}
                        </h2>

                        <h3
                            className="font-cal text-[clamp(1.4rem,2vw,2.25rem)] font-normal leading-[1.2] text-center mb-[2rem]"
                        >
                            {content.session[0].subtitle}
                        </h3>

                        <div className="flex flex-col gap-[1.5rem]">

                            <p
                                className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                            >
                                Você acaba de saber que seu filho tem o diagnóstico de <strong>mielomeningocele (mielo)</strong> e poderá ou pode estar vivendo inúmeros pensamentos e sentimentos como: dúvidas e medos, mas saiba que seu bebê pode ter uma vida cheia de conquistas e muita alegria. Hoje, o conhecimento em saúde avançou muito e existem tratamentos modernos, inclusive antes mesmo de a criança nascer.
                            </p>

                            <p
                                className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify underline"
                            >
                                Aqui trazemos algumas informações para você se preparar e cuidar do seu bebê com <strong>amor e segurança.</strong>
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            <section className="w-full bg-white pt-[4rem] pb-[4rem]">
                <div className="w-[90%] max-w-[1100px] mx-auto mb-[4rem]">

                    <h2
                        className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-[3rem]"
                    >
                        {content.session[1].title}
                    </h2>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">

                        <div className="w-full flex justify-center">

                            <Image
                                src={`/assets/${content.session[1].image}.svg`}
                                alt={content.session[1].title}
                                width={1000}
                                height={1000}
                                className="w-[clamp(280px,38vw,450px)] h-auto"
                            />

                        </div>

                        <div className="w-full flex flex-col gap-[1.5rem]">

                            <p
                                className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                            >
                                A mielo ocorre quando a <strong>coluna vertebral</strong> (tubo neural) do bebê em desenvolvimento <strong>não se fecha completamente durante as primeiras semanas de gravidez.</strong> Cada caso é diferente, e os efeitos da mielo variam de acordo com o tamanho, a localização, o tipo de abertura e os nervos afetados.¹
                            </p>

                            <p
                                className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                            >
                                <strong>O tipo mais comum de mielo detectada durante a gravidez é a mielomeningocele.</strong> Essa forma é chamada de mielo <strong>"aberta"</strong> porque há uma abertura na pele sobre uma bolsa de líquido que contém parte da medula espinhal e dos nervos.
                            </p>

                        </div>

                    </div>

                    <div className="w-full flex flex-col mt-[1.5rem] gap-[1.5rem]">

                        <p
                            className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                        >
                            Essa abertura precisa ser fechada cirurgicamente para proteger a medula espinhal de infecções e danos adicionais. Quando se fala em espinha bífida, geralmente se refere à <strong>mielomeningocele.</strong>1
                        </p>

                        <p
                            className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                        >
                            Existem também tipos menos comuns de mielo que são <strong>fechados</strong> (cobertos pela pele), mas a medula espinhal ainda é afetada. Esses casos geralmente precisam de tratamento, mas nem sempre imediato.1
                        </p>

                        <p
                            className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                        >
                            Na <strong>mielo oculta</strong> existe um pequeno espaço entre os ossos da coluna vertebral, mas este também é coberto pela pele e pela medula espinhal, geralmente não é afetado. Este tipo de anomalia é detectado no período pré-natal e, muitas vezes, não requer tratamento.1
                        </p>

                    </div>

                </div>
            </section>

            <section className="w-full bg-white">
                <div className="w-[90%] max-w-[1100px] mx-auto mb-[4rem]">

                    <h2
                        className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-[3rem]"
                    >
                        {content.session[2].title}
                    </h2>

                    <div className="w-full flex flex-col gap-[3rem]">

                        <div className="w-full grid grid-cols-1 md:grid-cols-[65%_35%] gap-[3rem] items-center">

                            <div className="w-full flex flex-col gap-[1.5rem]">

                                <p
                                    className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                                >
                                    <strong>A mielo pode ocorrer independentemente do que os pais façam antes ou durante a gravidez.</strong> O crescimento de um bebê é um processo complexo com muitas possibilidades de variação.
                                </p>

                                <p
                                    className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                                >
                                    A mielo ocorre devido a uma combinação de fatores genéticos e ambientais por volta da quarta semana de gravidez — antes mesmo de a maioria das mulheres saber que está grávida.
                                </p>

                            </div>

                            <div className="w-full flex justify-center items-center">

                                <Image
                                    src={`/assets/${content.session[2].image[0]}`}
                                    alt={content.session[2].title}
                                    width={1000}
                                    height={1000}
                                    className="w-full max-w-[300px] h-auto"
                                />

                            </div>

                        </div>

                        <div className="w-full grid grid-cols-1 md:grid-cols-[65%_35%] gap-[3rem] items-center">

                            <div className="w-full flex justify-center items-center">

                                <Image
                                    src={`/assets/${content.session[2].image[1]}`}
                                    alt={content.session[2].title}
                                    width={1000}
                                    height={1000}
                                    className="w-full max-w-[300px] h-auto"
                                />

                            </div>

                            <div className="w-full flex flex-col gap-[1.5rem]">

                                <p
                                    className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                                >
                                    Os pesquisadores ainda têm muito a aprender sobre a genética associada à mielo. Tomar ácido fólico (presente na maioria dos multivitamínicos e vitaminas pré-natais) de um a três meses antes da concepção pode ajudar a reduzir a probabilidade de mielo, mas não é totalmente evitável. Ela <strong>não foi causada por nada que você fez ou deixou de fazer.</strong>¹
                                </p>

                            </div>

                        </div>

                        <div className="w-screen relative left-1/2 -translate-x-1/2 flex flex-col">

                            {content.session[2].card.map((text, index) => (
                                <div
                                    key={index}
                                    className={`w-[80%] p-[clamp(1.5rem,3vw,3rem)] ${
                                        index === 0
                                            ? 'self-start bg-[#7ED957]'
                                            : 'self-end bg-[#FFC94D] -mt-[1.5rem]'
                                    }`}
                                >
                                    <p
                                        className={`w-[90%] max-w-[900px] ${
                                            index === 0
                                                ? 'ml-auto mr-[5%]'
                                                : 'ml-[5%]'
                                        } font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify ${
                                            index === 1 ? 'italic' : ''
                                        }`}
                                    >
                                        {text}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </section>

            <section className="w-full bg-[#003366] text-white">
                <div className="w-[90%] max-w-[1100px] mx-auto py-[4rem]">

                    <h2
                        className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-[3rem]"
                    >
                        {content.session[3].title}
                    </h2>

                    <p
                        className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                    >
                        {content.session[3].text}
                    </p>

                </div>
            </section>

            <section className="w-full bg-white py-[4rem]">
                <div className="w-[90%] max-w-[1100px] mx-auto">

                    <h2
                        className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-[3rem]"
                    >
                        {content.session[4].title}
                    </h2>

                    <p
                        className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] mb-[3rem] font-normal leading-[1.35] tracking-[0%] text-justify"
                    >
                        {content.session[4].text}
                    </p>

                    <Image
                        src={`/assets/${content.session[4].image}`}
                        alt={content.session[4].title}
                        width={1000}
                        height={1000}
                        className="w-[clamp(280px,45vw,550px)] h-auto mx-auto mb-[3rem]"
                    />

                </div>
            </section>

            <section className="w-full bg-white my-[4rem]">
                <div className="w-[90%] max-w-[1100px] mx-auto">

                    <h2
                        className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-[3rem]"
                    >
                        {content.session[5].title}
                    </h2>

                    <p
                        className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                    >
                        Um dos maiores avanços da saúde moderna é a cirurgia fetal. Ela é feita geralmente entre a 24ª e a 26ª semana de gestação. O objetivo é fechar a coluna do bebê enquanto ele ainda está na barriga da mãe.
                    </p>

                    <div className="w-full mt-[3rem]">

                        <ul className="w-full flex flex-col gap-[2rem] list-disc pl-[2rem]">

                            <li>

                                <p
                                    className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                                >
                                    <strong>{content.session[5].list[0].title}:</strong> {content.session[5].list[0].text}
                                </p>

                            </li>

                            <li>

                                <p
                                    className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                                >
                                    Se o bebê não puder passar por esse procedimento, a cirurgia será feita logo após o nascimento, nas primeiras 48 horas de vida.
                                </p>

                            </li>

                        </ul>

                    </div>

                </div>
            </section>

            <section className="w-full bg-[#006633]">
                <div className="w-[90%] max-w-[1100px] text-white py-[4rem] mx-auto">

                    <h2
                        className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-[3rem]"
                    >
                        {content.session[6].title}
                    </h2>

                    <p
                        className="font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                    >
                        As crianças com mielo precisam de estímulos desde muito cedo. A fisioterapia é essencial para ajudar no movimento das pernas e no equilíbrio. Além disso, muitas precisam de ajuda médica e de enfermeiros para urinar de forma correta (como o uso de pequenas sondas), <strong>protegendo os rins de infecções.</strong> Com a rotina certa, esses cuidados viram hábitos simples do dia a dia.
                    </p>

                </div>
            </section>

            <section className="w-full bg-white">
                <div className="w-[90%] max-w-[1100px] mx-auto py-[4rem]">

                    <h2
                        className="font-cal text-[clamp(2rem,3vw,3.25rem)] font-normal leading-[1.1] text-center mb-[3rem]"
                    >
                        {content.session[7].title}
                    </h2>

                    <div className="w-full flex flex-col items-center gap-[3rem]">

                        <p
                            className="w-full font-atkinson text-[clamp(1.1rem,1.5vw,1.75rem)] font-normal leading-[1.35] tracking-[0%] text-justify"
                        >
                            {content.session[7].text}
                        </p>

                        <Image
                            src={`/assets/${content.session[7].image}`}
                            alt={content.session[7].title}
                            width={1000}
                            height={1000}
                            className="w-[clamp(280px,45vw,550px)] h-auto"
                        />

                    </div>

                </div>
            </section>

            <References references={content.references} />

        </main>
    );
}