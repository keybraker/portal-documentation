import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Add to Discord
            </Link>
          </div>
        </div>
      </header>
      <header className={clsx('hero hero--secondary', styles.heroBanner)}>
        <div className="container">
          <p className="hero__subtitle">
            With Portal's features and commands, you can have an organised<br />
            and fully functional server with just a few steps
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                styles.marginRight,
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Documentation
            </Link> <Link
              className={clsx(
                styles.marginRight,
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/commands/')}>
              Commands
            </Link> <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/features/')}>
              Features
            </Link>
          </div>
        </div>
      </header>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            a labor of love
          </h1>
        </div>
      </header>
      <main>
        <Link
          className={clsx(
            'button button--outline button--secondary button--lg',
            styles.getStarted,
          )}
          to={useBaseUrl('docs/commands/')}>
          All Commands
        </Link>
      </main>
    </Layout>
  );
}

export default Home;
