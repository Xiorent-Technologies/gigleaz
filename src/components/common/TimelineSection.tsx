import React from 'react';

interface TimelineSectionProps {
  heading: string;
  subHeading: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  listItems: string[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({
  heading,
  subHeading,
  description,
  imageSrc,
  imageAlt = '',
  imagePosition = 'left',
  listItems,
}) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-20 md:mb-24">
      {isImageLeft && (
        <div className="w-full lg:w-1/2">
          <div className="rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-full">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <div className="w-full lg:w-1/2 text-white flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          {heading}
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl text-[#29AB87] font-semibold mb-3 sm:mb-4">
          {subHeading}
        </h3>
        {description && (
          <p className="text-lg sm:text-xl mb-4 sm:mb-6">{description}</p>
        )}
        <ul className="space-y-2 sm:space-y-3">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#29AB87] mr-2 mt-1">•</span>
              <span className="text-sm sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {!isImageLeft && (
        <div className="w-full lg:w-1/2">
          <div className="rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-full">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelineSection;
