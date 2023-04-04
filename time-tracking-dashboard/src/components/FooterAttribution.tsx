interface FooterData {
  beforeText: string;
  url: string;
  label: string;
  fromName: string;
  id: number;
}

interface IFooterAttributionProps {
  data: FooterData[];
}

const FooterAttribution: React.FC<IFooterAttributionProps> = ({ data }) => {
  return (
    <div className="footer--attribution">
      {data.map(({ beforeText, url, label, fromName, id }) => (
        <span key={id}>
          {beforeText}{" "}
          <a
            href={url}
            target="_blank"
            aria-label={label}
            rel="noreferrer noopener"
          >
            {fromName}
          </a>
          .{" "}
        </span>
      ))}
    </div>
  );
};

export default FooterAttribution;
