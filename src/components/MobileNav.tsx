'use client';

import { IconButton } from '@/components/Button';
import { navLinks } from '@/const/navLinks';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleClick = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <IconButton type='button' onClick={handleClick}>
        {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
      </IconButton>
      <div
        className={`fixed left-0 top-24 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className='fixed h-full w-full bg-orange-100'>
          <div className='px-12 py-5'>
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                className='flex justify-center px-4 py-2 text-xl font-bold hover:text-orange-600 hover:underline text-gray-900'
                onClick={handleClick}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
