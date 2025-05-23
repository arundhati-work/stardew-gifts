import { useRouter } from 'next/router';
import styles from '../styles/VillagerGrid.module.css';
import villagerData from '../data/villagerToItem.json';
import itemIcons from '../data/itemIcons.json';

export default function VillagerGrid() {
  const router = useRouter();
  const basePath = router.basePath || '';

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {Object.entries(villagerData).map(([villager, preferences]) => (
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
                    {itemIcons[gift] || '🎁'} {gift}
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