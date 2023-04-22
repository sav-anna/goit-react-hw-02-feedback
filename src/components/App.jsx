import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOption';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  countTotalFeedback = totalFeedback => {
    const { good, neutral, bad } = this.state;
    totalFeedback = Number(good + neutral + bad);
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <>
        <Section title="please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          ></FeedbackOptions>
        </Section>

        <Section title="statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message={'There is no feedback !'}></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
