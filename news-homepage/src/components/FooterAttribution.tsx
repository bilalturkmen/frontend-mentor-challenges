interface footProps {
  data: footData[];
}

const FooterAttribution: React.FC<footProps> = ({ data }) => {
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
