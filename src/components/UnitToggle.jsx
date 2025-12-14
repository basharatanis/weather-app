export function UnitToggle({ unit, setUnit }) {
  const isCelsius = unit === 'C'

  return (
    <div className="flex items-center justify-center gap-4">
      <span className="text-sm font-medium" style={{ color: isCelsius ? '#9ca3af' : '#4b5563' }}>
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

      <span className="text-sm font-medium" style={{ color: isCelsius ? '#4b5563' : '#9ca3af' }}>
        Celsius
      </span>
    </div>
  )
}
