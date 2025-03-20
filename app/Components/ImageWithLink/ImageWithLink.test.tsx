import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { userEvent } from '@testing-library/user-event'


test('renders ImageWithLink component', async () => {
    const mockFunction = vi.fn()
    const user = userEvent.setup()
    //screen.debug()
    await render(<div><button onClick={mockFunction} role="button">Click me</button></div>)
    //screen.debug()
    //screen.logTestingPlaygroundURL()
    await user.click(screen.getByText('Click me'))
    expect(mockFunction).toHaveBeenCalledTimes(1)

})