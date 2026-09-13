import { useState } from "react";
import "./App.css";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="page">
      {!opened ? (
        <section className="notification-card">
          <div className="top-bar">
            <span>● SYSTEM NOTIFICATION</span>
            <span>SECURE</span>
          </div>

          <div className="icon">🔔</div>

          <p className="small-text">IMPORTANT ACCOUNT NOTIFICATION</p>

          <h1>Birthday Benefit<br />Activated</h1>

          <div className="details">
            <div>
              <span>RECIPIENT</span>
              <strong>Ricky Kumar</strong>
            </div>

            <div>
              <span>ACCOUNT STATUS</span>
              <strong className="active">● LEGENDARY</strong>
            </div>

            <div>
              <span>BENEFIT TYPE</span>
              <strong>Annual Birthday Upgrade</strong>
            </div>
          </div>

          <div className="warning">
            ⚠️ This notification requires immediate attention.
          </div>

          <button onClick={() => setOpened(true)}>
            VIEW BENEFITS →
          </button>

          <p className="footer-text">
            Generated automatically by <b>Brotherhood Services™</b>
          </p>
        </section>
      ) : (
        <section className="birthday-card">
          <div className="confetti">🎉 🎂 🎉</div>

          <p className="small-text">OFFICIAL BIRTHDAY DEPARTMENT</p>

          <h1>Happy Birthday,<br />Ricky Bhai! 🎂</h1>

          <div className="message">
            <p>
              Dear <b>Ricky Kumar</b>,
            </p>

            <p>
              Congratulations! You have successfully completed another year
              of being my <b>teacher, elder brother, advisor, and part-time
              professional scolder.</b> 😂
            </p>

            <p>
              Your account has been upgraded with:
            </p>

            <ul>
              <li>✅ Unlimited respect from Saurabh</li>
              <li>✅ Lifetime Elder Brother privileges</li>
              <li>✅ Unlimited teaching rights</li>
              <li>✅ Permission to say "I told you so"</li>
              <li>✅ One student who will continue troubling you</li>
            </ul>

            <p className="final-line">
              Have an amazing birthday, Bhai! ❤️
            </p>

            <p>
              — Your permanently enrolled student,<br />
              <b>Saurabh</b> 😎
            </p>
          </div>

          <button onClick={() => setOpened(false)}>
            ← RETURN TO SYSTEM
          </button>
        </section>
      )}
    </main>
  );
}

export default App;