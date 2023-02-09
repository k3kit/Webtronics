import React from "react";
import styles from "./footer.module.scss";
import { ReactSVG } from "react-svg";
import Link from "next/link";

export const enum LandingSections {
  ABOUT = "about",
  REVIEW = "review",
  STEPS = "steps",
  GALLERY = "gallery",
  FAQ = "faq",
  CONTACTUS = "contactus",
  PROGRAMMINGTECH = "programming",
}

const Companylinks = [
  { path: `/#${LandingSections.ABOUT}`, title: "About us" },
  { path: `/#${LandingSections.STEPS}`, title: "Steps" },
  { path: `/#${LandingSections.FAQ}`, title: "FAQs" },
  { path: `/#${LandingSections.REVIEW}`, title: "Review" },
  { path: `/#${LandingSections.GALLERY}`, title: "Gallery" },
];

const SocialLinks = [
  {
    path: `/#Facebook`,
    title: require("../../public/assets/icons/facebook.svg").default.src,
    label: "Facebook",
  },
  {
    path: `/#Twitter`,
    title: require("../../public/assets/icons/twitter.svg").default.src,
    label: "Twitter",
  },
  {
    path: `/#Gitlab`,
    title: require("../../public/assets/icons/gitlab.svg").default.src,
    label: "Gitlab",
  },
  {
    path: `/#Linkedin`,
    title: require("../../public/assets/icons/linkedin.svg").default.src,
    label: "Linkedin",
  },
];

export const Footer = () => {
  const logo = require("../../public/assets/icons/logoWebtronics.svg").default
    .src;
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.info}>
          <ReactSVG src={logo} color="#000" className="logo-header" />
          <p className={styles.info__text}>
            Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
          </p>
        </div>
        <div className={styles.company}>
          <h3 className={styles.title}>Company</h3>
          <div className={styles.links}>
            {Companylinks.map((link) => (
              <Link className={styles.link} href={link.path}>
                <p>{link.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.social}>
          <h3 className={styles.social__title}>Social media</h3>
          <div className={styles.social__links}>
            {SocialLinks.map((link) => (
              <Link aria-label={link.label} key={link.path} href={link.path}>
                <ReactSVG src={link.title} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
