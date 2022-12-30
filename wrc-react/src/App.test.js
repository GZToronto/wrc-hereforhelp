import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const basicQuery = screen.getByText(/WRC/i)
  expect(basicQuery).toBeInTheDocument()
})
