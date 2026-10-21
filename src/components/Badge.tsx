export function Badge({ className, uid }: { className?: string; uid: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <defs>
        <path id={`ring-${uid}`} d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
        <clipPath id={`pole-${uid}`}>
          <rect x="74" y="36" width="9" height="48" rx="4.5" />
        </clipPath>
      </defs>
      <circle cx="60" cy="60" r="58" fill="#1c3729" />
      <circle cx="60" cy="60" r="57" fill="none" stroke="#c9a55e" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="36" fill="none" stroke="#c9a55e" strokeWidth="1" opacity=".55" />
      <text fill="#c9a55e" fontFamily="var(--font-archivo), sans-serif" fontSize="9.5" fontWeight="600" style={{ fontStretch: "75%" }}>
        <textPath href={`#ring-${uid}`} startOffset="0" textLength="280" lengthAdjust="spacing">
          LANDRY’S BARBER SHOPPE · GASTONIA NC ·
        </textPath>
      </text>
      <g clipPath={`url(#pole-${uid})`}>
        <rect x="74" y="36" width="9" height="48" fill="#f3ebdb" />
        <path d="M66 44l26-14v6L66 50zM66 56l26-14v6L66 62zM66 68l26-14v6L66 74zM66 80l26-14v6L66 86zM66 92l26-14v6L66 98z" fill="#8f2b22" />
      </g>
      <text x="55" y="80" textAnchor="middle" fill="#f3ebdb" fontFamily="var(--font-gloock), Georgia, serif" fontSize="54">
        L
      </text>
    </svg>
  );
}

export function Stars({ className, uid }: { className?: string; uid: string }) {
  const star = "M7 0l2.06 4.6 4.94.43-3.75 3.27 1.12 4.85L7 10.6l-4.37 2.55 1.12-4.85L0 5.03l4.94-.43z";
  return (
    <svg className={className} viewBox="0 0 82 14" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={`frac-${uid}`}>
          <rect x="0" y="0" width="8.4" height="14" />
        </clipPath>
      </defs>
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={star} transform={`translate(${i * 17} 0)`} fill="currentColor" />
      ))}
      <g transform="translate(68 0)">
        <path d={star} fill="currentColor" opacity=".28" />
        <path d={star} fill="currentColor" clipPath={`url(#frac-${uid})`} />
      </g>
    </svg>
  );
}
