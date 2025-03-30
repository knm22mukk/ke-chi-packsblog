'use client';

import { IconButton } from '@/components/Button';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { useTheme } from 'next-themes';

export default function ThemeChange() {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton type='button' onClick={handleChange}>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}
