'use client';

import { IconButton } from '@/components/Button';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeChange() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  const handleChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton
      type='button'
      onClick={handleChange}
      ariaLabel='テーマ変更ボタン'
    >
      {mounted && <> {theme === 'light' ? <MoonIcon /> : <SunIcon />} </>}
    </IconButton>
  );
}
