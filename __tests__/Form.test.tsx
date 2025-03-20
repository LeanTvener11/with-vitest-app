import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { server } from './mswSetup'
import { rest } from 'msw'
import Form from '../app/Components/Form/Form'
import { mockFormProps } from '../app/Components/Form/Form.mock'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Form Component', () => {
  const setup = () => {
    render(<Form {...mockFormProps} />)
    const nameInput = screen.getByPlaceholderText(mockFormProps.namePlaceholder)
    const emailInput = screen.getByPlaceholderText(mockFormProps.emailPlaceholder)
    const submitButton = screen.getByText(mockFormProps.buttonLabel)
    return { nameInput, emailInput, submitButton }
  }

  test('renders form elements correctly', () => {
    const { nameInput, emailInput, submitButton } = setup()
    
    expect(screen.getByText(mockFormProps.headline)).toBeInTheDocument()
    expect(screen.getByText(mockFormProps.text)).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })


  test('successfully submits form with valid data', async () => {
    const { nameInput, emailInput, submitButton } = setup()
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      // Check if the form status changed to success
      expect(screen.queryByText(mockFormProps.nameErrorText)).not.toBeInTheDocument()
      expect(screen.queryByText(mockFormProps.emailErrorText)).not.toBeInTheDocument()
    })
  })

}) 