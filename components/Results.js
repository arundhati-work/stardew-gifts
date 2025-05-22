import React from 'react';

export default function Results({ result }) {
  if (!result) return null;

  return (
    <div>
      {Object.entries(result).map(([preference, names]) => (
        <div key={preference}>
          <h3>{preference.toUpperCase()}</h3>
          <ul>
            {names.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
