import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'crimson' | 'cyber';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'crimson',
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('portfolio-bg-theme');
      return (saved as ThemeMode) || 'crimson';
    } catch {
      return 'crimson';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolio-bg-theme', theme);
    } catch {}

    const root = document.documentElement;
    if (theme === 'cyber') {
      root.classList.add('theme-cyber');
      root.classList.remove('theme-crimson');
    } else {
      root.classList.add('theme-crimson');
      root.classList.remove('theme-cyber');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'crimson' ? 'cyber' : 'crimson'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
