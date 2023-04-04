// components
import Navbar from "./Navbar";
import HeroBanner from "./HeroBanner";
import HeroNews from "./HeroNews";
import SideNewsList from "./SideNewsList";
import FeaturedNewsList from "./FeaturedNewsList";
import FooterAttribution from "./FooterAttribution";

// import images
import bannerDsk from "../assets/image-web-3-desktop.webp";
import bannerMbl from "../assets/image-web-3-mobile.webp";
import logoImg from "../assets/logo.svg";
import menuOpen from "../assets/icon-menu.svg";
import menuClose from "../assets/icon-menu-close.svg";

// import hooks
import useWindowSize from "../hooks/useWindow";
// import data
import jsonData from "../data/all.d.json";

//////////////////////////
// export component

export {
  Navbar,
  HeroBanner,
  HeroNews,
  SideNewsList,
  FeaturedNewsList,
  FooterAttribution,
};

// export img & data
export {
  bannerDsk,
  bannerMbl,
  logoImg,
  menuOpen,
  menuClose,
  useWindowSize,
  jsonData,
};
