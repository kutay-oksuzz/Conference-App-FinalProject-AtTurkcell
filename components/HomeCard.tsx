"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  tickColor?: string;
  handleClick?: () => void;
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  tickColor, // Varsayılan renk beyaz olarak belirlendi
  handleClick,
}: HomeCardProps) => {
  return (
    <section
      className={cn(
        "relative bg-[#36363A] px-6 py-8 flex flex-col justify-between items-center w-full xl:max-w-[270px] min-h-[340px] rounded-[20px] shadow-lg cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      {/* Pin Section */}
      <div
        className={cn(
          "absolute top-4 left-4 w-11 h-11 rounded-full",
          tickColor
        )}
        // Stil burada inline olarak ayarlandı
      ></div>

      {/* Icon Section */}
      <div className="flex items-center justify-center bg-white bg-opacity-10 rounded-full w-16 h-16 mt-4">
        <Image src={img} alt="meeting" width={30} height={30} />
      </div>

      {/* Title Section */}
      <div className="flex flex-col items-center text-center gap-2 mt-6">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
      </div>

      {/* Description Section */}
      <div className="flex flex-col items-center text-center gap-4 mt-9">
        <p className="text-md font-light text-gray-300 placeholder-opacity-50">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HomeCard;
