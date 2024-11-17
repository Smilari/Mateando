import React, { useState, useEffect, useRef } from 'react';
import MateStep from './MateStep.jsx';

const steps = [
  { title: 'Preparación', desc: 'Llena el mate con yerba hasta 3/4 de su capacidad.', image: '/mate-prep-1.png', step: 1 },
  { title: 'Temperatura', desc: 'Calienta el agua a 70-80°C, nunca uses agua hirviendo.', image: '/mate-prep-1.png', step: 2 },
  { title: 'Cebar', desc: 'Vierte el agua cuidadosamente en el mismo lugar.', image: '/mate-prep-1.png', step: 3 },
  { title: 'Compartir', desc: 'Pasa el mate y disfruta de la compañía.', image: '/mate-prep-1.png', step: 4 }
];

const MateRitual = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const stepsContainerRef = useRef(null);
  const progressIndicatorRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      if (stepsContainerRef.current && progressIndicatorRef.current) {
        const scrollPosition = stepsContainerRef.current.scrollLeft;
        const maxScroll = stepsContainerRef.current.scrollWidth - stepsContainerRef.current.clientWidth;
        const progress = (scrollPosition / maxScroll) * 100;
        progressIndicatorRef.current.style.width = `${progress}%`;
      }
    };

    const container = stepsContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateProgress);
      return () => container.removeEventListener('scroll', updateProgress);
    }
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, steps.length - (isDesktop ? 3 : 1)));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-beige-100 to-beige-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-brown-800">El Ritual del Mate</h2>
        <div className="mate-ritual-container relative">
          <div ref={stepsContainerRef} className="mate-steps-container overflow-x-auto pb-8 scrollbar-hide">
            <div
              className="mate-steps flex space-x-4 md:space-x-8 transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * (100 / (isDesktop ? 3 : 1))}%)` }}
            >
              {steps.map((step, index) => (
                <div key={index} className={`mate-step flex-shrink-0 ${isDesktop ? 'w-1/3' : 'w-full'}`}>
                  <MateStep title={step.title} description={step.desc} image={step.image} step={index + 1} />
                </div>
              ))}
            </div>
          </div>
          <div className="mate-progress-bar h-2 bg-green-200 rounded-full mt-4">
            <div
              ref={progressIndicatorRef}
              className="progress-indicator h-full bg-green-600 rounded-full transition-all duration-300 ease-out"
            ></div>
          </div>
          {isDesktop && (
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrev}
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300"
                disabled={currentIndex === 0}
              >
                Anterior
              </button>
              <button
                onClick={handleNext}
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300"
                disabled={currentIndex === steps.length - 3}
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MateRitual;
