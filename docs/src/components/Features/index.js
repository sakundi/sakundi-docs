import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: <Translate>Research</Translate>,
    Image: "img/first-card.webp",
    description: (
      <Translate>Take a look at our academic research</Translate>
    ),
    link: "/docs/research/intro",
  },
  {
    title: <Translate>Blog</Translate>,
    Image: "img/third-card.webp",
    description: (
      <Translate>Go and read contents written by our team</Translate>
    ),
    link: "/blog",
  },
];

const Feature = ({ Image, title, description, link }) => (
  <div className={styles.cardWrapper}>
    <div className="text--center">
      <img className={styles.cardImage} src={Image} />
    </div>
    <div className={styles.cardBody}>
      <h2>{title}</h2>
      <div className={styles.cardDescription}>
        <p>{description}</p>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.cardButton}>
          <Link className={styles.cardText} to={link}>
            <Translate>Read more</Translate>
          </Link>
        </button>
      </div>
    </div>
  </div>
);

const Homepage = () => (
  <section className={styles.features}>
    <div className="container">

    <div align="center">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2sVjoDAEICI?si=SjbV1FRfCkEjAa_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    
      <div>
        <div className={styles.cardsContainer}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Homepage;
