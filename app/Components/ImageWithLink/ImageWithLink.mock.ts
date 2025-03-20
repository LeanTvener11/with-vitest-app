import { ImageWithLinkProps } from './ImageWithLink';

export const mockImageWithLinkProps: ImageWithLinkProps = {
  image: {
    src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
    alt: 'A beautiful landscape',
    width: 1200,
    height: 800
  },
  linkUrl: '/destination',
  linkText: 'Explore Now',
  creditText: 'Photo by John Doe'
};

export const mockImageWithLinkPropsAlternate: ImageWithLinkProps = {
  image: {
    src: 'https://images.unsplash.com/photo-1523978591478-c753949ff840',
    alt: 'Mountain vista',
    width: 1600,
    height: 900
  },
  linkUrl: '/mountains',
  linkText: 'View Mountains',
  creditText: 'Photo by Jane Smith'
};
