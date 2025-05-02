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
  }),
  http.get('https://pokeapi.co/api/v2/pokemon/hypno', async () => {
    return HttpResponse.json({
      name: 'hypno',
      weight: 75,
      sprites: {
        front_default: 'testurl.png'
      }
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


