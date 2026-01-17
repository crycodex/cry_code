export type Theme = 'light' | 'dark';

export const getTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored && (stored === 'light' || stored === 'dark')) {
    return stored;
  }
  return 'light';
};

export const setTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
};

export const toggleTheme = (): Theme => {
  const currentTheme = getTheme();
  const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  return newTheme;
};

export const initTheme = (): void => {
  if (typeof window === 'undefined') return;
  const theme = getTheme();
  document.documentElement.setAttribute('data-theme', theme);
};
