import './Gallery.css';

const polaroids = [
  { caption: 'us, always', rotate: -6 },
  { caption: 'that night out', rotate: 4 },
  { caption: 'forever favorite', rotate: -3 },
  { caption: 'just the two of us', rotate: 7 },
  { caption: 'home is you', rotate: -5 },
  { caption: 'happy birthday, dudu', rotate: 3 },
];

function HeartDoodle() {
  return (
    <svg viewBox="0 0 100 100" className="placeholder-heart" aria-hidden="true">
      <path
        d="M50 78 C50 78 12 54 12 30 C12 16 24 8 36 8 C44 8 50 14 50 14 C50 14 56 8 64 8 C76 8 88 16 88 30 C88 54 50 78 50 78 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-header">
        <p className="gallery-eyebrow">our little archive</p>
        <h2 className="gallery-title">
          Moments worth <span className="script">keeping</span>
        </h2>
        <p className="gallery-sub">
          Drop in your favorite photos below — this corner is reserved for us.
        </p>
      </div>

      <div className="polaroid-grid">
        {polaroids.map((p, i) => (
          <figure
            className="polaroid"
            key={i}
            style={{ '--rotate': `${p.rotate}deg`, '--delay': `${i * 0.08}s` }}
          >
            <div className="polaroid-photo">
              <HeartDoodle />
              <span className="polaroid-hint">your photo here</span>
            </div>
            <figcaption className="script">{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
