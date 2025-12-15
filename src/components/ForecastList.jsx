import { ForecastDay } from './ForecastDay'

export function ForecastList({ days, unit }) {
  return (
    <div className="forecast-list">
      {days.map(day => (
        <ForecastDay key={day.day} {...day} unit={unit} />
      ))}
    </div>
  )
}
