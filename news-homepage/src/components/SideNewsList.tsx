interface sideNewsListProps {
  title: string;
  news: sideNews[];
}

const SideNewsList: React.FC<sideNewsListProps> = ({ title, news }) => (
  <>
    <h2>{title}</h2>
    {news.map(({ id, url, title, description }) => (
      <section key={id} className="side__news">
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </section>
    ))}
  </>
);

export default SideNewsList;
