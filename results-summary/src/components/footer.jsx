//metadata
import { siteData } from "./";

function FooterComp({ fmUrl = siteData.fmUrl, devUrl = siteData.devUrl }) {
  return (
    <footer className="footer--attribution">
      Challenge by{" "}
      <a href={fmUrl} target="_blank" aria-label="visit the challenge page">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href={devUrl} target="_blank" aria-label="visit the coder's webpage">
        Bilal Türkmen
      </a>
      .
    </footer>
  );
}

export default FooterComp;
