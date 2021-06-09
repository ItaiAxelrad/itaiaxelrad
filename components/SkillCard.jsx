import { SiAutodesk, SiPython, SiJavascript } from 'react-icons/si';
import utilStyles from '@/styles/utils.module.css';

const Icon = ({ icon, style }) => {
  switch (icon) {
    case 'Autodesk':
      return <SiAutodesk style={style} />;
      break;
    case 'Python':
      return <SiPython style={style} />;
      break;
    case 'Javascript':
      return <SiJavascript style={style} />;
      break;
    default:
      return <SiJavascript style={style} />;
      break;
  }
};
const SkillCard = ({ skill, i }) => {
  return (
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
        <Icon
          icon={skill.icon}
          style={{ fontSize: '2rem', color: 'var(--brand)' }}
        />
      </div>
      <h3>{skill.title}</h3>
      <p className={utilStyles.lightText} style={{ fontSize: '0.9rem' }}>
        {skill.description}
      </p>
    </div>
  );
};

export default SkillCard;
