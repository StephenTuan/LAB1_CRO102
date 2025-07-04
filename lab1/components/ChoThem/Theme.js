import React, { createContext, useState, useContext } from 'react';

export const lightTheme = {
  dark: false,
  colors: {
    background: '#f5f5f5',
    block: '#ffffff',
    text: '#000000',
    primary: '#007bff',
    border: '#cccccc',
    shadow: '#000',
    placeholder: '#999999',
    buttonText: '#ffffff',
  },
};

const darkTheme = {
  dark: true,
  colors: {
    background: '#121212',
    block: '#1e1e1e',
    text: '#ffffff',
    primary: '#bb86fc',
    border: '#333333',
    shadow: '#fff',
    placeholder: '#777777',
    buttonText: '#000000',
  },
};

export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);