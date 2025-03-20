import { render, screen } from '@testing-library/react'
import {expect, test } from 'vitest'
import { userEvent } from '@testing-library/user-event'
import ImageWithLink from './ImageWithLink'

test('renders ImageWithLink component', async () => {
    const user = userEvent.setup()
    await render(<ImageWithLink image={{ src: 'https://via.placeholder.com/150', alt: 'Image', width: 150, height: 150 }} linkUrl="https://www.google.com" linkText="Link" creditText="Credit" />)
    await user.click(screen.getByText('Link'))
    expect(screen.getByText('Link')).toBeVisible()
})