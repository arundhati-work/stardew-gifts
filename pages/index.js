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
  const [isClient, setIsClient] = useState(false);

  // Fix hydration mismatch by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
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

  // Show loading or minimal content during hydration
  if (!isClient) {
    return (
      <main className={styles.main}>
        <h1 className={styles.title}>🎁 Stardew Valley Gift Matcher</h1>
        <div className={styles.searchContainer}>
          <div>Loading...</div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>🎁 Stardew Valley Gift Matcher</h1>
      <div className={styles.searchContainer}>
        <SearchBar
          mode={mode}
          setMode={setMode}
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          handleReset={handleReset}
        />
      </div>
      <div className={styles.results}>
        {result ? <Results result={result} query={query} mode={mode} />
         : <VillagerGrid />}
      </div>
    </main>
  );
}