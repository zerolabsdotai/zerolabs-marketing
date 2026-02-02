export default function Home() {
  return (
    <>
      <main className="page">
        <div className="glow" aria-hidden="true" />
        <section className="card" aria-label="Zero Labs coming soon">
          <div className="badge">Coming soon</div>
          <h1 className="title">Zero Labs</h1>
          <p className="tagline">AI operations platform</p>
          <div className="divider" />
          <p className="body">
            We are building an operations layer that helps teams deploy, observe,
            and govern AI systems with clarity and control. Zero Labs brings
            automation, policy, and reliability tooling into a single workspace
            so teams can move fast without losing oversight. Built for modern
            organizations, the platform focuses on secure workflows and
            measurable outcomes from day one.
          </p>
          <div className="email">
            <span className="emailLabel">Get early access updates</span>
            <div className="emailRow">
              <input
                className="emailInput"
                type="email"
                placeholder="you@company.com"
                disabled
                aria-label="Email address (coming soon)"
              />
              <button className="emailButton" type="button" disabled>
                Notify me
              </button>
            </div>
            <span className="emailNote">Launching soon. No spam.</span>
          </div>
        </section>
      </main>
      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #0a0b10;
        }

        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 64px 24px;
          color: #f3f5f7;
          font-family: "Space Grotesk", "IBM Plex Sans", "Segoe UI",
            "Helvetica Neue", sans-serif;
          background: radial-gradient(
              900px 600px at 10% 10%,
              rgba(70, 140, 255, 0.25),
              transparent 60%
            ),
            radial-gradient(
              700px 500px at 90% 0%,
              rgba(0, 200, 180, 0.18),
              transparent 55%
            ),
            linear-gradient(160deg, #0b0f16 0%, #0a0b10 60%, #0b1218 100%);
          position: relative;
          overflow: hidden;
        }

        .glow {
          position: absolute;
          inset: -20% 0 auto 0;
          height: 50%;
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(255, 255, 255, 0.08),
            transparent 70%
          );
          pointer-events: none;
        }

        .card {
          width: min(720px, 100%);
          padding: 48px 44px;
          border-radius: 24px;
          background: rgba(12, 16, 22, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(8px);
          position: relative;
          z-index: 1;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          color: #d7e4ff;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .title {
          margin: 18px 0 8px;
          font-size: clamp(2.4rem, 5vw, 3.5rem);
          letter-spacing: -0.02em;
        }

        .tagline {
          margin: 0;
          font-size: clamp(1.1rem, 2.4vw, 1.4rem);
          color: #b9c7dd;
        }

        .divider {
          width: 56px;
          height: 2px;
          margin: 20px 0;
          background: linear-gradient(90deg, #78b3ff, #42f7c8);
          border-radius: 999px;
        }

        .body {
          margin: 0 0 28px;
          color: #c9d2e3;
          font-size: 1rem;
          line-height: 1.7;
        }

        .email {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .emailLabel {
          font-size: 0.9rem;
          color: #d3dbea;
        }

        .emailRow {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 12px;
        }

        .emailInput {
          height: 46px;
          padding: 0 16px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(10, 12, 18, 0.8);
          color: #cfd9e8;
          font-size: 0.95rem;
        }

        .emailInput::placeholder {
          color: #6f7d95;
        }

        .emailButton {
          height: 46px;
          padding: 0 20px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(130deg, #5c8dff, #37f1c8);
          color: #06101a;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: not-allowed;
          opacity: 0.7;
        }

        .emailNote {
          font-size: 0.82rem;
          color: #96a5bd;
        }

        @media (max-width: 640px) {
          .card {
            padding: 36px 24px;
          }

          .emailRow {
            grid-template-columns: 1fr;
          }

          .emailButton {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
