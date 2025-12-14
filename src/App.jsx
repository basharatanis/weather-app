import { useWeather } from './hooks/useWeather'
import { SearchBar } from './components/SearchBar'
import { CurrentWeather } from './components/CurrentWeather'
import { ForecastList } from './components/ForecastList'
import { UnitToggle } from './components/UnitToggle'

export default function App() {
  const weather = useWeather()

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6">
      <SearchBar
        zip={weather.zip}
        setZip={weather.setZip}
        onSearch={weather.search}
      />

      {weather.loading && <p>Loading...</p>}
      {weather.error && <p className="text-red-500">{weather.error}</p>}

      {weather.data && (
        <>
          <CurrentWeather
            location={weather.data.location}
            temp={weather.data.current.temp}
            code={weather.data.current.code}
            unit={weather.unit}
          />

          <ForecastList days={weather.data.forecast} unit={weather.unit} />

          <UnitToggle
            unit={weather.unit}
            setUnit={weather.setUnit}
          />
        </>
      )}
    </div>
  )
}
