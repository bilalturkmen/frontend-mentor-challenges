interface featuredNewsListProps {
  news: featuredNews[];
}

const FeaturedNewsList: React.FC<featuredNewsListProps> = ({ news }) => (
  <ul className="features">
    {news.map(({ image, url, id, title, description }) => (
      <li key={title}>
        <div className="feature--item">
          <img {...image} />
          <div className="item--content">
            <span>{id}</span>
            <h2>
              <a href={url}>{title}</a>
            </h2>
            <p>{description}</p>
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default FeaturedNewsList;
