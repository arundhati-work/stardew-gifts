import { useState } from 'react';
import itemData from '../data/itemToVillager.json';
import villagerData from '../data/villagerToItem.json';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';

export default function Home() {
  const [mode, setMode] = useState('item'); // 'item' or 'villager'
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

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
    <div style={{ padding: '2rem' }}>
      <h1>🎁 Stardew Valley Gift Matcher</h1>
      <SearchBar
        mode={mode}
        setMode={setMode}
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />
      <Results result={result} />
    </div>
  );
}
