# Laugh Track App

A tiny web app that shows jokes with a laugh track effect. Designed as a minimal, static project you can open in a browser or serve from a simple static server.

## Features

- Shows jokes and plays a laugh sound effect
- Minimal, dependency-free HTML/CSS/JavaScript

## Files

- `index.html` — Main HTML file and UI
- `joke.css` — Styles for the app
- `joke.js` — JavaScript logic (fetching/rotating jokes, playing laugh sound)

## Requirements

- A modern web browser. No build steps or package managers required.

## Running Locally

Option A — Open directly (quickest):

1. Double-click `index.html` or open it in your browser.

Option B — Serve with a simple static server (recommended for consistent audio behavior):

PowerShell / Command Prompt (using Python 3):

```powershell
cd path\to\Laugh-Track-App-main
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Node (http-server):

```powershell
npm install -g http-server
http-server -p 8000
# then open http://localhost:8000
```

## Development Notes

- `joke.js` contains the app logic. If you add jokes or change audio paths, check browser console for errors.
- Keep audio files relatively short and web-friendly (MP3/OGG) to avoid autoplay restrictions.

## Contributing

Feel free to open issues or send pull requests with small improvements: more jokes, accessibility tweaks, or UI polish.

## License

This project is licensed under the MIT License — see `LICENSE` for details.

