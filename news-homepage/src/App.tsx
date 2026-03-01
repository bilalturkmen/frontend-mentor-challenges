import {
  Navbar,
  HeroBanner,
  HeroNews,
  SideNewsList,
  FeaturedNewsList,
  FooterAttribution,
  jsonData,
} from "./components";

export default function Home() {
  return (
    <div className="container">
      <header>
        <Navbar links={jsonData.navLinks} />
      </header>
      <main>
        <div className="hero">
          <h1 className="sr-only">w news hompage</h1>
          <div className="hero__news">
            <HeroBanner />
            <HeroNews news={jsonData.heroNews} />
          </div>
          <div className="hero__side">
            <SideNewsList title="New" news={jsonData.sideNews} />
          </div>
        </div>
        <FeaturedNewsList news={jsonData.featuredNews} />
      </main>
      <footer>
        <FooterAttribution data={jsonData.footData} />
      </footer>
    </div>
  );
}
