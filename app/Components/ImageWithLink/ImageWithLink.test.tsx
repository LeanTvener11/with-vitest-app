
import { render, screen } from '@testing-library/react';
import ImageWithLink from './ImageWithLink';
import { mockImageWithLinkProps, mockImageWithLinkPropsAlternate } from './ImageWithLink.mock';

describe('ImageWithLink', () => {
  it('renders with all props correctly', () => {
    render(<ImageWithLink {...mockImageWithLinkProps} />);
    
    // Check if image is rendered with correct attributes
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('alt', mockImageWithLinkProps.image.alt);
    
    // Check if link is rendered with correct text and href
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockImageWithLinkProps.linkUrl);
    expect(link).toHaveTextContent(mockImageWithLinkProps.linkText);
    
    // Check if credit text is displayed
    expect(screen.getByText(mockImageWithLinkProps.creditText)).toBeVisible();
  });

  it('renders with alternate props correctly', () => {
    render(<ImageWithLink {...mockImageWithLinkPropsAlternate} />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', mockImageWithLinkPropsAlternate.image.alt);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockImageWithLinkPropsAlternate.linkUrl);
    expect(link).toHaveTextContent(mockImageWithLinkPropsAlternate.linkText);
    
    expect(screen.getByText(mockImageWithLinkPropsAlternate.creditText)).toBeVisible();
  });

  it('fails gracefully when no props are provided', () => {
    // Suppress console errors for this test as we expect errors
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => {
      // @ts-ignore - intentionally passing no props
      render(<ImageWithLink />);
    }).toThrow();

    consoleSpy.mockRestore();
  });
});
