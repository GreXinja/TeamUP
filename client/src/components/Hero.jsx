import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-inner">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <div className="hero-badge">
            🚀 Join 5,000+ students building together
          </div>

          <h1 className="hero-title">
            Find Your <span className="grad">Dream Team</span>
            <br />
            for Any Project
          </h1>

          <p className="hero-desc">
            TeamUP connects students with compatible teammates for hackathons,
            college projects, and startup ideas using smart skill-matching.
          </p>

          <div className="hero-actions">
            <button className="btn primary">Get Started Free →</button>
            <button className="btn secondary">🚀 Explore Hackathons</button>
          </div>

          <div className="hero-stats">
            <span>✔ Free to Join</span>
            <span>✔ Verified Students</span>
            <span>✔ 500+ Teams Formed</span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">
          <div className="match-card">
            <div className="user">
              <div className="avatar purple" style={{ color: "#fff" }}>
                A
              </div>
              <div>
                <h4>Arjun Mehta</h4>
                <p>React • Node.js • AWS</p>
              </div>
              <span className="match">95% Match</span>
            </div>

            <div className="user">
              <div className="avatar green" style={{ color: "#fff" }}>
                P
              </div>
              <div>
                <h4>Priya Sharma</h4>
                <p>Python • ML • TensorFlow</p>
              </div>
              <span className="match">88% Match</span>
            </div>

            <div className="user">
              <div className="avatar orange" style={{ color: "#fff" }}>
                R
              </div>
              <div>
                <h4>Rahul Kumar</h4>
                <p>UI/UX • Figma • Flutter</p>
              </div>
              <span className="match">82% Match</span>
            </div>
          </div>

          <div className="floating-tag">+12 new matches today!</div>
        </div>
      </div>
    </section>
  );
}
