import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('https://api.example.com/data', async () => {
    // Simulate successful response
    return HttpResponse.json({
      success: true,
      message: 'Data received successfully',
    },
    { status: 200 }
    )
  })
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


