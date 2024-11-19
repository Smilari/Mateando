const CarouselStep = ({ title, description, src, step }) => {
  return (
    <div
      className="mate-step bg-slate-50 flex-shrink-0 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
      tabIndex="0"
      aria-label={`Paso ${step}: ${title}. ${description}`}
    >
      <div className="w-full bg-amber-100">
        <img
          src={src}
          alt={`Paso ${step}: ${title}`}
          className="max-w-[333px] mx-auto h-48 object-cover"
          loading="eager"
        />
      </div>
      <div className="p-4 h-32">
        <h3 className="text-xl font-bold text-green-700 mb-2">
          {step}. {title}
        </h3>
        <p className="text-left text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CarouselStep;
