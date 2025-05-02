import { render, screen } from '@testing-library/react'
import DataDisplay from './DataDisplay'
import userEvent from '@testing-library/user-event'
import { server } from '../../../__tests__/mswSetup'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('DataDisplay', () => {
  it('renders the data display component', () => {
    render(<DataDisplay />)
  })
    
    it('displays the pokemon data', async () => {
        const user = userEvent.setup()
        render(<DataDisplay />)

        const button = screen.getByRole("button", { name: "Fetch A pokemon" })
        expect(button).toBeVisible()
        user.click(button)

        const pokemonName = await screen.findByText("hypno")
        expect(pokemonName).toBeVisible()
    })
})