import React from 'react';

const Button = ({ children, variant = 'primary', size = '', className = '', onClick, type = 'button', ...props }) => {
    const btnClass = `btn btn-${variant} ${size ? `btn-${size}` : ''} ${className}`;

    return (
        <button type={type} className={btnClass} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
