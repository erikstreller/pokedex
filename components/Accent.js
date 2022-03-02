import clsx from 'clsx';

export default function Accent({ children, gradient }) {
  return (
    <span
      className={clsx(
        'bg-gradient-to-tr bg-clip-text text-transparent',
        gradient
      )}
    >
      {children}
    </span>
  );
}
