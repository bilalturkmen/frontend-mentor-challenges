import { featData } from ".";

interface Feature {
  title: string;
  description: string;
  image: {
    imageUrl: string;
    width: number;
    height: number;
    alt: string;
  };
}

const Features = () => {
  return (
    <section id="features" className="features">
      {featData.features.map((feat: Feature) => (
        <div key={feat.title} className="feature--card">
          <div className="card--img">
            <img
              src={feat.image.imageUrl}
              alt={feat.image.alt}
              width={feat.image.width}
              height={feat.image.height}
            />
          </div>
          <h2> {feat.title} </h2>
          <p>{feat.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
