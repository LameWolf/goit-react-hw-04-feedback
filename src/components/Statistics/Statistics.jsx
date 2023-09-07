import React from 'react';
import PropTypes from 'prop-types';
import { BaseTable, THead, Th, Tr, Td } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>Good:</Th>
          <Th>Neutral:</Th>
          <Th>Bad:</Th>
          <Th>Total:</Th>
          <Th>Positive feedback:</Th>
        </tr>
      </THead>

      <tbody>
        <Tr>
          <Td>{good}</Td>
          <Td>{neutral}</Td>
          <Td>{bad}</Td>
          <Td>{total}</Td>
          <Td>{positivePercentage}%</Td>
        </Tr>
      </tbody>
    </BaseTable>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
