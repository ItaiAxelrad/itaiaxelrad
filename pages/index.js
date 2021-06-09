import Head from 'next/head';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Model } from '@/components/Models';
import { skills } from '@/data/skills.js';
import { name } from '@/components/Layout';
import SkillCard from '@/components/SkillCard';
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
        className="fadeIn"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          top: '0',
          left: '0',
          cursor: 'initial',
          background: 'var(--light)',
        }}
      >
        <Canvas camera={{ position: [100, 8, -100] }}>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>

      <div
        style={{
          display: 'grid',
          gap: '1rem',
          alignSelf: 'center',
          pointerEvents: 'none',
        }}
      >
        <section
          className={utilStyles.headingMd}
          style={{ pointerEvents: 'none' }}
        >
          <h2 className={`${utilStyles.heading2Xl}`}>
            <span className={utilStyles.gradientText}>engineering</span>
            <span className={utilStyles.lightText}> &amp;</span>
            <br />
            <span className={utilStyles.gradientText}>design consultant</span>
          </h2>
          <p className={utilStyles.lightText} style={{ maxWidth: '40ch' }}>
            I specialize in water and wastewater infrastructure. You can find me
            working in the Denver area or{' '}
            <a href="https://www.axelradclimbing.com/">climbing</a> in the
            surrounding mountains
          </p>
        </section>
        <section
          className={utilStyles.skills}
          style={{ pointerEvents: 'none' }}
        >
          {skills.map((skill, i) => (
            <SkillCard skill={skill} key={i} />
          ))}
        </section>
      </div>
    </>
  );
}
