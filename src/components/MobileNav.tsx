'use client';

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
      <button
        type='button'
        aria-label='ToggleMenu'
        className='inline-flex items-center mr-4 w-10 h-10 justify-center text-gray-500 rounded-lg lg:hidden hover:bg-orange-100 outline-2 hover:text-orange-600 hover:outline-orange-600'
        onClick={handleClick}
      >
        {menuOpen ? (
          <XMarkIcon className='h-5 w-5' />
        ) : (
          <Bars3Icon className='h-5 w-5' />
        )}
      </button>
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
                className='flex justify-center px-4 py-2 text-xl font-bold hover:text-orange-600 hover:underline'
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
