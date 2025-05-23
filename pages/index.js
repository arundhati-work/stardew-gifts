import { useState, useEffect } from 'react';
import itemData from '../data/itemToVillager.json';
import villagerData from '../data/villagerToItem.json';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';
import styles from '../styles/Home.module.css';
import VillagerGrid from '../components/VillagerGrid';

export default function Home() {
  const [mode, setMode] = useState('item'); // 'item' or 'villager'
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleReset = () => {
    setQuery('');
    setResult(null); // Show the grid again
  };
  
  const handleSearch = () => {
    const formattedQuery = query.trim().toLowerCase();

    if (mode === 'item') {
      const found = Object.entries(itemData).find(([item]) => item.toLowerCase() === formattedQuery);
      setResult(found ? found[1] : { message: ['No data found'] });
    } else {
      const found = Object.entries(villagerData).find(([villager]) => villager.toLowerCase() === formattedQuery);
      setResult(found ? found[1] : { message: ['No data found'] });
    }
  };

  return (
    <main className={styles.main} suppressHydrationWarning={true}>
      <h1 className={styles.title}>🎁 Stardew Valley Gift Matcher</h1>
      <div className={styles.searchContainer}>
        {mounted && (
          <SearchBar
            key="searchbar"
            mode={mode}
            setMode={setMode}
            query={query}
            setQuery={setQuery}
            handleSearch={handleSearch}
            handleReset={handleReset}
          />
        )}
      </div>
      <div className={styles.results} suppressHydrationWarning={true}>
        {mounted && (
          result ? 
            <Results key="results" result={result} query={query} mode={mode} />
            : <VillagerGrid key="grid" />
        )}
      </div>
    </main>
  );
}