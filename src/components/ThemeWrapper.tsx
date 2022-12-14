import React from 'react';
import { ThemeContextType, Theme } from '../@types/theme.d';
import { ThemeContext } from '../context/themeContext';

interface ThemeWrapperProps {
    children: any;
}
const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { theme, changeTheme } = React.useContext(ThemeContext) as ThemeContextType;

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value as Theme);
  };
  return (
    <div className="Theme-wrapper" data-theme={theme}>
      <select className="Theme-toggler" name="toggleTheme" onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {children}
    </div>
  );
};

export default ThemeWrapper;
