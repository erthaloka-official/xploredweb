import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  variant?: 'navy' | 'white' | 'blue';
  fullWidth?: boolean;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  icon,
  variant = 'navy',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const variantClass = variant === 'white' ? 'btn-white' : 'btn-primary';

  return (
    <button
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      style={{ width: fullWidth ? '100%' : 'auto' }}
      {...props}
    >
      <span>{children}</span>
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
    </button>
  );
};
