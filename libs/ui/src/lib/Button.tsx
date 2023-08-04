import type { ReactNode } from 'react';

export interface ButtonProps {
  className?: string;
  children?: ReactNode;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={`text-white px-4 py-2 rounded bg-slate-700 ${className || ''}`}
    >
      {children}
    </button>
  );
}
