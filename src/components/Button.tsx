import React from 'react'
import './Button.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  const cls = `eds-btn eds-btn--${variant} ${className}`.trim()
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
