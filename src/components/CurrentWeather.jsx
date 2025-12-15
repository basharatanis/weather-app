import { getWeatherIcon } from '../utils/weatherIcons'

export function CurrentWeather({ location, temp, code, unit }) {
  return (
    <div
      className="flex items-center justify-between"
      style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}
    >
      <div>
        <p
          className="text-gray-500"
          style={{ marginBottom: '6px', fontSize: '12px' }}
        >
          {(location || '').toUpperCase()}
        </p>
        <h1
          className="font-bold"
          style={{ fontSize: '72px', lineHeight: 1, margin: 0, color: '#4e2c90' }}
        >
          <span className="temp-reading">
            {temp}
            <span className="temp-unit">°{unit}</span>
          </span>
        </h1>
      </div>
      <div
        className="flex-1 flex justify-end text-6xl"
        style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '64px' }}
      >
        {getWeatherIcon(code)}
      </div>
    </div>
  )
}
