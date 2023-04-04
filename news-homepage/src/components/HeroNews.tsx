interface heroNewsProps {
  news: heroNews[];
}

const HeroNews = ({ news }: heroNewsProps) => {
  return (
    <>
      {news.map(({ title, description, readlink, url }) => (
        <section key={title} className="hero__content">
          <h2>{title}</h2>
          <div>
            <p>{description}</p>
            <a href={url} aria-label={`Read more of the ${title}`}>
              {readlink}
            </a>
          </div>
        </section>
      ))}
    </>
  );
};

export default HeroNews;
