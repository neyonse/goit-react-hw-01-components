import statistics from 'data.json';
import css from 'components/Statistics/Statistics.module.css';
// import PropTypes from 'prop-types';
import { StatisticsEl } from 'components/StatisticsEl/StatisticsEl';

export const Statistics = ({ title }) => {
  return (
    <section className="statistics">
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {statistics.map(el => (
          <StatisticsEl
            key={el.id}
            label={el.label}
            percentage={el.percentage}
          />
        ))}
      </ul>
    </section>
  );
};
