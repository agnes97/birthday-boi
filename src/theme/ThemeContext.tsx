import { FC, createContext, useReducer } from 'react'

type Props = {
  children: any,
}

type Theme = {
  theme: { [index: string]: boolean },
  themeType: 'DEFAULT_MODE' | 'WON_MODE' | 'LOST_MODE',
}

const initialTheme: any = { defaultMode: true, lostMode: false, wonMode: false }

export const ThemeContext = createContext(initialTheme)

const themeReducer = (theme: Theme['theme'], switchThemeByType: Theme['themeType']) => {
  switch (switchThemeByType) {
    case 'DEFAULT_MODE':
      console.log('The page is now in the DEFAULT mode!')
      return { defaultMode: true, lostMode: false, wonMode: false }
    case 'WON_MODE':
      console.log('The page is now in the WON mode!')
      return { defaultMode: false, lostMode: false, wonMode: true }
    case 'LOST_MODE':
      console.log('The page is now in the LOST mode!')
      return { defaultMode: false, lostMode: true, wonMode: false }
    default:
      return theme
  }
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [currentTheme, updateCurrentTheme] = useReducer(themeReducer, initialTheme)

  console.log({currentTheme})
  return (
    <ThemeContext.Provider 
      value={{ currentTheme: currentTheme , updateCurrentTheme: updateCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
