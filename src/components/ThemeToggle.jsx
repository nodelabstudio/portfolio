import { useEffect, useState } from 'react';
import { FiMonitor, FiMoon, FiSun } from 'react-icons/fi';

const storageKey = 'portfolio-appearance';
const options = [
  { value: 'light', label: 'Light', Icon: FiSun },
  { value: 'dark', label: 'Dark', Icon: FiMoon },
  { value: 'system', label: 'System', Icon: FiMonitor },
];

function readPreference() {
  try {
    const saved = window.localStorage.getItem(storageKey);
    return saved === 'light' || saved === 'dark' ? saved : 'system';
  } catch {
    return 'system';
  }
}

export default function ThemeToggle() {
  const [preference, setPreference] = useState(readPreference);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme() {
      const theme = preference === 'system'
        ? media.matches ? 'dark' : 'light'
        : preference;
      document.documentElement.dataset.theme = theme;
      document.querySelector('meta[name="theme-color"]')?.setAttribute(
        'content', theme === 'dark' ? '#000000' : '#f5f5f7'
      );
    }

    applyTheme();
    media.addEventListener('change', applyTheme);
    return () => media.removeEventListener('change', applyTheme);
  }, [preference]);

  useEffect(() => {
    function syncPreference(event) {
      if (event.key === storageKey || event.key === null) {
        setPreference(readPreference());
      }
    }

    window.addEventListener('storage', syncPreference);
    return () => window.removeEventListener('storage', syncPreference);
  }, []);

  function selectPreference(value) {
    setPreference(value);
    try {
      window.localStorage.setItem(storageKey, value);
    } catch {
      // Appearance still works when browser storage is unavailable.
    }
  }

  return (
    <div className='appearance' role='group' aria-label='Appearance'>
      {options.map(({ value, label, Icon }) => (
        <button
          key={value}
          type='button'
          className='appearance__option'
          aria-label={`${label} appearance`}
          aria-pressed={preference === value}
          title={`${label} appearance`}
          onClick={() => selectPreference(value)}>
          <Icon aria-hidden='true' />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
