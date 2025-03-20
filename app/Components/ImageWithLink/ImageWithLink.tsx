import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ImageWithLinkProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  linkUrl: string;
  linkText: string;
  creditText: string;
}

const ImageWithLink: FC<ImageWithLinkProps> = ({ image, linkUrl, linkText, creditText }) => {
  return (
    <div className="relative">
      <Image
        {...image}
        alt={image.alt}
        className="object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Link
          href={linkUrl}
          className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
        >
          {linkText}
        </Link>
      </div>
      <span className="absolute bottom-2 right-2 text-xs text-white opacity-75">
        {creditText}
      </span>
    </div>
  );
};

export default ImageWithLink;
