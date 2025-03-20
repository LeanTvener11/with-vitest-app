import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface TextImageProps {
  text: string;
  linkUrl: string;
  linkText: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  reverse?: boolean;
}

const TextImage: FC<TextImageProps> = ({ text, linkUrl, linkText, image, reverse = false }) => {
  return (
    <div className={`flex flex-row items-center gap-8 ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="flex-1">
        <div className="flex flex-col gap-6">
          <p className="text-lg">{text}</p>
          <Link
            href={linkUrl}
            className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors w-fit"
          >
            {linkText}
          </Link>
        </div>
      </div>
      <div className="flex-1 relative h-[400px]">
        <Image
          {...image}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default TextImage;
