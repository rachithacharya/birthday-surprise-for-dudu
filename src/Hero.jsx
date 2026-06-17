import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <p className="hero-eyebrow">a little something sealed just for you</p>
      <h1 className="hero-headline">
        Happy <span className="script">Birthday</span>
        <br />
        Sandeep
      </h1>
      <div className="hero-divider">
        <span />
        <span className="hero-divider-dot" />
        <span />
      </div>
      <p className="hero-note script">
        I hope this birthday brings happiness,
        peace, success, and everything your heart wishes for.
        Every year with you feels like the best chapter yet 
        here's to many more, my favorite person.
        <br />
        <br />
        Happy Birthday once again my Love ❤️.
      </p>
      {/* <a href="#gallery" className="hero-scroll">
        scroll for us <span className="hero-scroll-arrow">↓</span>
      </a> */}
    </section>
  );
}
