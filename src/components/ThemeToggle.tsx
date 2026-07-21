import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const getInitialTheme = (): Theme =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    themeColor?.setAttribute('content', theme === 'dark' ? '#05070d' : '#f4f7fb');
  }, [theme]);

  useEffect(() => {
    const systemPreference = window.matchMedia('(prefers-color-scheme: light)');
    const followSystemPreference = (event: MediaQueryListEvent) => {
      try {
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme === 'light' || savedTheme === 'dark') return;
      } catch {
        // Continue following the device theme when storage is unavailable.
      }

      setTheme(event.matches ? 'light' : 'dark');
    };

    systemPreference.addEventListener('change', followSystemPreference);
    return () => systemPreference.removeEventListener('change', followSystemPreference);
  }, []);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  const selectTheme = () => {
    setTheme(nextTheme);
    try {
      localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // The selected theme still applies for the current session.
    }
  };

  return (
    <button
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === 'light'}
      className="icon-link theme-toggle"
      onClick={selectTheme}
      title={`Switch to ${nextTheme} mode`}
      type="button"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
