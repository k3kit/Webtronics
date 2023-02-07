import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/icons/logoWebtronics.svg";
import { ReactSVG } from "react-svg";
const links = [
  { path: `/#`, title: "About" },
  { path: `/#`, title: "Programs" },
  { path: `/#`, title: "Steps" },
  { path: `/#`, title: "Questions" },
  { path: `/#`, title: "Get in touch" },
];

export const Header = () => {
  const logo = require("../../public/assets/icons/logoWebtronics.svg").default
    .src;
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <ReactSVG src={logo} color="#000" className="logo-header" />
          <nav className={styles.nav}>
            {links.map((it) => (
              <Link key={it.title} href={it.path} className={styles.link}>
                {it.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
