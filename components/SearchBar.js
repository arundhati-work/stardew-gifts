import styles from '../styles/SearchBar.module.css';

export default function SearchBar({ mode, setMode, query, setQuery, handleSearch, handleReset }) {
  return (
    <div className={styles.searchBar} suppressHydrationWarning>
      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        className={styles.select}
        suppressHydrationWarning
      >
        <option value="item">Search by Item</option>
        <option value="villager">Search by Villager</option>
      </select>

      <input
        type="text"
        placeholder={`Enter a ${mode === 'item' ? 'gift item' : 'villager name'}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
        suppressHydrationWarning
      />

      <button onClick={handleSearch} className={styles.button} suppressHydrationWarning>
        Search
      </button>
      <button onClick={handleReset} className={styles.button} disabled={!query} suppressHydrationWarning>
        Reset
      </button>
    </div>
  );
}