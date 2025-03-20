import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { mockHeroProps } from './Hero.mock';


describe('Hero', () => {
  it('renders correctly with all props', () => {
    render(<Hero {...mockHeroProps} />);

    // Check if headline is rendered
    expect(screen.getByText(mockHeroProps.headline)).toBeInTheDocument();

    // Check if link is rendered with correct text and href
    const link = screen.getByText(mockHeroProps.linkText);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', mockHeroProps.linkUrl);

    // Check if image is rendered with correct src
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('renders without crashing when no props are provided', () => {
    render(<Hero />);
    // Component should render without throwing errors
    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });

  it('renders partially with missing props', () => {
    render(
      <Hero 
        headline={mockHeroProps.headline}
        // Omitting image and link props
      />
    );

    // Headline should still be visible
    expect(screen.getByText(mockHeroProps.headline)).toBeInTheDocument();
    
    // Image and link should not be present
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});

