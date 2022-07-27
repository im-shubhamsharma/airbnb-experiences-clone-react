export default function Hero() {
  return (
    <section className="hero--section">
      <img src={process.env.PUBLIC_URL + './images/photo-grid.png'} alt="Grid Images" className="hero--image" />
      <h1 className="hero--heading"> Online Experiences</h1>
      <p className="hero-text">
        Join unique interactives activities led by one-of-a-kind hosts-all
        without leaving home
      </p>
    </section>
  );
}
