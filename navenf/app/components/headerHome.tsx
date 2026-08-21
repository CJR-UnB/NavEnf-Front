'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const img1 = '/assets/header/home/01.png';
const img2 = '/assets/header/home/02.png';
const img3 = '/assets/header/home/03.png';
const img4 = '/assets/header/home/04.png';
const img5 = '/assets/header/home/05.png';
const img6 = '/assets/header/home/06.png';
const img7 = '/assets/header/home/07.png';

const images = [img1, img2, img3, img4, img5, img6, img7];

const imgMascara = '/assets/header/home/mascara.png';

export default function HeaderHome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Funções de Navegação
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Loop Automático (5 segundos)
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);


  // --- Funções de Toque (Swipe) ---
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div 
      className="relative w-full h-[300px] md:h-[800px] group overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Imagem do Carrossel */}
      <div className="w-full h-full relative">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          style={{ objectFit: 'cover' }}
          priority={currentIndex === 0}
        />
        
        {/* <div className="absolute inset-0 bg-black/30"></div> MASCARA ESCURA */}

      </div>

      {/* 2. Máscara Translúcida Fixa (Fica por cima) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Image
            src={imgMascara}
            alt="Máscara de sobreposição"
            fill
            style={{ objectFit: 'cover' }} 
            className="opacity-90" // Você pode ajustar a opacidade aqui caso precise
            priority
          />
        </div>

      { images.length > 1 && (

        <>

      {/* Seta Esquerda */}
      <div 
        className="hidden md:block absolute top-[50%] -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-[#F2A900] text-[#003366] cursor-pointer hover:bg-[#003366] hover:text-[#F2A900] transition-colors z-10" 
        onClick={prevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>

      {/* Seta Direita */}
      <div 
        className="hidden md:block absolute top-[50%] -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-[#F2A900] text-[#003366] cursor-pointer hover:bg-[#003366] hover:text-[#F2A900] transition-colors z-10" 
        onClick={nextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>

      {/* Bolinhas */}
      <div className="absolute bottom-4 right-0 left-0 flex justify-center gap-2 z-10">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`transition-all w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === slideIndex ? 'bg-[#F2A900] scale-125' : 'bg-white/70'
            }`}
          ></div>
        ))}
      </div>
      </>

      )}
      
    </div>
  );
}

// import HeaderHome from '../components/header_home';

// export default function Home() {
//   return (
//     <main>
//       <HeaderHome />
//     </main>
//   );
// }