import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface NavigationCard {
  image: string;
  link: string;
  headline: string;
  text: string;
}

interface NavigationCardsProps {
  cards: NavigationCard[];
}

const NavigationCards: FC<NavigationCardsProps> = ({ cards }) => {

  const displayCards = cards?.length > 0 ? cards.slice(0, 4) : [];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6" data-testid="navigation-cards" >
      {displayCards.length > 0 && cards.map((card, index) => (
        <div 
          data-testid="navigation-card"
          key={index}
          className="rounded-lg overflow-hidden border border-transparent bg-gradient-to-br from-gray-100 to-white hover:from-gray-200 hover:to-gray-100 transition-all shadow-lg"
        >
          <div className="relative h-48 w-full">
            <Image
              src={card.image}
              alt={card.headline}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 relative">
            <h3 className="text-xl font-semibold mb-2">{card.headline}</h3>
            <p className="text-gray-600 mb-12">{card.text}</p>
            <Link
              href={card.link}
              className="absolute bottom-4 right-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavigationCards;
