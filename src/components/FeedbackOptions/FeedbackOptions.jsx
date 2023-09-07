import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  Button: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
