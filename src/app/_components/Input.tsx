'use client'
import { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
function Input() {
  const [search, setSearch] = useState('')
  return (
    <div className="">
      <label htmlFor="search" className="relative ">
        <input
          className="w-full px-2 py-1 bg-transparent border border-b-2 rounded-md focus:border-b-blue-400 border-b-gray-200 border-gray-400/50 focus:outline-none"
          type="text"
          placeholder="Search"
          aria-label="Search"
          name="search"
          id="search"
          required
          autoComplete="off"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute right-0 flex -translate-y-1/2 divide-x divide-gray-500 top-1/2">
          {search.length > 0 && (
            <button
              className="px-2 py-1 "
              onClick={() => {
                setSearch('')
              }}
            >
              <FaTimes />
            </button>
          )}
          <button className="px-2 py-1">
            <FaSearch className="" />
          </button>
        </div>
      </label>
    </div>
  )
}

export default Input
