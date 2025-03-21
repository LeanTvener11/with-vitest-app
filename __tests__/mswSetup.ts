import { setupServer } from 'msw/node'
import { rest } from 'msw'

export const handlers = [
  rest.post('https://api.example.com/data', async (req, res, ctx) => {
    // Simulate successful response
    return res(
      ctx.status(200),
      ctx.json({ message: 'Form submitted successfully' })
    )
  }),

]

export const server = setupServer(...handlers)


//response object pokemon
// const pokemonResponse = {
//   "name": "hypno",
//   "weight": 75,
//   "sprites": {
//     "front_default": "testurl.png"
//   }
// }


// Start server before all tests
// beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// // Reset handlers after each test
// afterEach(() => server.resetHandlers())

// // Close server after all tests
// afterAll(() => server.close())
