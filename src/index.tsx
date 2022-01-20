/* eslint-disable no-mixed-operators */
import React, { FC, useContext } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { createGlobalStyle } from 'styled-components'
import { ThemeContext, ThemeProvider } from './theme/ThemeContext';

type PropsGlobalVariables = {
  theme: string,
}

const GlobalStyle = createGlobalStyle`
  :root {
      --background-primary-color: ${(props: PropsGlobalVariables) => props.theme && 'hsl(240, 1%, 15%)'};
      --background-secondary-color-light: ${(props: PropsGlobalVariables) => props.theme && 'hsl(0, 0%, 32%)'};

      --text-primary-color: hsl(0, 0%, 100%);

      --text-secondary-color-light: ${(props: PropsGlobalVariables) => 
        (props.theme === 'defaultMode') && 'hsl(225, 80%, 80%)' || 
        (props.theme === 'wonMode') && 'hsl(160, 30%, 55%)' || 
        (props.theme === 'lostMode') && 'hsl(10, 80%, 50%)'};

      --text-secondary-color-dark: ${(props: PropsGlobalVariables) => 
        (props.theme === 'defaultMode') && 'hsl(225, 50%, 45%)' || 
        (props.theme === 'wonMode') && 'hsl(120, 50%, 45%)' || 
        (props.theme === 'lostMode') && 'hsl(0, 50%, 45%)'};
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

const getCurrentTheme = (theme: any): string => {
  if (theme.currentTheme.wonMode === true) return 'wonMode' 
  if (theme.currentTheme.lostMode === true) return 'lostMode' 
  return 'defaultMode'
}

const MyGlobalStyles: FC = () => {
  const theme = useContext(ThemeContext)

  return <GlobalStyle theme={getCurrentTheme(theme)} />
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <MyGlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
