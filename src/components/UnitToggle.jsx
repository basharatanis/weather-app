export function UnitToggle({ unit, setUnit }) {
  const isCelsius = unit === 'C'

  return (
    <div className="unit-toggle flex items-center justify-center gap-4">
      <span className="text-sm font-medium unit-label">
        Fahrenheit
      </span>

      <label className="toggle">
        <input
          type="checkbox"
          aria-label={`Switch to ${isCelsius ? 'Fahrenheit' : 'Celsius'}`}
          checked={isCelsius}
          onChange={() => setUnit(isCelsius ? 'F' : 'C')}
        />
        <span className="slider" />
      </label>

      <span className="text-sm font-medium unit-label">
        Celsius
      </span>
    </div>
  )
}
