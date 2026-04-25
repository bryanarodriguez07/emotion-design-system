import React from 'react'
import './Banner.css'

type BannerProps = {
  message: React.ReactNode
  cta?: React.ReactNode
}

export default function Banner({ message, cta }: BannerProps) {
  return (
    <div className="eds-banner" role="region" aria-label="Site banner">
      <div className="eds-banner__content">{message}</div>
      {cta && <div className="eds-banner__cta">{cta}</div>}
    </div>
  )
}
