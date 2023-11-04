import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'My Notebook',
    Svg: require('@site/static/img/personal_notebook.svg').default,
    description: (
      <>
        This is not just a website; it's my personal ReactJS notebook.
        Dive into the pages filled with my experiences, code snippets,
        and lessons learned as I master ReactJS.
      </>
    ),
  },
  {
    title: 'Comprehensive ReactJS Insights',
    Svg: require('@site/static/img/react_i.svg').default,
    description: (
      <>
        Explore a treasure trove of ReactJS knowledge on my website. It's where I compile my insights,
        tips, and discoveries, making it a valuable resource for anyone on their ReactJS journey.
      </>
    ),
  },
  {
    title: 'Learn with Me',
    Svg: require('@site/static/img/code_review.svg').default,
    description: (
      <>
        Join me on my ReactJS learning adventure. Together, we'll navigate the intricacies of ReactJS,
        sharing our challenges and triumphs. My website is your partner in this exciting journey.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
