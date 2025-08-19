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
            Security and privacy for the Web3 world
            </Translate>
          </h1>
          <div className={styles.buttons}>
            <Link
              className={clsx("button--lg", styles.buttonText)}
              to="/docs/user-section/welcome-to-sakundi"
            >
              <Translate>Technical Documentation</Translate>
            </Link>
            <Link
              className={clsx("button--lg", styles.buttonText)}
              to="https://zikuani.app"
            >
              <Translate>Zikuani</Translate>
            </Link>
            <Link
              className={clsx("button--lg", styles.buttonText)}
              to="https://voto.sakundi.io"
            >
              <Translate>ZK Voto Digital</Translate>
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
