import { useState, useRef, useEffect } from 'react';
import CarouselStep from './CarouselStep.jsx';
import '@styles/MateCarousel.css';

const steps = [
  { title: 'Preparación', desc: 'Calentar el agua a 75-80°C (nunca uses agua hirviendo).', src: '/mate-prep-1.webp', step: 1 },
  { title: 'Yerba', desc: 'Llena el mate con yerba hasta 3/4 de su capacidad.', src: '/mate-prep-2.webp', step: 2 },
  { title: 'Agitar', desc: 'Tapar con una mano y agitar por unos segundos.', src: '/mate-prep-3.webp', step: 3 },
  { title: 'Posicionar', desc: 'Ladear la yerba en un costado del mate.', src: '/mate-prep-4.webp', step: 4 },
  { title: 'Bombilla', desc: 'Colocar la bombilla en la parte menos cargada del mate.', src: '/mate-prep-5.webp', step: 5 },
  { title: 'Cebar', desc: 'Verter el agua del lado de la bombilla.', src: '/mate-prep-6.webp', step: 6 },
  { title: 'Mate Dulce (opcional)', desc: 'Agregar azúcar del lado de la bombilla.', src: '/mate-prep-7.webp', step: 7 },
  { title: 'Compartir', desc: 'Compartir el mate con tus amigos y familiares.', src: '/mate-prep-2.webp', step: 8 },
];

const MateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = useRef(3);

  const movePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const moveNext = () => {
    if (currentIndex < steps.length - itemsPerPage.current) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') return currentIndex <= 0;
    if (direction === 'next') return currentIndex >= steps.length - itemsPerPage.current;
    return false;
  };

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) itemsPerPage.current = 3;
      else if (width >= 768) itemsPerPage.current = 2;
      else itemsPerPage.current = 1;
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  return (
    <section className="py-20 px-6 w-full sm:max-w-[80%] mx-auto">
      <div className="container mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-brown-800">El Ritual del Mate</h2>

        <div className="relative flex items-center">
          {/* Previous Button */}
          <button
            onClick={movePrev}
            className={`absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg ${
              isDisabled('prev') ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-100'
            }`}
            disabled={isDisabled('prev')}
          >
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 17a1 1 0 01-.707-.293l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L7.414 10l4.293 4.293A1 1 0 0111 17z" />
            </svg>
          </button>

          {/* Carousel */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage.current)}%)` }}
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full px-2"
                  style={{ flexBasis: `${100 / itemsPerPage.current}%` }}
                >
                  <CarouselStep
                    title={step.title}
                    description={step.desc}
                    src={step.src}
                    step={step.step}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={moveNext}
            className={`absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg ${
              isDisabled('next') ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-100'
            }`}
            disabled={isDisabled('next')}
          >
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 17a1 1 0 01-.707-1.707L12.586 10 8.293 5.707A1 1 0 119.707 4.293l5 5a1 1 0 010 1.414l-5 5A1 1 0 019 17z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MateCarousel;

