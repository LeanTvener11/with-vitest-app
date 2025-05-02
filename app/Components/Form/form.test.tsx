import { render, screen } from '@testing-library/react'
import Form from './Form'
import { mockFormProps, mockFormInputs } from './Form.mock'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { server } from '../../../__tests__/mswSetup'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Form', () => {
  it('renders the form', () => {
    render(<Form {...mockFormProps} />)
    expect(screen.getByText(mockFormProps.headline)).toBeInTheDocument()
  })
})

describe('Form Inputs', () => {
  it.todo('validates inputs correctly', async () => {
    const user = userEvent.setup()
    render(<Form {...mockFormProps} />)

      // Fill in valid inputs
    const nameInput = screen.getByPlaceholderText(mockFormProps.namePlaceholder)
    await user.type(nameInput, mockFormInputs.validInputs.name)
    const emailInput = screen.getByPlaceholderText(mockFormProps.emailPlaceholder)
    await user.type(emailInput, mockFormInputs.validInputs.email)

    // Submit the form
    const submitButton = screen.getByRole('button', { name: mockFormProps.buttonLabel })
    await user.click(submitButton)

    // Check for success message or redirection (if applicable)
    expect(await screen.findByText(mockFormProps.successMessage)).toBeVisible()
  })
    
    it.todo("handles errors from server correctly", async () => {
        //overwrite the success handler
        // server.use(

        // )

        const user = userEvent.setup()
        render(<Form {...mockFormProps} />)

        const nameInput = screen.getByPlaceholderText(mockFormProps.namePlaceholder)
        await user.type(nameInput, mockFormInputs.validInputs.name)

        const emailInput = screen.getByPlaceholderText(mockFormProps.emailPlaceholder)
        await user.type(emailInput, mockFormInputs.validInputs.email)

        const submitButton = screen.getByRole('button', { name: mockFormProps.buttonLabel })
        await user.click(submitButton)

        expect(await screen.findByText(mockFormProps.errorMessage)).toBeVisible()
    })
})

//Here is some help with the error handling to overwrite the success handler
        //     http.post('https://api.example.com/data', async () => {
        //     // Simulate successful response
        //     return HttpResponse.json({
        //     success: false,
        //     message: 'server error',
        //     },
        //     { status: 500 }
        //     )
        // })