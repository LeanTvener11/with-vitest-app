'use client';
import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  image: string;
  headline: string;
  linkUrl: string;
  linkText: string;
}

const Hero: FC<HeroProps> = ({ image, headline, linkUrl, linkText }) => {
  const [buttonTextIndex, setButtonTextIndex] = useState(0);

  const buttonTexts = ["Get Started", "Aaaaaaawww", "Dont Press that hard", "No thanks", "Oh great now Im broken"];

  return (
    <div className="relative w-full h-[500px]" data-testid="hero">
      {image && <Image
        src={image}
        alt={headline}
        fill
        className="object-cover"
        priority
      />}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
        {headline &&
        <h1 className="text-4xl font-bold mb-6 text-center px-4">
          {headline}
        </h1>
        }
        {linkUrl && linkText &&
          <button
            onClick={() => setButtonTextIndex((prevIndex) => Math.min(prevIndex + 1, buttonTexts.length - 1))}
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {buttonTexts[buttonTextIndex]}
          </button>
        }
      </div>
    </div>
  );
};

export default Hero;

