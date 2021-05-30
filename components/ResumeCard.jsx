import {
  FaAt,
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
} from 'react-icons/fa';
import Date from '@/components/Date';
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
            <FaGraduationCap className={utilStyles.icon} />
          ) : (
            <FaBriefcase className={utilStyles.icon} />
          )}
        </span>
        <div className={utilStyles.gridCol2Thumb}>
          <header>
            <h3>{event.title}</h3>
            <div className={utilStyles.info}>
              <FaAt className={utilStyles.icon} />
              <h4>{event.at}</h4>
              <FaMapMarkerAlt className={utilStyles.icon} />
              <h4>{event.location}</h4>
              <FaRegCalendarAlt className={utilStyles.icon} />
              <h4>
                <Date dateString={event.dateFrom} /> to{' '}
                <Date dateString={event.dateTo} />
              </h4>
            </div>
          </header>
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            className={utilStyles.thumbnail}
            width="100"
            height="100"
          />
        </div>

        <p>{event.description}</p>
      </div>
    </>
  );
};

export default ResumeCard;
