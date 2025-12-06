import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cutting-Edge AI Concepts',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // Reusing existing SVGs for now
    description: (
      <>
        Explore the latest advancements in Artificial Intelligence, from deep learning architectures to advanced perception systems.
      </>
    ),
  },
  {
    title: 'Humanoid Robotics Deep Dive',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, // Reusing existing SVGs for now
    description: (
      <>
        Delve into the mechanics, control, and intelligence that bring humanoid robots to life, covering locomotion, manipulation, and interaction.
      </>
    ),
  },
  {
    title: 'Practical, Hands-on Approach',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, // Reusing existing SVGs for now
    description: (
      <>
        Apply theory with practical examples, code snippets, and guidance on using tools like ROS 2, Gazebo, and NVIDIA Isaac Sim.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
