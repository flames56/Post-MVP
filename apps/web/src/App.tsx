import { useEffect, useState } from 'react'

interface HealthResponse {
  status: string
}

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE}/health`)
        const data = await response.json()
        setHealth(data)
        setError(null)
      } catch (err) {
        setError('Failed to connect to API')
        setHealth(null)
      }
    }

    checkHealth()
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>DFARS Platform</h1>
      <div>
        {health && (
          <p style={{ color: 'green' }}>
            API Status: {health.status}
          </p>
        )}
        {error && (
          <p style={{ color: 'red' }}>
            Error: {error}
          </p>
        )}
      </div>
    </div>
  )
}

export default App
