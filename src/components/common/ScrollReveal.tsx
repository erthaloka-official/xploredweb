import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'scale' | 'blur';
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay,
  className = '',
  style,
}) => {
  const getDirectionClass = () => {
    switch (direction) {
      case 'left':
        return 'reveal-left';
      case 'right':
        return 'reveal-right';
      case 'scale':
        return 'reveal-scale';
      case 'blur':
        return 'reveal-blur';
      case 'up':
      default:
        return 'reveal';
    }
  };

  const delayClass = delay ? `delay-${delay}` : '';
  const combinedClass = `${getDirectionClass()} ${delayClass} ${className}`.trim();

  return (
    <div className={combinedClass} style={style}>
      {children}
    </div>
  );
};

export default ScrollReveal;
