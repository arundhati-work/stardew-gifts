import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';
import styles from '../styles/Home.module.css';
import VillagerGrid from '../components/VillagerGrid';

export default function Home({ itemData, villagerData }) {
  const [mode, setMode] = useState('item');
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleReset = () => {
    setQuery('');
    setResult(null);
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
    <main className={styles.main} suppressHydrationWarning>
      <h1 className={styles.title}>🎁 Stardew Valley Gift Matcher</h1>
      <div className={styles.searchContainer} suppressHydrationWarning>
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
        {result ? 
          <Results result={result} query={query} mode={mode} />
          : <VillagerGrid villagerData={villagerData} />
        }
      </div>
    </main>
  );
}

// This runs at build time and pre-loads the data
export async function getStaticProps() {
  // Import the data at build time
  const itemData = await import('../data/itemToVillager.json');
  const villagerData = await import('../data/villagerToItem.json');

  return {
    props: {
      itemData: itemData.default,
      villagerData: villagerData.default,
    },
  };
}