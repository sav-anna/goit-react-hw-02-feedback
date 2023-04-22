import css from './FeedbackOption.module.css';
import PropTypes from 'prop-types';

const FeedbackOption = ({ options, onLeaveFeedback }) => (
  <div className={css.FeedbackOptions}>
    {options.map(option => {
      return (
        <button
          className={css.feedbackOptions__btn}
          key={option}
          name={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      );
    })}
  </div>
);

FeedbackOption.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;
