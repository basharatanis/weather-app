import { ForecastDay } from './ForecastDay'

export function ForecastList({ days, unit }) {
  return (
    <div className="flex justify-between">
      {days.map(day => (
        <ForecastDay key={day.day} {...day} unit={unit} />
      ))}
    </div>
  )
}
