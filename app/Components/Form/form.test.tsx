import { render, screen } from '@testing-library/react'
import Form from './Form'
import { mockFormProps, mockFormInputs } from './Form.mock'
import userEvent from '@testing-library/user-event'


describe('Form', () => {
  it('renders the form', () => {
    render(<Form {...mockFormProps} />)
    expect(screen.getByText(mockFormProps.headline)).toBeInTheDocument()
  })
})

describe('Form Inputs', () => {
  it('validates inputs correctly', async () => {
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
})
