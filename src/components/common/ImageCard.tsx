import React from "react";

interface ImageCardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="flex flex-col justify-end items-start p-4 gap-2 
        w-full max-w-[390px] min-h-[480px] 
        rounded-[10px] border border-white 
        bg-gradient-to-br from-[#d7e1d833] via-[#99aaa033] to-[#193a2e33] 
        backdrop-blur-sm">

      {/* Image */}
      <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-300">
        <img
          src={imageSrc}
          alt="Card"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-white font-poppins font-semibold text-2xl md:text-[32px] leading-snug md:leading-[48px] w-full">
        {title}
      </h2>

      {/* Description */}
      <p className="text-white font-poppins font-normal text-sm md:text-base leading-5 md:leading-6 w-full">
        {description}
      </p>

      {/* Button */}
      <div className="w-full flex justify-center items-center bg-[#29AB87] h-10 rounded-md mt-auto">
        <button className="text-white font-poppins font-bold text-base leading-6 text-center">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
