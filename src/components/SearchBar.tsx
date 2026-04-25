import React, { useState } from 'react'
import './SearchBar.css'

type SearchBarProps = {
  placeholder?: string
  onSearch?: (q: string) => void
}

export default function SearchBar({ placeholder = 'Search...', onSearch }: SearchBarProps) {
  const [q, setQ] = useState('')
  return (
    <form
      className="eds-search"
      onSubmit={(e) => {
        e.preventDefault()
        onSearch?.(q)
      }}
    >
      <input
        className="eds-search__input"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
        aria-label="Search"
      />
      <button className="eds-search__button" type="submit">Search</button>
    </form>
  )
}
