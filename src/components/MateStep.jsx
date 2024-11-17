const MateStep = ({ title, description, image, step }) => {
  return (
    <div
      className="mate-step flex-shrink-0 w-64 md:w-80 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 focus-within:scale-105"
      tabIndex="0"
      aria-label={`Paso ${step}: ${title}. ${description}`}
    >
      <img
        src={image}
        alt={`Paso ${step}: ${title}`}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-green-700 mb-2">
          {step}. {title}
        </h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default MateStep;
