import { getWeatherIcon } from '../utils/weatherIcons'

export function ForecastDay({ day, temp, code, unit }) {
  return (
    <div className="forecast-card flex flex-col items-center gap-2 text-sm">
      <span className="text-xl">{getWeatherIcon(code)}</span>
      <span className="font-medium">
        <span className="temp-reading-sm">
          {temp}
          <span className="temp-unit">°{unit}</span>
        </span>
      </span>
      <span className="day-label text-gray-500">{day}</span>
    </div>
  )
}
