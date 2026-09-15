import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  icon,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';

  return (
    <button
      className={`btn btn-secondary ${sizeClass} ${className}`}
      style={{ width: fullWidth ? '100%' : 'auto' }}
      {...props}
    >
      <span>{children}</span>
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
    </button>
  );
};
