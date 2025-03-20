import { it, expect } from 'vitest'
import feedback from './feedback'


it('should return feedback', () => {
    expect(feedback('feedback')).toBe('your doing great')
})