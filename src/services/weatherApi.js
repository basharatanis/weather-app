const GEOCODE_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast'

export async function fetchWeatherByZip(zip, unit) {
  // Look up lat/lon for the ZIP via Open-Meteo geocoding
  const geoRes = await fetch(
    `${GEOCODE_URL}?name=${encodeURIComponent(zip)}&count=5&language=en&format=json`
  )
  const geoData = await geoRes.json()
    const location =
    geoData.results?.find(place => place.country_code === 'US') ??
    geoData.results?.[0]

  if (!location) {
    throw new Error('Invalid ZIP code')
  }

  const { latitude, longitude, name, admin1 } = location

  // Fetch weather data
  const weatherRes = await fetch(
    `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}` +
      `&current=temperature_2m,weather_code` +
      `&daily=temperature_2m_max,weather_code` +
      `&temperature_unit=${unit === 'F' ? 'fahrenheit' : 'celsius'}` +
      `&timezone=auto`
  )

  const weatherData = await weatherRes.json()

  // Normalize data for UI
  return {
    location: `${name}, ${admin1}`,
    current: {
      temp: Math.round(weatherData.current.temperature_2m),
      code: weatherData.current.weather_code,
    },
    forecast: weatherData.daily.time.slice(0, 5).map((date, i) => ({
      day: new Date(date).toLocaleDateString('en-US', {
        weekday: 'short',
      }),
      temp: Math.round(weatherData.daily.temperature_2m_max[i]),
      code: weatherData.daily.weather_code[i],
    })),
  }
}
