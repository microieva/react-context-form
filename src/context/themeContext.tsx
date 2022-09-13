import * as React from 'react';
import { Theme, ThemeContextType } from '../@types/theme.d';

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
    children: any;
  }
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState<Theme>('light');
  return <ThemeContext.Provider value={{ theme: themeMode, changeTheme: setThemeMode }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
