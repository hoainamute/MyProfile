type GeoLocationResult = {
  displayName: string
  city?: string
  country?: string
}

const getBrowserCoords = (): Promise<{ lat: number; lon: number }> =>
  new Promise((resolve, reject) => {
    if (!('geolocation' in navigator)) {
      reject(new Error('Geolocation is not supported'))
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      (err) => reject(err),
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 60_000 },
    )
  })

export const fetchAutoLocation = async (): Promise<GeoLocationResult> => {
  const { lat, lon } = await getBrowserCoords()

  // Nominatim reverse geocoding (free). Dùng nhẹ, tránh gọi liên tục.
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(
    lat,
  )}&lon=${encodeURIComponent(lon)}`

  const res = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  })

  if (!res.ok) throw new Error(`Reverse geocode failed: ${res.status}`)

  const data = await res.json()
  const address = data?.address || {}

  const city =
    address.city || address.town || address.village || address.suburb || address.county
  const country = address.country

  const displayName =
    [city, country].filter(Boolean).join(', ') || data?.display_name || 'Unknown location'

  return { displayName, city, country }
}