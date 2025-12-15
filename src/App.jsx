import { useWeather } from './hooks/useWeather'
import { SearchBar } from './components/SearchBar'
import { CurrentWeather } from './components/CurrentWeather'
import { ForecastList } from './components/ForecastList'
import { UnitToggle } from './components/UnitToggle'

export default function App() {
  const weather = useWeather()

  return (
    <div className="app-container">
      <SearchBar
        zip={weather.zip}
        setZip={weather.setZip}
        onSearch={weather.search}
      />

      {weather.loading && <p>Loading...</p>}
      {weather.error && <p className="text-red-500">{weather.error}</p>}

      {weather.data && (
        <div className="weather-content">
          <div className="weather-panel">
            <CurrentWeather
              location={weather.data.location}
              temp={weather.data.current.temp}
              code={weather.data.current.code}
              unit={weather.unit}
            />

            <ForecastList days={weather.data.forecast} unit={weather.unit} />
          </div>

          <UnitToggle
            unit={weather.unit}
            setUnit={weather.setUnit}
          />
        </div>
      )}
    </div>
  )
}
