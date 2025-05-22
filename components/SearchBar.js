import React from 'react';

export default function SearchBar({ mode, setMode, query, setQuery, handleSearch }) {
  return (
    <div>
      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="item">Search by Item</option>
        <option value="villager">Search by Villager</option>
      </select>

      <input
        type="text"
        placeholder={`Enter a ${mode === 'item' ? 'gift item' : 'villager name'}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
