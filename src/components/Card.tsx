import React from 'react'
import './Card.css'

type CardProps = {
  title?: string
  subtitle?: string
  className?: string
  variant?: 'default' | 'outlined' | 'compact' | 'elevated'
  children?: React.ReactNode
}

export default function Card({ title, subtitle, className = '', variant = 'default', children }: CardProps) {
  const cls = `eds-card eds-card--${variant} ${className}`.trim()
  return (
    <div className={cls}>
      {(title || subtitle) && (
        <div className="eds-card__header">
          {title && <h3 className="eds-card__title">{title}</h3>}
          {subtitle && <p className="eds-card__subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="eds-card__body">{children}</div>
    </div>
  )
}
