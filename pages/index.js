import Head from 'next/head';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ElCapitan } from '@/components/Models';
import { skills } from '@/data/skills.js';
import { name } from '@/components/Layout';
import utilStyles from '@/styles/utils.module.css';

export const getStaticProps = async () => {
  return {
    props: { skills: skills },
  };
};

export default function Home({ skills }) {
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>

      <div
        className='fadeIn'
        style={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          top: '0',
          left: '0',
          cursor: 'initial',
          background: 'var(--light)',
        }}
      >
        <Canvas camera={{ position: [17, 17, -17] }}>
          <Suspense fallback={null}>
            <ElCapitan />
          </Suspense>
        </Canvas>
      </div>

      <div style={{ display: 'grid', gap: '1rem', pointerEvents: 'none' }}>
        <section
          className={utilStyles.headingMd}
          style={{ pointerEvents: 'none' }}
        >
          <h2 className={utilStyles.heading2Xl}>
            engineering <span className={utilStyles.lightText}>&amp;</span>{' '}
            <br />
            design consultant
          </h2>
          <p className={utilStyles.lightText} style={{ maxWidth: '40ch' }}>
            I specialize in water and wastewater infrastructure. You can find me
            working in the Denver area or{' '}
            <a href='https://www.axelradclimbing.com/'>climbing</a> in the
            surrounding mountains
          </p>
        </section>
        <section
          className={utilStyles.skills}
          style={{ pointerEvents: 'none' }}
        >
          {skills.map((skill, i) => (
            <div
              className={`${utilStyles.skill} animateIn`}
              style={{ animationDelay: i * 100 + 'ms' }}
              key={i}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  width: '100%',
                  paddingBottom: '0.5rem',
                }}
              >
                <img
                  alt={skill.title}
                  src={skill.icon}
                  width={32}
                  height={32}
                  className={utilStyles.brand}
                  loading='lazy'
                />
              </div>
              <h3>{skill.title}</h3>
              <p
                className={utilStyles.lightText}
                style={{ fontSize: '0.9rem' }}
              >
                {skill.description}
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
