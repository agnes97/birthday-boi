import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './theme/ThemeContext';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
      --background-primary-color: hsl(240, 1%, 15%);
      --background-secondary-color-light: hsl(0, 0%, 32%);

      --text-primary-color: hsl(0, 0%, 100%);
      --text-secondary-color-light: hsl(10, 80%, 50%);
      --text-secondary-color-dark: hsl(10, 60%, 30%);
  }

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    min-width: 100%;
    margin: 0;
    font-family: "Times New Roman", Times, serif;
    background-color: var(--background-primary-color);
    color: var(--text-primary-color);
    font-size: 1.3rem;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
