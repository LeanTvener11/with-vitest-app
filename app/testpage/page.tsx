import Hero from '../Components/Hero/Hero';
import TextImage from '../Components/TextImage/TextImage';
import NavigationCards from '../Components/NavigationCards/NavigationCards';
import Form from '../Components/Form/Form';
import { mockFormProps } from '../Components/Form/Form.mock';
import { mockHeroProps } from '../Components/Hero/Hero.mock';
import { mockTextImageProps } from '../Components/TextImage/TextImage.mock';
import { mockNavigationCardsProps } from '../Components/NavigationCards/NavigationCards.mock';
import ImageWithLink from '../Components/ImageWithLink/ImageWithLink';
import { mockImageWithLinkProps } from '../Components/ImageWithLink/ImageWithLink.mock';

export default function TestPage() {


  return (
    <div className="flex flex-col gap-16">
      <Hero
        {...mockHeroProps}
      />

      <div className="container mx-auto px-4 ">
        <TextImage
          {...mockTextImageProps}
        />

        <div className="my-16">
          <NavigationCards
            cards ={mockNavigationCardsProps.cards}
          />
        </div>

        <div className="max-w-md mx-auto mb-16">
          <Form
            {...mockFormProps}
          />
        </div>
        <div className="container mx-auto px-4">
          <ImageWithLink
            {...mockImageWithLinkProps}
          />
        </div>
      </div>
    </div>
  );
}
