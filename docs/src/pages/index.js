import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Features from "@site/src/components/Features";

import styles from "./index.module.css";

const HomepageHero = () => {

  return (
    <header className={styles.heroBanner}>
      <div className={styles.content}>
        <div className={clsx("container", styles.container )}>
          <div className={styles.image}></div>
          <h1 className={styles.subtitle}>
            <Translate>
              Technical Documentation
            </Translate>
          </h1>
          <div className={styles.buttons}>
            <Link
              className={clsx("button--lg", styles.buttonText)}
              to="/docs/user-section/welcome-to-sakundi"
            >
              <Translate>Gets started!</Translate>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const Home = () => {

  return (
    <Layout description="">
      <HomepageHero />
      <main>
        <Features />
      </main>
    </Layout>
  );
};

export default Home;
