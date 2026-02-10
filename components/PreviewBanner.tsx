export default function PreviewBanner() {
  if (process.env.VERCEL_ENV !== "preview") {
    return null;
  }

  return (
    <aside className="previewBanner" role="status" aria-live="polite">
      <span className="label">Preview Build</span>
      <span className="text">
        This is a Vercel Preview Deployment. Changes are not live yet.
      </span>

      <style jsx>{`
        .previewBanner {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 14px;
          margin-bottom: 28px;
          border-radius: 999px;
          background: rgba(255, 199, 88, 0.16);
          border: 1px solid rgba(255, 199, 88, 0.35);
          color: #ffd28a;
          font-size: 0.88rem;
          letter-spacing: 0.01em;
        }

        .label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          font-weight: 600;
        }

        .text {
          color: #ffe2b3;
        }

        @media (max-width: 640px) {
          .previewBanner {
            flex-wrap: wrap;
            gap: 6px 10px;
          }
        }
      `}</style>
    </aside>
  );
}
