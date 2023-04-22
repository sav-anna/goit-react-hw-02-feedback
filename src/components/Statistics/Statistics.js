import PropTypes from 'prop-types';
import css from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className={css.statistic}>good: {good}</p>
    <p className={css.statistic}>neutral: {neutral}</p>
    <p className={css.statistic}>bad: {bad}</p>
    <p className={css.statistic}>total: {total}</p>
    <p className={css.statistic}>positive feedback: {positivePercentage}%</p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};

export default Statistics;
