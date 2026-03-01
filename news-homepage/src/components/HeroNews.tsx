interface heroNewsProps {
  news: heroNews[];
}

const HeroNews = ({ news }: heroNewsProps) => {
  return (
    <>
      {news.map(({ title, description, readlink, url }) => (
        <div key={title} className="hero__content">
          <h2>{title}</h2>
          <div>
            <p>{description}</p>
            <a href={url} aria-label={`Read more of the ${title}`}>
              {readlink}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default HeroNews;
