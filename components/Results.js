import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Results.module.css';
import itemIcons from '../data/itemIcons.json';

export default function Results({ result, query, mode }) {
  const router = useRouter();
  const basePath = router.basePath || '';
  
  if (!result) return null;

  const formattedQuery =
    query.charAt(0).toUpperCase() + query.slice(1).toLowerCase();

  return (
    <div className={styles.results}>
      {mode === 'villager' ? (
        <div className={styles.villagerHeader}>
          <img
            src={`${basePath}/villagers/${formattedQuery.toLowerCase()}.png`}
            alt={formattedQuery}
            className={styles.avatarLarge}
            onError={(e) => (e.target.style.display = 'none')}
          />
          <h2>{formattedQuery}</h2>
        </div>
      ) : (
        <h2 className={styles.itemHeader}>
          {itemIcons[formattedQuery] || '🎁'}{' '}
          <span className={styles.itemName}>{formattedQuery}</span>
        </h2>
      )}

      {Object.entries(result).map(([preference, items]) => (
        <div key={preference}>
          <h3>{preference.toUpperCase()}</h3>
          <ul className={styles.villagerList}>
            {items.map((item) => (
              <li key={item} className={styles.villagerItem}>
                {mode === 'item' && (
                  <img
                    src={`${basePath}/villagers/${item.toLowerCase()}.png`}
                    alt={item}
                    className={styles.avatar}
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                )}
                <span>
                  {mode === 'villager' && (itemIcons[item] || '🎁')}{' '}
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}