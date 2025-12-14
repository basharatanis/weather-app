import { getWeatherIcon } from '../utils/weatherIcons'

export function CurrentWeather({ location, temp, code, unit }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">{location}</p>
        <h1 className="text-6xl font-bold">
          {temp}°{unit}
        </h1>
      </div>
      <div className="text-5xl">
        {getWeatherIcon(code)}
      </div>
    </div>
  )
}
