// StatsCards.jsx
import './StatsCards.css';

export default function StatsCards() {
  const stats = [
    { value: '5,000+', label: 'Active Students', color: 'blue' },
    { value: '500+', label: 'Teams Formed', color: 'green' },
    { value: '100+', label: 'Hackathons Won', color: 'orange' },
    { value: '50+', label: 'College Partners', color: 'blue' },
  ];

  return (
    <section className="stats-wrapper">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className={`stat-card ${s.color}`}>
            <h2>{s.value}</h2>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

