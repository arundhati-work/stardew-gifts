import { useRouter } from 'next/router';
import styles from '../styles/VillagerGrid.module.css';
import itemIcons from '../data/itemIcons.json';

function getItemIcon(item) {
  const normalized = item.trim().toLowerCase();
  return itemIcons[normalized] || '🎁';
}

export default function VillagerGrid({ villagerData }) {
  const router = useRouter();
  const basePath = router.basePath || '';

  // Fallback if prop not passed
  let dataToUse = villagerData;
  if (!villagerData) {
    const fallbackData = require('../data/villagerToItem.json');
    dataToUse = fallbackData;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {Object.entries(dataToUse).map(([villager, preferences]) => (
          <div key={villager} className={styles.card}>
            <img
              src={`${basePath}/villagers/${villager.toLowerCase()}.png`}
              alt={villager}
              className={styles.avatar}
              onError={(e) => (e.target.style.display = 'none')}
            />
            <h3>{villager}</h3>
            <ul>
              {preferences.loves.map((gift) => (
                <li key={gift}>
                  <span className={styles.giftRow}>
                    {getItemIcon(gift)} {gift}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
