import { useState, useRef } from "react";
import { logoImg, menuOpen, menuClose } from ".";

interface NavlinkProps {
  links: navLinks[];
}

const headerNavbar = ({ links }: NavlinkProps) => {
  const navRef: any = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("mobile");
    setIsOpen(!isOpen);
  };
  return (
    <nav className="header__nav">
      <a href="#" aria-label="go to home page">
        <img src={logoImg} alt="w news logo" width={65} height={40} />
      </a>
      <div
        className={`${isOpen ? "mobile__nav--bg" : ""}`}
        onClick={showNavbar}
      />
      <button aria-label="Open Menu" className="btn" onClick={showNavbar}>
        <img src={menuOpen} alt="" width={40} height={17} />
      </button>
      <ul aria-label="Menu" ref={navRef} className="menu ">
        {links.map(({ url, title }) => (
          <li key={title}>
            <a href={url} onClick={showNavbar}>
              {title}
            </a>
          </li>
        ))}
        <li>
          <img
            src={menuClose}
            alt=""
            width={32}
            height={31}
            className="btn btn--close"
            onClick={showNavbar}
            aria-label="Close Menu"
          />
        </li>
      </ul>
    </nav>
  );
};

export default headerNavbar;
