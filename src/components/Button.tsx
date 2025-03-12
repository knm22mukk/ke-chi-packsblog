import type { ReactNode } from 'react';

type Props = {
  type: 'submit' | 'button';
  onClick?: () => void;
  title?: string;
  children?: ReactNode;
};

export function DefaultButton({ type, onClick, title }: Props) {
  return (
    <button
      type={type}
      className='text-white bg-orange-500 hover:bg-orange-600 font-bold rounded-lg text-sm px-5 py-3'
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export function OutlineButton({ type, onClick, title }: Props) {
  return (
    <button
      type={type}
      className='text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-600 font-bold rounded-lg text-sm px-5 py-3 text-center'
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export function IconButton({ type, onClick, children }: Props) {
  return (
    <button
      type={type}
      className='text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white font-bold rounded-lg text-sm p-3 text-center inline-flex items-center'
      onClick={onClick}
    >
      <span className='h-5 w-5'>{children}</span>
    </button>
  );
}
