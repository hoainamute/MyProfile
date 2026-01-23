import { useEffect, useState } from 'react'
import { fetchAutoLocation } from '../services/locationService'

type AutoLocationState = {
  location?: string
  loading: boolean
  error?: string
}

const STORAGE_KEY = 'auto_location_v1'

export const useAutoLocation = (): AutoLocationState => {
  const [state, setState] = useState<AutoLocationState>({ loading: true })

  useEffect(() => {
    const cached = localStorage.getItem(STORAGE_KEY)
    if (cached) {
      setState({ loading: false, location: cached })
      return
    }

    let alive = true

    ;(async () => {
      try {
        const r = await fetchAutoLocation()
        if (!alive) return
        localStorage.setItem(STORAGE_KEY, r.displayName)
        setState({ loading: false, location: r.displayName })
      } catch (e: any) {
        if (!alive) return
        setState({
          loading: false,
          error: e?.message || 'Failed to detect location',
        })
      }
    })()

    return () => {
      alive = false
    }
  }, [])

  return state
}