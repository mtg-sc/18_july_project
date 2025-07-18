import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = 'font-jakarta font-bold rounded-[14px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-solid border-[#ffffff66]';
  
  const variants = {
    primary: 'bg-[linear-gradient(10deg,#fa12e3_0%,_#7612fa_100%)] text-primary shadow-[0px_0px_1px_#00000026] hover:opacity-90',
    secondary: 'bg-button text-button hover:bg-opacity-80',
    outline: 'border-[#ffffff66] text-primary hover:bg-white-overlay-1',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm sm:px-6 sm:py-2.5',
    medium: 'px-6 py-2.5 text-base sm:px-8 sm:py-3',
    large: 'px-8 py-3 text-lg sm:px-10 sm:py-4',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${fullWidth ? 'w-full' : 'w-auto'} 
    ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes.bool,
};

export default Button;