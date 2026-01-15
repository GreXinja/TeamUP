import { useEffect } from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  useEffect(() => {
    const items = document.querySelectorAll(".step-card");
    items.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.2}s`;
    });
  }, []);

  return (
    <section className="how-wrapper">
      <div className="badge">🚀 Get Started in Minutes</div>

      <h1 className="title">
        How It <span>Works</span>
      </h1>

      <p className="subtitle">
        Three simple steps to find your perfect teammates and start building
        amazing projects
      </p>

      <div className="timeline">
        <span className="dot blue" />
        <span className="dot purple" />
        <span className="dot green" />
      </div>

      <div className="steps">
        {/* STEP 1 */}
        <div
          className="step"
          onClick={(e) => e.currentTarget.classList.toggle("active")}
        >
          <div className="icon blue">
            &lt;/&gt;<span>1</span>
          </div>
          <div className="step-card">
            <h3>Create Your Profile</h3>
            <p>
              Sign up and showcase your skills, experience, and projects. Tell
              us what you're passionate about building.
            </p>
          </div>
        </div>

        {/* STEP 2 */}
        <div
          className="step"
          onClick={(e) => e.currentTarget.classList.toggle("active")}
        >
          <div className="icon purple">
            👥<span>2</span>
          </div>
          <div className="step-card">
            <h3>Discover Teammates</h3>
            <p>
              Our smart algorithm matches you with compatible teammates based on
              skills, interests, and project goals.
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div
          className="step"
          onClick={(e) => e.currentTarget.classList.toggle("active")}
        >
          <div className="icon green">
            🚀<span>3</span>
          </div>
          <div className="step-card">
            <h3>Connect & Build</h3>
            <p>
              Chat with potential teammates, form your dream team, and start
              building amazing projects together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
