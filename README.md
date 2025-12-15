# Weather App (React + Vite)

Simple ZIP-based weather lookup using the Open-Meteo API. Fetches current conditions and a 5‑day forecast starting from today.

## Run the project
1) Install deps: `npm install`
2) Start dev server: `npm run dev`
3) Open the shown local URL in your browser

## Setup notes
- Uses Open-Meteo geocoding + forecast APIs (no API key needed).
- ZIP search is US-focused; the geocoder falls back to the first match if a US match isn’t found.
- Units toggle refetches data in °F/°C to avoid client-side conversion drift.

## Assumptions / decisions
- Show 5 forecast entries beginning with “today” (uses the API’s current time to align daily data).
- Display city/state from geocoding response; uppercase for the header.
- Lightweight styling via Tailwind base plus a few custom CSS rules in `src/index.css`.
