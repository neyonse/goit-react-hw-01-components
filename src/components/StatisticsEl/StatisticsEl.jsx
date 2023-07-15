import css from './StatisticsEl.module.css';
import PropTypes from 'prop-types';
import { getRandomColor } from 'components/utils';

export const StatisticsEl = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ borderColor: getRandomColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsEl.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
