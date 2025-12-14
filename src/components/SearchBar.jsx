export function SearchBar({ zip, setZip, onSearch }) {
  return (
    <div className="flex gap-2 searchBar">
      <input
        value={zip}
        onChange={e => setZip(e.target.value)}
        placeholder="Zip Code"
        className="flex-1 rounded-lg border px-4 py-2"
      />
      <button onClick={onSearch}>🔍</button>
    </div>
  )
}
