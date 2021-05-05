import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faCalendar,
  faMapMarker,
  faGraduationCap,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import utilStyles from '@/styles/utils.module.css';

const ResumeCard = ({ event, index }) => {
  return (
    <>
      <style jsx>
        {`
          h3 {
            margin: 0;
            padding: 0;
          }
          h4 {
            font-weight: lighter;
            margin: 0;
            padding: 0;
          }
          p {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <div
        className={`${utilStyles.card} animateIn`}
        style={{ animationDelay: index * 100 + 'ms' }}
      >
        <span className={utilStyles.badge}>
          {event.type == 'education' ? (
            <FontAwesomeIcon
              icon={faGraduationCap}
              className={utilStyles.icon}
            />
          ) : (
            <FontAwesomeIcon icon={faBriefcase} className={utilStyles.icon} />
          )}
        </span>
        <div className={utilStyles.gridCol2Thumb}>
          <header>
            <h3>{event.title}</h3>
            <div className={utilStyles.info}>
              <FontAwesomeIcon icon={faAt} className={utilStyles.icon} />
              <h4>{event.at}</h4>
              <FontAwesomeIcon icon={faMapMarker} className={utilStyles.icon} />
              <h4>{event.location}</h4>
              <FontAwesomeIcon icon={faCalendar} className={utilStyles.icon} />
              <h4>
                <time dateTime={event.dateFrom}>{event.dateFrom}</time> to{' '}
                <time dateTime={event.dateTo}>{event.dateTo}</time>
              </h4>
            </div>
          </header>
          <img
            src={event.image}
            alt={event.title}
            loading='lazy'
            className={utilStyles.thumbnail}
            width='100'
            height='100'
          />
        </div>

        <p>{event.description}</p>
      </div>
    </>
  );
};

export default ResumeCard;
