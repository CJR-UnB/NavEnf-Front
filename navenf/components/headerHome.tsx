import Image, { StaticImageData } from 'next/image';

interface HeaderBannerProps {
  imageSrc: string | StaticImageData;
  title?: string;
}

export default function HeaderBanner({ imageSrc, title }: HeaderBannerProps) {
  return (
   <div className="relative w-full h-[200px] md:h-[800px] group overflow-hidden">
      
      <div className="w-full h-full relative">
        <Image
          src={imageSrc}
          alt={title || "Banner da página"}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority 
          sizes="100vw"
        />
      </div>

      {title && (
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-4 z-10">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
}
// import HeaderBanner from '../components/header';

// import bannerImg from '../assets/header/home/Frame 12.png'; 

// export default function PaginaInterna() {
//   return (
//     <main>
//       <HeaderBanner 
//         imageSrc={bannerImg} 
//       />
//     </main>
//   );
// }