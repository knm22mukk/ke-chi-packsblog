'use client';

import MobileNav from '@/components/MobileNav';
import { navLinks } from '@/const/navLinks';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className='border-b-gray-200 border-b-2 h-24'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 lg:px-8'>
        <Link href='/' className='flex items-center space-x-3 hover:opacity-70'>
          <Image
            src='/ke-chi-_logo.webp'
            width={100}
            height={100}
            alt='けーちーブログロゴ'
          />
          <span className='self-center text-2xl font-bold text-orange-600'>
            けーちー包装紙材ブログ
          </span>
        </Link>
        <MobileNav />
        <div className='hidden w-full lg:block md:w-auto'>
          <ul className='flex items-center font-bold md:space-x-8'>
            {navLinks.map((link) => {
              return (
                <li key={link.title}>
                  <Link
                    href={link.path}
                    className={clsx(
                      'p-3 hover:text-orange-600 hover:underline text-xl',
                      { 'text-orange-600': pathname === link.path },
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
