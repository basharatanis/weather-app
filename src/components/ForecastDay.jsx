import { getWeatherIcon } from '../utils/weatherIcons'

export function ForecastDay({ day, temp, code, unit }) {
  return (
    <div className="flex flex-col items-center gap-1 text-sm">
      <span className="text-gray-500">{day}</span>
      <span className="text-xl">{getWeatherIcon(code)}</span>
      <span className="font-medium">{temp}°{unit}</span>
    </div>
  )
}
