import { useState, useEffect } from 'react';
import CarouselStep from '@components/MateCarousel/CarouselStep.jsx';
import '@styles/MateCarousel.css';

const steps = [
  {
    title: 'Preparación',
    desc: 'Calentar el agua a 75-80°C (nunca uses agua hirviendo).',
    src: '/mate-prep-1.webp',
    step: 1,
  },
  { title: 'Yerba', desc: 'Llena el mate con yerba hasta 3/4 de su capacidad.', src: '/mate-prep-2.webp', step: 2 },
  { title: 'Agitar', desc: 'Tapar con una mano y agitar por unos segundos.', src: '/mate-prep-3.webp', step: 3 },
  { title: 'Posicionar', desc: 'Ladear la yerba en un costado del mate.', src: '/mate-prep-4.webp', step: 4 },
  {
    title: 'Bombilla',
    desc: 'Colocar la bombilla en la parte menos cargada del mate.',
    src: '/mate-prep-5.webp',
    step: 5,
  },
  { title: 'Cebar', desc: 'Verter el agua del lado de la bombilla.', src: '/mate-prep-6.webp', step: 6 },
  {
    title: 'Mate Dulce (opcional)',
    desc: 'Agregar el endulzante de tu preferencia del lado de la bombilla.',
    src: '/mate-prep-7.webp',
    step: 7,
  },
];

const MateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const movePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const moveNext = () => {
    if (currentIndex < steps.length - itemsPerPage) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') return currentIndex <= 0;
    if (direction === 'next') return currentIndex >= steps.length - itemsPerPage;
    return false;
  };

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerPage(3);
      else if (width >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const progressPercentage = ((currentIndex + itemsPerPage) / steps.length) * 100;

  return (
    <section id="ritual" className="py-20 max-w-[92%] sm:max-w-[80%] mx-auto">
      <div className="container mx-auto relative">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">El Ritual del Mate</h2>
        <p
          className="text-sm md:text-base mb-5 bg-green-50 py-4 px-6 text-left rounded-md shadow-md border-l-4 border-green-600"
        >
          El mate no solo es una bebida, sino un ritual que refleja la hospitalidad y la
          conexión entre las personas, considerado un acto de unión social.
        </p>


        <div className="relative flex items-center">
          {/* Previous Button */}
          <button
            onClick={movePrev}
            className={`absolute left-0 z-10 p-3 bg-white rounded-full shadow-lg ${
              isDisabled('prev') ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-100'
            }`}
            disabled={isDisabled('prev')}
          >
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M11 17a1 1 0 01-.707-.293l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L7.414 10l4.293 4.293A1 1 0 0111 17z"/>
            </svg>
          </button>

          {/* Carousel */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full px-2"
                  style={{ flexBasis: `${100 / itemsPerPage}%` }}
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
            className={`absolute right-0 z-10 p-3 bg-white rounded-full shadow-lg ${
              isDisabled('next') ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-100'
            }`}
            disabled={isDisabled('next')}
          >
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9 17a1 1 0 01-.707-1.707L12.586 10 8.293 5.707A1 1 0 119.707 4.293l5 5a1 1 0 010 1.414l-5 5A1 1 0 019 17z"/>
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 h-3 w-full bg-gray-300 rounded-full">
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default MateCarousel;
