import { it, expect } from 'vitest'
import feedback from './feedback'

//in the terminal run:   npx vitest -no-watch --coverage
it('should return feedback', () => {
    expect(feedback('feedback')).toBe('your doing great')
})