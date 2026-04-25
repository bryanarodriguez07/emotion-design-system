import React from 'react'
import './Slider.css'

type SliderProps = {
  value: number
  min?: number
  max?: number
  step?: number
  onChange: (v: number) => void
}

export default function Slider({ value, min = 0, max = 100, step = 1, onChange }: SliderProps) {
  return (
    <div className="eds-slider">
      <input
        type="range"
        className="eds-slider__range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="eds-slider__value">{value}</div>
    </div>
  )
}
