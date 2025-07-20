# Songs List Manager 🎵

A custom Webpack-configured React-Redux application for managing music collections with full CRUD operations.

[![GitHub](https://img.shields.io/github/license/Fuadseid/songs_list)](https://github.com/Fuadseid/songs_list)

## Features
- **Custom Webpack Setup**: Manual configuration (no CRA/Vite)
- **Full CRUD Operations**: Create, Read, Update, Delete songs
- **State Management**: Redux with Sagas middleware
- **Mock Backend**: MockAPI.io integration
- **Learning Focus**: Built to understand build tooling deeply

## Project Structure
```
songs_list/
├── src/
│ ├── App.js # Root component
│ ├── Add.jsx # Add song form
│ ├── Edit.jsx # Edit song form
│ ├── redux/
│ │ ├── Action/
│ │ │ └── Action.js # All action creators
│ │ ├── Reducer/
│ │ │ └── Reducer.js # State management
│ │ ├── Saga/
│ │ │ └── Saga.js # Side effects
│ │ ├── store.js # Redux store
│ │ ├── rootSaga.js # Saga composition
│ │ └── rootReducer.js # Reducer composition
│ └── utils/
│ └── api.js # API service layer
├── public/ # Static assets
└── .env # Environment variables                  # Static assets
```

## Webpack Configuration Highlights
```javascript
// webpack.common.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
```

## Setup (Webpack-specific)
1. Clone repository:
   ```bash
   git clone https://github.com/Fuadseid/songs_list.git
   cd songs_list
   ```
2. Install dependencies:
   ```bash
   npm install webpack webpack-cli webpack-dev-server @babel/core babel-loader --save-dev
   ```
3. Configure environment:
   ```bash
   cp .env.example .env
   ```
4. Run development server:
   ```bash
   npm run dev
   ```
5. Production build:
   ```bash
   npm run build
   ```

## Key Learnings
- **Webpack Configuration**:
  - Manual loaders for JSX/CSS
  - Dev vs production setups
  - Babel integration
- **Build Process**:
  - Bundle optimization
  - Dev server configuration
  - Environment variables
- **Architecture**:
  - Redux middleware integration
  - Saga patterns for async
  - Mock API strategies

## Development Notes
- **AI Assistance**: Used for Webpack troubleshooting and Redux-Saga patterns
- **Manual Configuration**: All build tools configured from scratch
- **Debugging**: Learned Webpack bundle analysis techniques

## License
MIT © [Fuad Seid](https://github.com/Fuadseid)


