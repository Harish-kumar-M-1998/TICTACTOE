# Tic Tac Toe Game

A modern, responsive tic-tac-toe game built with React, Tailwind CSS, and Vite.

## Features

- ✨ Beautiful, modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🎯 Win detection with highlighted winning line
- 🤝 Draw detection
- 🔄 Reset game functionality
- ⚡ Fast and smooth animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build:

```bash
npm run preview
```

### Docker

Build the Docker image:

```bash
docker build -t tic-tac-toe .
```

Run the container:

```bash
docker run -p 8080:80 tic-tac-toe
```

The application will be available at `http://localhost:8080`

## How to Play

1. Players take turns clicking on empty squares
2. Player X goes first
3. The first player to get 3 in a row (horizontal, vertical, or diagonal) wins
4. If all squares are filled with no winner, it's a draw
5. Click "Reset Game" to start a new game

## Technologies Used

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Project Structure

```
ttt/
├── src/
│   ├── components/
│   │   └── TicTacToe.jsx    # Main game component
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles with Tailwind
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── Dockerfile               # Docker configuration
└── .dockerignore            # Docker ignore file
```

## License

MIT
