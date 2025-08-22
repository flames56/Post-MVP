import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    // Mock the fetch call
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ status: 'ok' }),
      } as Response)
    )
  })

  it('renders the app title', () => {
    render(<App />)
    expect(screen.getByText('DFARS Platform')).toBeInTheDocument()
  })

  it('displays API status when healthy', async () => {
    render(<App />)
    expect(await screen.findByText('API Status: ok')).toBeInTheDocument()
  })
})
