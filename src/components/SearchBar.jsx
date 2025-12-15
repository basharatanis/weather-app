export function SearchBar({ zip, setZip, onSearch }) {
  return (
    <div className="flex items-center gap-3 searchBar w-full">
      <input
        autoFocus
        value={zip}
        onChange={e => setZip(e.target.value)}
        placeholder="Zip Code"
        className="flex-1 rounded-lg border text-base search-input"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault()
            onSearch()
          }
        }}
      />
      <button
        className="flex-shrink-0 rounded-lg px-5 py-3 bg-purple-600 text-white font-semibold"
        onClick={onSearch}
        style={{ minWidth: '45px' }}
      >
        🔍
      </button>
    </div>
  )
}
