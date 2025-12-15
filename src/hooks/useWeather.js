import { useState } from 'react'
import { fetchWeatherByZip } from '../services/weatherApi'

export function useWeather() {
  const [zip, setZip] = useState('')
  const [unit, setUnit] = useState('F')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchAndSet = async (zipCode, tempUnit) => {
    try {
      setLoading(true)
      setError(null)
      const result = await fetchWeatherByZip(zipCode, tempUnit)
      setData(result)
    } catch (err) {
      setError(err.message || 'Failed to fetch weather')
    } finally {
      setLoading(false)
    }
  }

  const search = async () => {
    if (!zip) return
    await fetchAndSet(zip, unit)
  }

  const changeUnit = async nextUnit => {
    if (nextUnit === unit) return
    setUnit(nextUnit)
    if (!zip) return
    await fetchAndSet(zip, nextUnit)
  }

  return {
    zip,
    setZip,
    unit,
    setUnit: changeUnit,
    data,
    loading,
    error,
    search,
  }
}
